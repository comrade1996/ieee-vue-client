<template>
  <div id="app" class="font-roboto">
    <Header/>
    <!-- <Aboutus/>
    <Events/>
    <Volunteers/>
    <Contactus/>
    <Footer/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Aboutus from './components/aboutus.vue'
// import Events from './components/events.vue'
// import Volunteers from './components/volunteers.vue'
// import Contactus from './components/contactus.vue'
// import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Aboutus,
    // Events,
    // Volunteers,
    // Contactus,
    // Footer
  }
}
</script>

<style>
  @import "assets/css/tailwind.css";
</style>
