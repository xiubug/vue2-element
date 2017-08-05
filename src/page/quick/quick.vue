<style lang="less">
  .quick-container {
    .quick-card {
      .el-card__header {
        padding: 0 20px;
        height: 48px;
        line-height: 48px;
      }
      .el-step__description {
        margin-top: 15px;
        p {
          line-height: 1.5;
        }
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
      .card-btn {
        margin-top: 15px;
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
      <el-steps space="33.33%" :active="active" direction="vertical">
        <el-step title="下载">
          <div slot="description">
            <p>$ git clone</p>
            <p>$ git clone https://github.com/sosout/vue2-element.git</p>
            <p>$ cd vue2-element</p>
          </div>
        </el-step>
        <el-step title="安装">
          <div slot="description">
            <p>// 安装前请先确保已安装node和npm</p>
            <p>// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules</p>
            <p>$ yarn install</p>
          </div>
        </el-step>
        <el-step title="运行">
          <div slot="description">
            <p>$ yarn run dev(开发版本，用于开发使用，热加载)</p>
            <p>$ yarn run build(生产版本，对代码进行混淆压缩，提取公共代码，分离css文件)</p>
          </div>
        </el-step>
      </el-steps>
      <el-button class="card-btn" v-show="active == 3" type="primary" @click="finish" size="small">完成</el-button>
      <el-button class="card-btn" v-show="active < 3" type="primary" @click="next" size="small">下一步</el-button>
      <el-button class="card-btn" v-show="active > 1" @click="prev" size="small">上一步</el-button>
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
import { Card, Steps, Step, Button } from 'element-ui';
export default {
  components: {
    ElCard: Card,
    ElSteps: Steps,
    ElStep: Step,
    ElButton: Button
  },
  data () {
    return {
      active: 1
    }
  },
  methods: {
    prev() { // 上一步
      const that = this;
      if (that.active-- < 2) that.active = 1;
    },
    next() { // 下一步
      const that = this;
      if (that.active++ > 2) that.active = 3;
    },
    finish() { // 完成
      const that = this;
      that.active = 1;
      that.$message.success('恭喜您，大牛！');
    }
  }
}
</script>
