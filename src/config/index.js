const Main = {
  target: process.env.NODE_ENV !== 'production' ? 'http://admin.sosout.com' : 'http://admin.sosout.com', //目标网站
  constant: {
    cookie: 'VUE_ELEMENT'
  },
  route: {
    login: '/'
  }
};

export default Main;
