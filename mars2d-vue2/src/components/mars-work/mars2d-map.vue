<template>
  <div :id="`mars2d-container${mapKey}`" class="mars2d-container"></div>
</template>

<script>
import Vue from 'vue'

// 使用免费开源版本
import 'leaflet/dist/leaflet.css'
import 'leaflet'
import 'mars2d/dist/mars2d.css'
import * as mars2d from 'mars2d'

// let mars2d = window.mars2d

// 导入插件(其他插件类似，插件清单访问：http://mars2d.cn/dev/guide/start/architecture.html)
// echarts插件
// import 'mars2d-esri'

// 为了方便使用,绑定到原型链，在其他vue文件，直接 this.mars2d 来使用
Vue.prototype.mars2d = mars2d
Vue.prototype.L = mars2d.L

export default {
  name: 'mars2dViewer',

  props: {
    // 地图唯一性标识
    mapKey: {
      type: String,
      default: ''
    },
    // 初始化配置config.json的地址
    url: String,
    // 自定义参数
    options: Object
  },

  mounted() {
    mars2d.Util.fetchJson({ url: this.url })
      .then((data) => {
        // 构建地图
        this.initMars2D({
          ...data,
          ...this.options
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  beforeDestroy () {
    const map = this[`map${this.mapKey}`]
    if (map) {
      map.destroy()
      delete this[`map${this.mapKey}`]
    }
  },

  methods: {
    initMars2D(mapOptions) {
      if (this[`map${this.mapKey}`]) {
        this[`map${this.mapKey}`].destroy()
      }

      // 创建三维地球场景
      var map = new mars2d.Map(`mars2d-container${this.mapKey}`, mapOptions)

      this[`map${this.mapKey}`] = map

      console.log('>>>>> 2D地图创建成功 >>>>', map)

      // 挂载到全局对象下，所有组件通过 this.map 访问
      // Vue.prototype[`map${this.mapKey}`] = map

      // 绑定对alert的处理，右键弹出信息更美观。
      // window.haoutil = window.haoutil || {}
      // window.haoutil.msg = (msg) => {
      //   this.$message.success(msg)
      // }
      // window.haoutil.alert = (msg) => {
      //   this.$message.success(msg)
      // }

      // 抛出事件
      this.$emit('onload', map)
    }
  }
}
</script>

<style>
.mars2d-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

</style>
