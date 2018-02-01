// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import iView from 'iview'
// import zhLocale from 'iview/dist/locale/zh-CN'
// import enLocale from 'iview/dist/locale/en-US'
// import Locales from './locale'

// import css
import 'iview/dist/styles/iview.css'
import '../static/styles/global.css'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(iView)

// 多语言配置
// const locales = Locales
// const mergeZH = Object.assign(zhLocale, locales['zh-CN'])
// const mergeEN = Object.assign(enLocale, locales['en-US'])
// Vue.locale('zh-CN', mergeZH)
// Vue.locale('en-US', mergeEN)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
