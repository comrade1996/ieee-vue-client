<template>
  <header class="text-white bg-fixed bg-top bg-cover" id="home">
    <div class="mx-auto">
      <nav :class="{ 'scrolled': !view.atTopOfPage }" 
        class="animated fixed flex flex-wrap items-center justify-between md:pt-5 px-16 top-0 w-full z-10">
      <!-- <nav :class="{ 'scrolled': !view.atTopOfPage }" 
           class="flex flex-col md:flex-row md:items-center md:justify-between px-16 py-2"> -->
        <div class="flex items-center justify-between">
          <div>
            <a class="text-2xl font-bold hover:text-blue-400 md:text-3xl" href="#">
              <img class="h-16 md:h-24 object-center object-cover w-16 md:w-24" src="../assets/img/logo.png" alt="">
            </a>
          </div>
          <div class="md:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block focus:outline-none">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col md:-mx-4 md:flex-row" :class="isOpen ? 'block' : ['hidden' , 'md:block']">
          <router-link to="/" class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#home">Home</router-link>
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#about-us">About Us</a>
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#teams">Teams</a>
          <router-link to="/events" class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4">Events</router-link>
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#speakers">Speakers</a>
          <router-link class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" to="volunteers">Volunteers</router-link>
          <!-- <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#volunteers">Volunteers</a> -->
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#contact-us">Contact Us</a>
        </div>
      </nav>
      <div class="flex items-center justify-center min-h-screen">
        <div class="max-w-lg text-center">
          <h1 class="text-3xl font-bold uppercase md:text-4xl">IEEE ANUSB <span class="text-blue-500">FAMILY</span></h1>
          <p class="mt-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis lorem id nunc, urna sollicitudin et. Sollicitudin hendrerit.</p>
          <div class="flex items-center justify-center mt-4">
            <a href="https://www.facebook.com/IEEEANUSB"  class="hover:text-blue-400">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 512 512">
                <path d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z'/>
              </svg>
            </a>
            <a href="#" class="mx-4 hover:text-blue-400">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 512 512">
                <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
        return {
            isOpen:false,
            view: {
                atTopOfPage: true
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
        methods: {
            handleScroll(){
                // when the user scrolls, check the pageYOffset
                if(window.pageYOffset>0){
                    // user is scrolled
                    if(this.view.atTopOfPage) this.view.atTopOfPage = false
                }else{
                    // user is at top of page
                    if(!this.view.atTopOfPage) this.view.atTopOfPage = true
                }
            },
        }
}
</script>

<style>
 header {
   background-image: url("../assets/img/header.png");
 }
 /* nav {
    z-index: 10
} */

nav.scrolled {
    @apply shadow-2xl;
    @apply border-b-2 ;
    @apply border-blue-500;
    @apply bg-blue-900;
    @apply opacity-75;
    @apply pt-0;
}
</style>