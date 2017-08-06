<style lang="less" scoped>
  .login-container {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #141a48;
    background-image: url(../../assets/login-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  #loginThree {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -230px 0 0 -180px;
    width: 310px;
    height: 240px;
    padding: 25px;
    box-shadow: 0 0 100px rgba(0,0,0,.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    .login-logo {
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      margin-bottom: 24px;
      img {
        width: 40px;
        margin-right: 8px;
      }
      span {
        vertical-align: text-bottom;
        font-size: 16px;
        text-transform: uppercase;
        display: inline-block;
      }
    }
    .login-account {
      color: #999;
      text-align: center;
      margin-top: -15px;
      span {
        font-size: 12px;
        &:first-child {
          margin-right: 16px;
        }
      }
    }
  }
  .form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
<template>
  <div class="login-container">
    <transition name="form-fade" mode="in-out">
      <div class="login-form" v-show="showLogin">
        <div class="login-logo">
          <img src="../../images/logo.png"> <span>element</span>
        </div>
        <el-form :model="formLogin" :rules="rulesLogin" ref="formLogin">
          <el-form-item prop="username">
            <el-input type="text" v-model="formLogin.username" auto-complete="off" @keyup.enter.native="submitForm('formLogin')"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="formLogin.password" auto-complete="off" @keyup.enter.native="submitForm('formLogin')" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formLogin')">登录</el-button>
            <el-button @click="resetForm('formLogin')">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="login-account">
          <span>账号：sosout</span><span>密码：sosout</span>
        </div>
      </div>
    </transition>
    <div id="loginThree"></div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from 'element-ui';
import THREE from '../../libs/three/three';
import UserApi from '../../api/user';
export default {
  components: {
    ElForm: Form,
    ElFormItem: FormItem,
    ElInput: Input,
    ElButton: Button
  },
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      rulesLogin: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      showLogin: false
    };
  },
  created () {
    const that = this;
    let $sto = that.$sto;
    let $conf = that.$conf;
    let cookies = $sto.get($conf.constant.cookie);
    that.formLogin.username = (cookies && cookies.username) || '';
  },
  mounted () {
    const that = this;
    that.showLogin = true;
    that.init3D();
  },
  methods: {
    submitForm(name) {
      const that = this;
      that.$refs[name].validate((valid) => {
        if (valid) that.goLogin(); // 验证通过，前去登录
      });
    },
    resetForm(name) { // 重置表单
      const that = this;
      this.$refs[name].resetFields();
    },
    async goLogin () { // 登录
      const that = this;
      const formLogin = that.formLogin;
      const params = {
        username: formLogin.username,
        password: formLogin.password
      }
      const res = await UserApi.goLogin(params);
      if (res.length > 0) {
        let $sto = that.$sto;
        let $conf = that.$conf;
        // 模拟登录成功返回的Token
        let cookies = $sto.get($conf.constant.cookie);
        if(!cookies) {
          cookies = {
            token: (new Date()).getTime(),
            username: params.username
          };
        } else {
          cookies.token = (new Date()).getTime();
        }
        $sto.set($conf.constant.cookie, cookies);
        that.$router.push({path: '/quick'});
      } else {
        that.$message.error('用户名或密码错误！');
      }
    },
    init3D () { // 初始化3D动画
      var SCREEN_WIDTH = window.innerWidth;
      var SCREEN_HEIGHT = window.innerHeight;
      var SEPARATION = 90;
      var AMOUNTX = 50;
      var AMOUNTY = 50;
      var container;
      var particles, particle;
      var count;
      var camera;
      var scene;
      var renderer;
      var mouseX = 0;
      var mouseY = 0;
      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;
      init();
      this.interval = setInterval(loop, 1000 / 60);
      function init() {
        container = document.createElement( 'div' );
        container.style.position = 'relative';
        container.style.top = '200px';
        document.getElementById('loginThree').appendChild( container );
        camera = new THREE.Camera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        renderer = new THREE.CanvasRenderer();
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        particles = new Array();
        var i = 0;
        var material = new THREE.ParticleCircleMaterial( 0x097bdb, 1 );
        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
                particle = particles[ i ++ ] = new THREE.Particle( material );
                particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                scene.add( particle );
            }
        }
        count = 0;
        container.appendChild( renderer.domElement );
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );
      }
      function onDocumentMouseMove( event ) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      }
      function onDocumentTouchMove( event ) {
        if ( event.touches.length == 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }
      }
      function loop() {
          camera.position.x += ( mouseX - camera.position.x ) * .05;
          camera.position.y = 364;
          var i = 0;
          for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
              for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[ i++ ];
                particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
              }
          }
          renderer.render(scene, camera);
          count += 0.1;
      }
    }
  },
  beforeDestroy () {
    const that = this
    if (that.interval) clearInterval(that.interval);
  }
}
</script>
