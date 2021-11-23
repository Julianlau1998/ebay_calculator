import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help.vue'
import Settings from '../views/Settings.vue'
import Privacy from '../views/Privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: navigator.language === 'de-DE' ? 'Gebührenrechner für Paypal' : 'Fee Calculator For Paypal Fees',
      metaTags: [
        {
          name: 'description',
          content: 'Quickly calculate paypal fees for sending and receiving money with paypal.'
        }
      ]
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      title: navigator.language === 'de-DE' ? 'Hilfe' : 'Help',
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      title: navigator.language === 'de-DE' ? 'Einstellungen' : 'Settings',
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      title: navigator.language === 'de-DE' ? 'Datenschutzerklärung' : 'Privacy',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
