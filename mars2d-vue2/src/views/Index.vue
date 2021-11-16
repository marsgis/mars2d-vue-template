<template>
  <div id="centerDiv" class="mapcontainer">
    <Map :url="configUrl" @onload="onMapload" />
  </div>
</template>

<script>
import Map from '../components/mars2d/Map.vue'

export default {
  name: 'Index',

  components: {
    Map
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
