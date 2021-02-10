# Mars2D三维地球 - Vue脚手架
 Vue技术栈下的一个最简[Mars2D](http://mars2d.cn)应用的三维地球项目模版,Mars2D等库都是采用import方式引入。
 这是一个基于 [VueCli](https://cli.vuejs.org/config/)并整合了Leaflet、MarsGIS的基础项目。

当前脚手架内Mars2D等所有js库都是**采用import方式引入的**。
```javascript
import L from   "../map/mars2d/mars2d";
```

 其他技术栈，请参考 [Mars2D开源导航](https://github.com/marsgis/mars2d)
 

## 运行效果 
  [在线Demo1](http://mars2d.cn/project/simple-es5/index.html) 、
 [在线Demo2](http://mars2d.cn/project/simple-es5/index.html?config=config/gcj.json)  、
 [在线Demo3](http://mars2d.cn/project/simple-es5/index.html?config=config/baidu.json) 

 ![image](http://mars2d.cn/project/img/simple-es5.jpg)
 
 [更多项目体验](http://mars2d.cn/project.html)


 
 

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
 此脚手架中类库不保证是最新版本，请您自行拷贝交付资料中任意包下的  `lib\leafletjs\mars2d\` 覆盖至: `src\map\mars2d\`目录下
 

### 与[mars2d-vue-project](https://github.com/marsgis/mars2d-vue-project)仓库的区别
1. 当前是import方式引入lib的，而 mars2d-vue-project是head静态资源引入。 

## 版权说明
  本项目主要是为了展示Mars2D的项目应用，Mars2D-SDK类库目前并未开源（即`libs/leafletjs/mars2d/`）,但支持大家免费学习及使用。
  如需要平台功能示例源码及相关文档手册，或用于商业项目，请联系购买[火星科技](http://mars2d.cn)SDK授权。