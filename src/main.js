import Vue from 'vue'
import App from './App.vue'
import fullCalendar from 'vue-fullcalendar'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
