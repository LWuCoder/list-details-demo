import Vue from 'vue'
import Router from 'vue-router'

// 专题列表
import marketList from '@/views/marketList'

// 专题详情
import marketDetails from '@/views/marketDetails'

Vue.use(Router)

export default new Router({
  routes: [
    // -------------默认页---------------
    {
      path: '/',
      component: marketList,
      redirect: '/index'
    },
    // -------------专题列表---------------
    {
      path: '/index',
      name: 'marketList',
      component: marketList,
      meta: {
        keepAlive: true
      }
    },
    // -------------专题详情---------------
    {
      path:'/details',
      name: 'marketDetails',
      component: marketDetails
    }
  ]
})
