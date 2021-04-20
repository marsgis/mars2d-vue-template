<template>
  <div :id="`mars2d-container${mapKey}`" :class="['map']"></div>
</template>

<script>
import Vue from 'vue'

// 使用免费开源版本
import * as L from 'mars2d'
import 'mars2d/dist/mars2d.css'

// 为了方便使用,绑定到原型链，在其他vue文件，直接 this.L 来使用
Vue.prototype.L = L

export default {
  name: 'mars2dViewer',

  props: {
    // 初始化配置参数
    url: String,

    // 地图唯一性标识
    mapKey: {
      type: String,
      default: ''
    },

    // 自定义参数
    options: Object,

    // 是否插入到body元素上
    appendToBody: {
      type: Boolean,
      default: false
    },

    // 自定义css类名
    customClass: {
      type: String,
      default: ''
    }
  },
  mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$el)
    }

    if (this.mapKey) {
      this.initMars2d(this.options)
    } else {
      fetch(this.url)
        .then(function (response) {
          return response.json()
        })
        .then((json) => {
          this.initMars2d(json.map)
        })
    }
  },

  destroy() {
    this[`map${this.mapKey}`].remove()
    delete this[`map${this.mapKey}`]
  },

  methods: {
    initMars2d(options) {
      if (this[`map${this.mapKey}`]) return

      const mapOptions = {
        ...options,
        ...this.options
      }

      var map = L.mars.createMap({
        id: `mars2d-container${this.mapKey}`, // 地图Div容器的id，
        data: mapOptions
      })

      this[`map${this.mapKey}`] = map

      console.log('>>>>> 2D地图创建成功 >>>>', map)

      // 抛出事件
      this.$emit('onload', map)
    }
  }
}
</script>

<style scoped>
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
