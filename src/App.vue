<template>
  <div id="app" class="appName">
    <div><router-link :to="{name: 'home'}">首页</router-link></div>
    <div><router-link :to="{name: 'list'}">列表</router-link></div>
    <router-view/>
    <footer-menu :footerMenuIndex="0"></footer-menu>
  </div>
</template>

<script>
import footerMenu from 'components/common/footerMenu'
export default{
  data () {
    return {
      text: 'name'
    }
  },
  components: {
    footerMenu
  }
}
</script>
<style lang="less" scoped>
.appName {
  width: 100%;
  text-align: center;
  height: 100%;
}
</style>
  