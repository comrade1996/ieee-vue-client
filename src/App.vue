<template>
  <div id="app" class="font-sans">
    <Header />
    <Aboutus />
    <Events />
    <Speakers />
    <Volunteers />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Events from "./components/Events";
import Volunteers from "./components/Volunteers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";
import Vue from "vue";
import VueCarousel from "vue-carousel";
import VueAgile from 'vue-agile';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueCarousel);
Vue.use(VueAgile)
export default {
  name: "App",
  components: {
    Header,
    Aboutus,
    Events,
    Speakers,
    Volunteers,
    Contact,
    Footer,
  },
};
</script>

<style>
@import "assets/css/tailwind.css";
</style>
