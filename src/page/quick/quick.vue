<style lang="less">
  .quick-container {
    .quick-card {
      .el-card__header {
        padding: 0 20px;
        height: 48px;
        line-height: 48px;
      }
    }
  }
</style>

<style lang="less" scoped>
  .quick-container {
    .quick-card {
      margin: 0px 20px 20px 20px;
      .github-star {
        float: right;
        color: #108ee9;
        cursor: pointer;
      }
      .card-text {
        font-size: 13px;
        color: #999;
        line-height: 1.5;
      }
    }
  }
</style>
<template>
  <div class="quick-container">
    <el-card class="quick-card">
      <div slot="header">
        <span>项目前言</span>
        <a href="https://github.com/sosout/vue2-element" target="_blank" class="github-star">如果觉得不错的话，请star一下吧！</a>
      </div>
      <div class="card-text">本工程主要基于vue + vuex + less + ES6/7 + webpack + fetch + vue-router + store + element-ui实现的SPA后台管理系统模板。</div>
      <div class="card-text">编码时间：8:00——9:30, 下班时间——24:00，其他时间要工作。代码未优化，处女座代码必须要优化。由于代码延后，先向大家说声抱歉。您有什么问题可以私信我segmentfault。</div>
    </el-card>
    <el-card class="quick-card">
      <div slot="header">
        <span>项目上手</span>
      </div>
      <el-steps :space="200" :active="1">
        <el-step title="下载" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="安装" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="运行" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </el-card>
    <el-card class="quick-card">
      <div slot="header">
        <span>访问</span>
      </div>
      <div class="card-text">在浏览器地址栏输入http://localhost:8080/</div>
    </el-card>
    <el-card class="quick-card">
      <div slot="header">
        <span>项目说明</span>
      </div>
      <div class="card-text">此项目是本人空余时间搭建的。希望大家提供宝贵的意见和建议，谢谢。</div>
    </el-card>
  </div>
</template>

<script>
import { Card, Steps, Step } from 'element-ui';
export default {
  components: {
    ElCard: Card,
    ElSteps: Steps,
    ElStep: Step
  },
  data () {
    return {

    }
  }
}
</script>
