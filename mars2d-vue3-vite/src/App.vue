<template>
  <Mars2dMap :url="configUrl" map-key="test" @onload="marsOnload" />
</template>

<script setup lang="ts">
import * as mars2d from "mars2d";
import Mars2dMap from "./components/mars-work/mars2d-map.vue";
let L = mars2d.L;

const configUrl = "config/config.json";

let graphicLayer: any;

const marsOnload = (map: any) => {
  graphicLayer = new mars2d.layer.GraphicLayer({});
  map.addLayer(graphicLayer);

  // 2.在layer上绑定监听事件
  graphicLayer.on(mars2d.EventType.click, function (event: any) {
    console.log("监听layer，单击了矢量对象", event);
  });

  // 加一些演示数据
  addDemoGraphic1();
  // addDemoGraphic2()
  addDemoGraphic3();
  addDemoGraphic4();
  addDemoGraphic5();
  addDemoGraphic6();
  addDemoGraphic7();
  addDemoGraphic8();
  addDemoGraphic9();
  addDemoGraphic10();
  // addDemoGraphic11()
  addDemoGraphic12();
};

// 图标点
function addDemoGraphic1() {
  const graphic = new mars2d.graphic.Marker({
    latlng: [31.854628, 117.245425],
    style: {
      image: "http://mars2d.cn/img/marker/mark1.png",
      width: 32,
      height: 44,
      // rotationAngle: 90,
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 像素点
function addDemoGraphic3() {
  const graphic = new mars2d.graphic.Point({
    latlng: L.latLng(31.842639, 117.225795),
    style: {
      pixelSize: 10,
      // fill: true,
      color: "#00ffff",
      opacity: 0.3,
      outline: true,
      outlineColor: "#00ff00",
      outlineOpacity: 1.0,
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 文本
function addDemoGraphic4() {
  const graphic = new mars2d.graphic.Label({
    latlng: L.latLng(31.818606, 117.296904),
    style: {
      text: "安徽合肥欢迎您",
      color: "#0000FF",
      font_size: 25,
      font_family: "楷体",
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 一个黑色面板，指向左下角黄色连线
function addDemoGraphic5() {
  const graphic = new mars2d.graphic.DivGraphic({
    latlng: [31.822294, 117.221761],
    style: {
      html: `<div class="marsBlackPanel  animation-spaceInDown">
                    <div class="marsBlackPanel-text">大湖名城,创新高地</div>
                </div>`,
    },
  });
  graphicLayer.addGraphic(graphic);

  // graphic.testPoint = true; //打开测试点，与DIV点进行对比位置调整css
}

// 圆
function addDemoGraphic6() {
  const graphic = new mars2d.graphic.Circle({
    latlng: L.latLng(31.818606, 117.296904),
    style: {
      radius: 2500, // 单位：米
      fill: true,
      fillColor: "#ff0000",
      fillOpacity: 0.3,
      outline: false,
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 椭圆
function addDemoGraphic7() {
  const graphic = new mars2d.graphic.Ellipse({
    latlng: [31.81748, 117.251587],
    style: {
      semiMinorAxis: 1000, // 单位：米
      semiMajorAxis: 2000,
      rotation: 0,

      fill: true,
      fillColor: "#00ffff",
      fillOpacity: 0.3,
      outline: true,
      outlineWidth: 2,
      outlineColor: "#00ff00",
      outlineOpacity: 0.5,
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 线
function addDemoGraphic8() {
  const graphic = new mars2d.graphic.Polyline({
    latlngs: [
      [31.809299, 117.163284],
      [31.777104, 117.169052],
      [31.764332, 117.211006],
    ],
    style: {
      width: 4,
      color: "rgb(255, 0, 100)",
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 平行线
function addDemoGraphic9() {
  const coords = [
    [31.853069, 117.154857],
    [31.848546, 117.15404],
    [31.846285, 117.153482],
    [31.844166, 117.151462],
    [31.84183, 117.150301],
    [31.839572, 117.151505],
    [31.836659, 117.153999],
    [31.834728, 117.155159],
    [31.833051, 117.155461],
  ];

  const middleLine = new mars2d.graphic.Polyline({
    latlngs: coords,
    style: {
      width: 1,
      dashArray: "5,10",
      color: "black",
      opacity: 0.3,
    },
  });
  graphicLayer.addGraphic(middleLine);

  const leftLine = new mars2d.graphic.Polyline({
    latlngs: coords,
    style: {
      color: "#f00",
      opacity: 1,
      offset: -6,
    },
  });
  graphicLayer.addGraphic(leftLine);

  const rightLine = new mars2d.graphic.Polyline({
    latlngs: coords,
    style: {
      color: "#080",
      opacity: 1,
      offset: 6,
    },
  });
  graphicLayer.addGraphic(rightLine);
}

// 矩形
function addDemoGraphic10() {
  const latlngs = [
    [31.870639, 117.271662],
    [31.8491, 117.247705],
  ];
  const graphic = new mars2d.graphic.Rectangle({
    latlngs: latlngs,
    style: {
      fill: true,
      fillColor: "#3388ff",
      fillOpacity: 0.3,
      outline: true,
      outlineWidth: 2,
      outlineColor: "#0000FF",
      outlineOpacity: 0.5,
    },
  });
  graphicLayer.addGraphic(graphic);
}

// 水面
function addDemoGraphic12() {
  // 经纬度 转为leafelt的纬度、经度标准
  const latlngs = mars2d.PointTrans.coords2latlngs([
    [117.216386, 31.815376, 35.16],
    [117.222533, 31.81729, 29.21],
    [117.22642, 31.814983, 28.43],
    [117.22681, 31.810739, 28.55],
    [117.212868, 31.811302, 34.4],
    [117.212538, 31.81424, 31.87],
    [117.214681, 31.81402, 32.97],
  ]);
  const graphic = new mars2d.graphic.Polygon({
    latlngs: latlngs,
    style: {
      fill: true,
      image: "img/fill/movingRiver.png",
      outline: true,
      outlineWidth: 6,
      outlineColor: "#00ffff",
      outlineOpacity: 1.0,
    },
  });
  graphicLayer.addGraphic(graphic);
}
</script>

<style></style>
