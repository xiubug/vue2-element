const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');

export default [{
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/',
  name: 'Layout',
  component: Layout,
  children: [{
    path: '/quick',
    name: 'Quick',
    component: Quick
  }]
}, {
  path: '*',
  redirect: '/login',
  name: 'Login',
  component: Login
}]
