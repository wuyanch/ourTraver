import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import amap from '@/components/amapFa/amap.vue'
import lookamap from '@/components/lookAmap/lookamap.vue'
import photoview from '@/components/photo/photoView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/amapFa',
      name: 'amapFa',
      component: amap,
      children:[{
        path: 'amap',
        name: 'amap',
        component: amap
      }]
    },
    {
      path: '/lookAmap',
      name: 'lookAmap',
      component: lookamap,
      children:[{
        path: 'lookamap',
        name: 'lookamap',
        component: lookamap
      }]
    },
    {
      path: '/photo',
      name: 'photo',
      component: photoview,
      children:[{
        path: 'photoView',
        name: 'photoView',
        component: photoview
      }]
    }
  ]
})
