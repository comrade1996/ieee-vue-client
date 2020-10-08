<template>
  <div class="container px-6 py-12 mx-auto" id="teams">
    <h1 class="text-xl font-bold text-center text-blue-500">Teams</h1>

    <carousel
      :perPageCustom="[[768, 3], [1024, 3], [400,1] ,[360,1], [280,1], [520, 1]]"
      :autoplay="true"
      :autoplayHoverPause="true"
      :paginationEnabled="false"
    >
      <slide
        class="flex px-1"
        v-for="(team, index) in teams"
        :key="index"
        style="width:fit-content"
      >
      <div class="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg">
        
        <img class="object-cover object-center w-full h-56" loading="lazy" :src="team.img" alt="avatar">
    </div>
    

      </slide>
    </carousel>

  </div>
</template>

<script>
export default {
    data() {
        return {
            teams:[
                {img: require("../assets/img/financial.jpg")},
                {img: require("../assets/img/logistics.jpg")},
                {img: require("../assets/img/marketing.jpg")},
                {img: require("../assets/img/multimedia.jpg")},
                {img: require("../assets/img/public.jpg")},
                {img: require("../assets/img/strategic.jpg")},
            ]
        }
    },
}
</script>