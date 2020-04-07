<template>
  <div id="app" class="font-sans">
    <Header/>
    <Aboutus/>
    <Events/>
    <Volunteers/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Aboutus from './components/Aboutus'
import Events from './components/Events'
import Volunteers from './components/Volunteers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Aboutus,
    Events,
    Volunteers,
    Contact,
    Footer
  }
}
</script>

<style>
  @import "assets/css/tailwind.css";
</style>
