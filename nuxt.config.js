/**
 *@time 2022/08/21
 *@description nuxt.js 配置文件
 */

module.exports = {
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
        routes.splice(0);
      routes.push(...[{
        name: '',
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        children: [
            {
                name: 'home', // 首页
                path: '',
                component: resolve(__dirname, 'pages/home/'),
            },
            {
                name: 'login',// 登录
                path: '/login',
                component: resolve(__dirname, 'pages/login/'),
            },
            {
                name: 'register', // 注册
                path: '/register',
                component: resolve(__dirname, 'pages/login/'),
            },
            {
                name: 'profile',
                path: '/profile/:username',
                component: resolve(__dirname, 'pages/profile/'),
            },
            {
                name: 'setting',
                path: '/setting',
                component: resolve(__dirname, 'pages/setting/'),
            },
            {
                name: 'editor',
                path: '/editor',
                component: resolve(__dirname, 'pages/editor/'),
            },
            {
                name: 'article',
                path: '/article/:slug',
                component: resolve(__dirname, 'pages/article/'),
            },
        ]
      }
    ])
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/formatFeedDate.js'
  ]
}
