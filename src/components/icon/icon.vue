<template>
  <span :class="iconSize">
  <span class="icon" :class="classType"></span>
  </span>
</template>

<script type="text/ecmascript-6">
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  export default {
    props: {
      types: {
        type: Number
      },
      size: {
        type: Number
      }
    },
    computed: {
      iconSize: function () {
        return 'icon-' + this.size;
      },
      classType: function () {
        return classMap[this.types];
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

    .icon-1
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        margin-right: 4px
        background-size: 12px 12px
        background-repeat: no-repeat
        font-size 0

        &.decrease
          bg-image('decrease_1')
        &.discount
          bg-image('discount_1')
        &.guarantee
          bg-image('guarantee_1')
        &.invoice
          bg-image('invoice_1')
        &.special
          bg-image('special_1')
    .icon-2
      .icon
        display: inline-block
        vertical-align: top
        width: 16px
        height: 16px
        margin-right: 4px
        background-size: 16px 16px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_2')
        &.discount
          bg-image('discount_2')
        &.guarantee
          bg-image('guarantee_2')
        &.invoice
          bg-image('invoice_2')
        &.special
          bg-image('special_2')
    .icon-3
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        margin-right: 2px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
    .icon-4
      .icon
        display: inline-block
        vertical-align: top
        width: 16px
        height: 16px
        margin-right: 4px
        background-size: 16px 16px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_4')
        &.discount
          bg-image('discount_4')
        &.guarantee
          bg-image('guarantee_4')
        &.invoice
          bg-image('invoice_4')
        &.special
          bg-image('special_4')


</style>
