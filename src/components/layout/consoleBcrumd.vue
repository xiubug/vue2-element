<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/quick' }">首页</el-breadcrumb-item>
    <div v-if="$route.meta && $route.meta.bcrumd">
      <el-breadcrumb-item v-for="(item, index) in $route.meta.bcrumd" :key="index">{{item}}</el-breadcrumb-item>
    </div>
  </el-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui';
export default {
  components: {
    ElBreadcrumb: Breadcrumb,
    ElBreadcrumbItem: BreadcrumbItem
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
