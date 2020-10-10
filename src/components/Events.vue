<template>
  <div class="container px-6 py-12 mx-auto" id="events">
    <h1 class="text-xl font-bold text-center text-blue-500">Latest Events</h1>

<carousel
      :perPageCustom="[[768, 3], [1024, 3], [400,1] ,[360,1], [280,1], [520, 1]]"
      :autoplay="true"
      :autoplayHoverPause="true"
      :paginationEnabled="false"
      :navigationEnabled="true"
    >
      <slide
        class="flex px-1"
        v-for="(event, index) in events"
        :key="index"
        style="width:fit-content"
      >
      <div class="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg">
        
        <img class="object-cover object-center w-full h-56" loading="lazy" :src="event.img" alt="avatar">
    </div>
    

      </slide>
    </carousel>

    <div class="flex items-center justify-center mt-8">
      <router-link to="/events"
        class="flex items-center justify-center w-full text-center text-blue-500 hover:underline"
      >
        <span>All Events</span>
        <svg class="w-6 h-6 ml-2 fill-current" viewBox="0 0 512 512">
          <path d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z" />
          <polyline points="216 352 312 256 216 160" />
        </svg>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isDraged:true,
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      events: [
        {img:require('../assets/img/mainevent.jpg')}
      ],
    };
  },
};
</script> 