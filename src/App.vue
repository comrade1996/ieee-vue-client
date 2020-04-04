<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
    <Aboutus msg="Welcome to Your Vue.js App"/>
    <Events msg="Welcome to Your Vue.js App"/>
    <Volunteers msg="Welcome to Your Vue.js App"/>
    <Contactus msg="Welcome to Your Vue.js App"/>
    <Footer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/home.vue'
import Aboutus from './components/aboutus.vue'
import Events from './components/events.vue'
import Volunteers from './components/volunteers.vue'
import Contactus from './components/contactus.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Aboutus,
    Events,
    Volunteers,
    Contactus,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.career{
  background-color: red;
  color: red;
}
</style>
