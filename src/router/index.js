import Config from '../config/index';

const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');
// 基础服务 -- 三级菜单
const Thrmenu = r => require.ensure([], () => r(require('../page/base/thrMenu')), 'thrMenu');
// 用户中心 -- 用户管理
const User = r => require.ensure([], () => r(require('../page/user/user')), 'user');

export default [{
  path: Config.route.login,
  name: 'Login',
  component: Login
}, {
  path: '/',
  name: 'Layout',
  component: Layout,
  children: [{ // 快速入门
    path: '/quick',
    name: 'Quick',
    component: Quick
  }, { // 基础服务 -- 三级菜单
    path: '/thrmenu',
    name: 'Thrmenu',
    component: Thrmenu
  }, { // 用户中心 -- 用户管理
    path: '/user',
    name: 'User',
    component: User
  }]
}, {
  path: '*',
  redirect: Config.route.login,
  name: 'Login',
  component: Login
}]
