import Vue from 'vue'
import App from './App.vue'
import fullCalendar from 'vue-fullcalendar'
import VueCarousel from 'vue-carousel';
import router from './router'
Vue.use(VueCarousel);

Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
