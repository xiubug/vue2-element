<style lang="less">
.console-sidebar {
  .el-submenu__title {
    font-size: 12px;
    height: 46px;
    line-height: 46px;
  }
  .el-submenu {
    background: #37424f;
    border-bottom: 1px solid #414d5c;
  }
  .el-submenu__icon-arrow {
    right: 40px;
    margin-top: -4px;
  }
  .el-icon-message {
    font-size: 12px;
  }
  .el-menu-item {
    font-size: 12px;
    height: 42px;
    line-height: 42px;
    &.is-active {
      border-right: none;
      color: #fff;
      background: #0099cc !important;
      &:hover {
        background: #0099cc !important;
      }
    }
  }
}
</style>
<style scoped lang="less">
  .console-sidebar {
    position: fixed;
    top: 50px;
    bottom: 0px;
    background-color: #293038;
    z-index: 102;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    width: 180px;
    .sidebar-content {
      width: 200px;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background: #293038;
      .sidebar-fold {
        height: 30px;
        width: 140px;
        background: #394555;
        color: #aeb9c2;
        text-align: left;
        padding: 0 20px;
        line-height: 30px !important;
        user-select: none;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
      }
    }
  }
</style>
<template>
  <div class="console-sidebar">
    <el-menu :unique-opened='true' theme="dark" default-active="1" class="sidebar-content" @open="handleOpen" @close="handleClose">
      <div class="sidebar-fold">版本1.0.0</div>
      <el-menu-item index="1"><i class="el-icon-message"></i>快速入门</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          基础服务
        </template>
        <el-menu-item index="2-1"><i class="el-icon-document"></i>三级菜单</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-message"></i>
          用户中心
        </template>
        <el-menu-item index="3-1"><i class="el-icon-document"></i>用户管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import { Menu, Submenu, MenuItem, Icon } from 'element-ui';
  export default {
    components: {
      ElMenu: Menu,
      ElSubmenu: Submenu,
      ElMenuItem: MenuItem,
      Icon: Icon
    },
    data () {
        return {}
    },
    ready() {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
