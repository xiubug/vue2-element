<style scoped>
    .console-body {
        position: absolute;
        width: 100%;
        top: 50px;
        bottom: 0px;
        background-color: #fff;
        z-index: 100;
    }
</style>
<template>
    <div class="console-body console-sidebar-full">
        <console-topbar></console-topbar>
        <console-sidebar></console-sidebar>
        <router-view></router-view>
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
