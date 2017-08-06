<style lang="less" scoped>
  .console-body {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #eff2f7;
    z-index: 100;
    overflow-x: hidden;
    overflow-y: auto;
    .console-main {
      position: relative;
      padding: 50px 0px 0px 180px;
      width: auto;
      height: auto;
      &.console-main-full {
        margin-left: 130px;
      }
      .console-bcrumd {
        padding: 0px 20px;
        height: 50px;
        line-height: 50px;
      }
    }
  }
</style>
<template>
    <div class="console-body">
        <console-topbar></console-topbar>
        <console-sidebar></console-sidebar>
        <console-navbar v-show="hasNavbar"></console-navbar>
        <div class="console-main" :class="{'console-main-full': hasNavbar}">
          <console-bcrumd class="console-bcrumd"></console-bcrumd>
          <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import ConsoleTopbar from '../components/layout/consoleTopbar';
    import ConsoleSidebar from '../components/layout/consoleSidebar';
    import ConsoleBcrumd from '../components/layout/consoleBcrumd';
    import ConsoleNavbar from '../components/layout/consoleNavbar';
    export default {
      components: {
        ConsoleTopbar,
        ConsoleSidebar,
        ConsoleBcrumd,
        ConsoleNavbar
      },
      data () {
        return { }
      },
      computed: {
        hasNavbar () {
          const $route = this.$route;
          return $route.meta && $route.meta.navbar && $route.meta.navbar.length > 0;
        }
      },
      methods: { }
    }
</script>
