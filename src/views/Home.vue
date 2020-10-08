<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <AllVolunteers/> -->
    <Header />
    <Aboutus />
    <Teams/>
    <Events />
    <Speakers />
    <Volunteers/>
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Aboutus from "@/components/Aboutus";
import Teams from '@/components/Teams'
import Events from "@/components/Events";
import Speakers from "@/components/Speakers";
import Volunteers from '@/components/Volunteers'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
    components: {
    Header,
    Aboutus,
    Teams,
    Events,
    Speakers,
    Volunteers,
    Contact,
    Footer,
  },
}
</script>
