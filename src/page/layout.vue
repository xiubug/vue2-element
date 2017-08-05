<style lang="less" scoped>
  .console-body {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #fff;
    z-index: 100;
    overflow-x: hidden;
    overflow-y: auto;
    .console-main {
      position: relative;
      padding: 50px 0px 0px 180px;
      width: auto;
      height: auto;
      background-color: #eff2f7;
      .console-bcrumd {
        padding: 0px 20px;
        height: 50px;
        line-height: 50px;
      }
      .console-content {
        padding: 20px;
        background-color: #fff;
      }
    }
  }
</style>
<template>
    <div class="console-body">
        <console-topbar></console-topbar>
        <console-sidebar></console-sidebar>
        <div class="console-main">
          <console-bcrumd class="console-bcrumd"></console-bcrumd>
          <router-view class="console-content"></router-view>
        </div>
    </div>
</template>
<script>
    import ConsoleTopbar from '../components/layout/consoleTopbar';
    import ConsoleSidebar from '../components/layout/consoleSidebar';
    import ConsoleBcrumd from '../components/layout/consoleBcrumd';
    export default {
        data () {
            return {
            }
        },
        components: {
            ConsoleTopbar,
            ConsoleSidebar,
            ConsoleBcrumd
        },
        methods: {
        }
    }
</script>
