<template>
  <div class="v_title">
  <div class="line"></div>
  <div class="text">{{title}}</div>
  <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      }
    }

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .v_title
    display: flex
    width: 80%
    margin: 0 36px
    .line
      flex: 1
      position: relative
      top: -6px
      border-bottom: 1px solid rgba(255, 255, 255, .2)
    .text
      padding: 0 12px
      font-size: 14px
      font-weight: 700
</style>
