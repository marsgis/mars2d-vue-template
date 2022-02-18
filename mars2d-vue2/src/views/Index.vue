<template>
  <div id="centerDiv" class="mapcontainer">
    <mars2d-map :url="configUrl" @onload="onMapload" />
  </div>
</template>

<script>
import Mars2dMap from '../components/mars-work/mars2d-map.vue'

export default {
  name: 'Index',

  components: {
    Mars2dMap
  },

  data() {
    const basePathUrl = window.basePathUrl || ''
    return {
      configUrl: basePathUrl + 'config/config.json'
    }
  },

  methods: {
    // 地图构造完成回调
    onMapload(map) {
      // 以下为演示代码
      this.map = map
    }

  }
}
</script>

<style >
.mapcontainer {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
