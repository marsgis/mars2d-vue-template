<template>
  <div id="map" class="map"></div>
</template>

<script>
import "../map/leaflet-mars/leaflet.css";
import L from   "../map/leaflet-mars/leaflet";
import  "../map/esri/esri-leaflet-debug";

import { getMapConfig } from "../api/map";

export default {
  name: "mapContainer",
  mounted() {
    getMapConfig().then(config => {

      var map = L.mars.createMap({
        id: "map", //地图Div容器的id，
        data: config.map,
      });

      this.map = map; 


    });
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style >
.map {
  width: 100%;
  height: 100%;
}
</style>