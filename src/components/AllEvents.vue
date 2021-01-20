<template>
<div>

    <nav :class="{ 'scrolled': !view.atTopOfPage }" 
        class="animated bg-blue-800 fixed flex flex-wrap items-center justify-between px-16 py-2 text-white top-0 w-full z-10">
      <!-- <nav :class="{ 'scrolled': !view.atTopOfPage }" 
           class="flex flex-col md:flex-row md:items-center md:justify-between px-16 py-2"> -->
        <div class="flex items-center justify-between">
          <div>
            <a class="text-2xl font-bold hover:text-blue-400 md:text-3xl" href="#">
              <img class="h-16 md:h-24 object-center object-cover w-16 md:w-24" src="../assets/img/logo.png" alt="">
            <!-- IEEE -->
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
          <!-- <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#home">Home</a> -->
          <router-link class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" to="/">Home</router-link>
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#about-us">About Us </a>
          <router-link to="/events" class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4">Events</router-link>
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#speakers">Speakers</a>
          <router-link class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" to="volunteers">Volunteers</router-link>
          <!-- <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#volunteers">Volunteers</a> -->
          <a class="mt-1 text-sm hover:text-blue-400 md:mt-0 md:mx-4" href="#contact-us">Contact Us</a>
        </div>
      </nav>
    <div class="container px-6 py-12 mx-auto mt-20" id="volunteers">
    <!-- <h1 class="text-xl font-bold text-center text-blue-500">Our Volunteers</h1> -->
    <!-- <div class="my-10">
        <label class="font-semibold pr-6 py-2 text-gray-700 capitalize">find volunteer</label>
        <input type="text" class="border-2 border-blue-500 focus:outline-none outline-none pl-2 placeholder-gray-700 py-2 rounded text-gray-700" v-model="search" placeholder="volunteer name"/>
    </div> -->
    

      <div class="grid grid-cols-3">
        <div v-for="(event, index) in events"
            :key="index" class="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg">
            <img class="object-cover object-center w-full h-56" loading="lazy" :src="event.img" alt="avatar">
            <!-- <div class="flex items-center px-6 py-3 bg-gray-900">
                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 512 512">
                        <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z"/><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z"/></g>
                    </svg>
                <h1 class="mx-3 text-lg font-semibold text-white">{{volunteer.team}}</h1>
            </div>
            <div class="px-6 py-4">
                <h1 class="text-2xl font-semibold text-gray-800">{{volunteer.name}}</h1>
                <p class="py-2 text-lg text-gray-700">{{volunteer.job}}</p>
                <div class="flex items-center mt-4 text-gray-700">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 512 512">
                        <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                    </svg>
                    <h1 class="px-2 text-sm">IT & CS</h1>
                </div>
                <div class="flex items-center mt-4 text-gray-700">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 512 512">
                        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                    </svg>
                    <h1 class="px-2 text-sm">patterson@example.com</h1>
                </div>
            </div> -->
        </div>
      </div>
  </div>
</div>
  
</template>


<script>
export default {
    data() {
        return {
        //   search:'',
            isOpen:false,
            view: {
                atTopOfPage: true
            },
            events:[
                {img:require('../assets/img/mainevent.jpg')}
            ]
        };
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
    },
};
</script> 

<style scoped>
nav.scrolled {
    @apply shadow-2xl;
    @apply border-b-2 ;
    @apply border-blue-500;
    @apply bg-blue-900;
    @apply opacity-75;
    @apply pt-0;
}
</style>