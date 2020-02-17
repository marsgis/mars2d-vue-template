# Mars2D三维地球 - Vue脚手架
 Vue技术栈下的一个最简[Mars2D](http://leaflet.marsgis.cn)应用的三维地球项目模版,Mars2D等库都是采用import方式引入。
 这是一个基于 [VueCli](https://cli.vuejs.org/config/)并整合了Leaflet、MarsGIS的基础项目。

当前脚手架内Mars2D等所有js库都是**采用import方式引入的**。
```javascript
import L from   "../map/leaflet-mars/leaflet";
```

 其他技术栈，请参考 [Mars2D开源导航](https://github.com/marsgis/MarsGIS-for-Leaflet)
 

## 运行效果 
  [在线Demo1](http://leaflet.marsgis.cn/project/simple-es5/index.html) 、
 [在线Demo2](http://leaflet.marsgis.cn/project/simple-es5/index.html?config=config/gcj.json)  、
 [在线Demo3](http://leaflet.marsgis.cn/project/simple-es5/index.html?config=config/baidu.json) 

 ![image](http://leaflet.marsgis.cn/project/img/simple-es5.jpg)
 
 [更多项目体验](http://leaflet.marsgis.cn/project.html)


 
 

## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
 
### http运行项目
 `npm run serve`  运行后访问：`http://localhost:2019/`  。 修改代码自动热部署，无缓存不用手动刷新

### 打包编译项目
 运行`npm run build`来构建项目。 


## 项目说明
 当前仓库是一个最简的项目模板，并且所有第3方js库都是import的标准引入方式。
 
 
### 更新项目
 此脚手架中类库不保证是最新版本，请您自行拷贝交付资料中任意包下的  `lib\leaflet-mars\` 覆盖至: `src\map\leaflet-mars\`目录下
 

### 与[mars2d-simple-vue](https://github.com/marsgis/mars2d-simple-vue)仓库的区别
1. 当前是import方式引入lib的，而 mars2d-simple-vue是head静态资源引入。 

## 版权说明
  本项目主要是为了展示[Mars2D](http://leaflet.marsgis.cn)的项目应用，仅限大家学习之用，如需用于商业项目，请联系购买[火星科技](http://leaflet.marsgis.cn)SDK授权。
 并且Mars2D-SDK类库并未开源（即`src\map\leaflet-mars\`）,内部有作者公司logo及时效限制。