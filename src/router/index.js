
export default [
  {
    path: '/home',
    name: 'home',
    component: (resolve) => {
      require(['../views/home/index.vue'], resolve)
    },
    meta: {
      title: '首页'
    }
  },
  {
    path: '/list',
    name: 'list',
    component: (resolve) => {
      require(['../views/order/list.vue'], resolve)
    },
    meta: {
      title: '订单列表'
    }
  }
]
