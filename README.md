# Mars2D最简项目模版 - Vue版
    Mars2D地图平台软件，在`Vue技术栈下`的最简的应用项目模版，基于vueCli 4.x 
   

 > 其他技术栈，请参考： [https://github.com/marsgis/mars2d](https://github.com/marsgis/mars2d)
 
  
## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
 
### http运行项目
 `npm run serve`  运行后访问：`http://localhost:2001/` 

### 打包编译项目
 运行`npm run build`来构建项目。 

## 运行效果 
 [在线Demo](http://mars2d.cn/project/vue-template/)  

 ![image](http://mars2d.cn/project/vue-template/screenshot.jpg)
 

  
## 如何集成到自己已有的项目中
1. ### 安装mars2d依赖包
```bash
npm install mars2d   //或  cnpm install mars2d   或  yarn add mars2d
```

2. ### 拷贝文件
 > 场景配置文件：`public\config\config.json`

 > 组件定义文件：`src\components\mars2d\Map.vue`


4. ### 创建地球 
 参考 `src\views\Index.vue`文件引入Map组件和构造创建地球，主要关注下下面代码处
```js
<Map :url="configUrl" @onload="onMapload" />

import Map from '../components/mars2d/Map.vue'
```

 

## Mars2D 是什么 
>  `Mars2D地图平台软件` 是[火星科技](http://marsgis.cn/)研发的一个Web地图开发平台系统，是火星科技团队成员多年GIS开发和Leaflet使用的技术沉淀。基于Leaflet和现代Web技术栈全新构建， 集成了领先的开源地图库、可视化库，提供了全新的大数据可视化、实时流数据可视化功能，通过本产品可快速实现浏览器和移动端上美观、流畅的地图呈现与空间分析。

### 相关网站 
- Mars2D官网：[http://mars2d.cn](http://mars2d.cn)  

- GitHub导航列表：[https://github.com/marsgis/mars2d](https://github.com/marsgis/mars2d)


## 版权说明
1. 任何`个人或组织`可以在遵守Mars2D相关要求下`免费无限制`使用。
2. 如有`个性化需求`或`商业应用`，请联系[火星科技](http://mars2d.cn)购买。