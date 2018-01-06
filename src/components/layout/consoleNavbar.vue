<style lang="less">
.console-navbar {
  .el-menu {
    margin-top: 70px;
    width: 150px !important;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #eaedf1;
  }
  .el-menu-item-group__title {
    position: fixed;
    left: 180px;
    top: 50px;
    width: 100px;
    height: 70px;
    line-height: 70px;
    background: #d9dee4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 700;
    color: #333;
    padding: 0px 15px !important;
    z-index: 10;
  }
  .el-menu-item {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    &.is-active {
      color: #39f;
      border-right: 22px solid #39f;
      z-index: 2;
      background-color: #fff;
    }
  }
}
</style>
<style lang="less" scoped>
  .console-navbar {
    position: fixed;
    top: 50px;
    bottom: 0;
    z-index: 2;
    overflow: hidden;
    transition: all .2s ease;
    width: 150px;
    &.navbar-full {
      left: 180px;
    }
    .product-nav-stage {
      width: 130px;
      overflow: hidden;
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0;
    }
  }
</style>
<template>
  <div class="console-navbar navbar-full">
		<div class="product-nav-stage">
			<el-menu mode="vertical" :router='true' :default-active="defaultActive">
        <el-menu-item-group :title="$route.meta && $route.meta.bcrumd && $route.meta.bcrumd.length > 0 && $route.meta.bcrumd[1]">
          <el-menu-item v-for="(item, index) in $route.meta.navbar" :key="index" :index="item.index" :class="{'is-active': defaultActive == item.index}">{{item.title}}</el-menu-item>
        </el-menu-item-group>
      </el-menu>
		</div>
	</div>
</template>

<script>
import { Menu, MenuItem, MenuItemGroup } from 'element-ui';
export default {
  components: {
    ElMenu: Menu,
    ElMenuItem: MenuItem,
    ElMenuItemGroup: MenuItemGroup
  },
  data () {
    return {

    }
  },
  computed: {
    defaultActive: function() {
      return this.$route.path;
    }
  }
}
</script>
