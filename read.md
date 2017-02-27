  ### 1. 父组件调用子组件的方法
  1. 调用的组件上定义 `v-ref:food` 属性
  1. 方法里调用 `this.$refs.food.show();` 这样就可以调用子组件food里的 *show* 方法了


  ### 2.元素上这么添加动画效果
  html 里的元素上添加 `transition='move'` move是名字
  ```html
    <div transition="move"></div>
  ```
  样式里按下面定义
  ```stylus
    &.move-transition
      transition: all 0.2s linear
      transform: translate3d(0, 0, 0)
    &.move-enter, &.move-leave
      transform: translate3d(100%, 0, 0)
```
### 3.详情页顶部图片的实现技巧
```html
  <div class="image-header">
     <img :src="food.image">
   </div>
```
样式里按下面定义(外边框定义了 `width:100%； height:0；padding-top:100%`)这些属性的是必须的
```stylus
  .image-header
    position: relative
    width:100%
    height:0
    padding-top:100%
    img
      position: absolute
      left:0
      top:0
      width:100%
      height:100%
```
###  4.用better-scroll 时防止pc多次点击
 better-scroll派发事件和普通原生js派发事件有区别
 better-scroll自己派发事件时支持 `event._constructed` 值为true;
 浏览器原生事件是没有`event._constructed`这个属性的
```js
  if (!event._constructed) {
    return;
  }
```
###  5.阻止事件冒泡和阻止默认事件(`@click.stop.prevent`)
  ```html
<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)" transition="move">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
```

### 6.子组件自定义事件，当子组件变动时通知父组件
**子组件:** 子组件派遣通知父组件
```js
   this.$dispatch('ratingtype.select', type);
```
**父组件:** 接收子组件的变动事件，来改变父组件的内容
```js
 events: {
      'ratingtype.select'(type){
        this.selectType = type;
      },
      'content.toggle'(onlyContent){
        this.onlyContent = onlyContent;
      }
    }
```
### 7.$nextTick 的作用
dom更新时，没反应是这么回事,是因为vue的dom更新是异步的，会放到一个更新队列里面，等到下一下个时间周期，才会执行 $nextTick会触发异步更新如：`better-scroll`,因而能时时改变dom

### 8.一位变两位数的时候补0函数技巧
```js
function padLeftZero(str) {
  return ('00' + str).substr(str.length);

}
```
### 9.什么时候用 `display:inline-block; vertical-align:top` 属性
首先两个元素在一行上，不同属性如：一个是文字，一个是图标；这种情况时用

```
display:inline-block; vertical-align:top;
```
### 10.css样式布局
css样式影响重排的放上面，影响重绘的放下面
一般重绘的样式是可以继承的如（`font,color`）等
一般重排的样式是不可以继承的如（`margin,display,width,height`）等

### 11. vue中 钩子函数的意义
- `ready` 生命周期是页面渲染以后执行
- `watch` 刷新页面时监听远程数据请求的变化，一有数据，才初始化

`ready`优先于`watch`


 $els  调用元素的对象
 $refs 调用子组件的对象
