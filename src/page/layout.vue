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
      padding: 70px 20px 20px 200px;
      width: auto;
      height: auto;
    }
  }
</style>
<template>
    <div class="console-body console-sidebar-full">
        <console-topbar></console-topbar>
        <console-sidebar></console-sidebar>
        <router-view class="console-main"></router-view>
    </div>
</template>
<script>
    import ConsoleTopbar from '../components/layout/consoleTopbar';
    import ConsoleSidebar from '../components/layout/consoleSidebar';
    export default {
        data () {
            return {
            }
        },
        components: {
            ConsoleTopbar,
            ConsoleSidebar
        },
        methods: {
        }
    }
</script>
