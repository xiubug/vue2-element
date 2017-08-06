import Config from '../config/index';

const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');
// 基础服务 -- 三级菜单 -- 文章管理
const Article = r => require.ensure([], () => r(require('../page/base/thrmenu/article')), 'article');
// 基础服务 -- 三级菜单 -- 评论管理
const Comment = r => require.ensure([], () => r(require('../page/base/thrmenu/comment')), 'comment');
// 基础服务 -- 三级菜单 -- 用户留存
const Left = r => require.ensure([], () => r(require('../page/base/thrmenu/left')), 'left');
// 基础服务 -- 三级菜单 -- 流失用户
const Lost = r => require.ensure([], () => r(require('../page/base/thrmenu/lost')), 'lost');

// 用户中心 -- 用户管理
const User = r => require.ensure([], () => r(require('../page/user/user')), 'user');

// 基础服务 -- 三级菜单
const thrmenuNavbar = [{
  title: '文章管理',
  index: '/thrmenu/article'
}, {
  title: '评论管理',
  index: '/thrmenu/comment'
}, {
  title: '用户留存',
  index: '/thrmenu/left'
}, {
  title: '流失用户',
  index: '/thrmenu/lost'
}];

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
    component: Quick,
    meta: {
      bcrumd: ['快速入门']
    }
  }, { // 基础服务 -- 三级菜单 -- 文章管理
    path: '/thrmenu/article',
    name: 'Article',
    component: Article,
    meta: {
      activePath: '/thrmenu/article',
      bcrumd: ['基础服务', '三级菜单', '文章管理'],
      navbar: thrmenuNavbar
    }
  }, { // 基础服务 -- 三级菜单 -- 评论管理
    path: '/thrmenu/comment',
    name: 'Comment',
    component: Comment,
    meta: {
      activePath: '/thrmenu/article',
      bcrumd: ['基础服务', '三级菜单', '评论管理'],
      navbar: thrmenuNavbar
    }
  }, { // 基础服务 -- 三级菜单 -- 用户留存
    path: '/thrmenu/left',
    name: 'Left',
    component: Left,
    meta: {
      activePath: '/thrmenu/article',
      bcrumd: ['基础服务', '三级菜单', '用户留存'],
      navbar: thrmenuNavbar
    }
  }, { // 基础服务 -- 三级菜单 -- 流失用户
    path: '/thrmenu/lost',
    name: 'Lost',
    component: Lost,
    meta: {
      activePath: '/thrmenu/article',
      bcrumd: ['基础服务', '三级菜单', '流失用户'],
      navbar: thrmenuNavbar
    }
  }, { // 用户中心 -- 用户管理
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      bcrumd: ['用户中心', '用户管理']
    }
  }]
}, {
  path: '*',
  redirect: Config.route.login,
  name: 'Login',
  component: Login
}]
