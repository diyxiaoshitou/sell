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
 better-scroll自己派发事件时支持 event._constructed值为true;
 浏览器原生事件是没有event._constructed这个属性的
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

 
 $els  调用元素的对象
 $refs 调用子组件的对象
 
 

