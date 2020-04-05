<template>
<div class="">
<carousel>

  <slide>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-1">
  <img class="w-full" src="https://fakeimg.pl/350x200/ff0000,128/000,255" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
  </div>  
</div>
  </slide>

  <slide>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-1">
  <img class="w-full" src="https://fakeimg.pl/350x200/ff0000,128/000,255" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    </div> 
</div>
  </slide>

  <slide>
 <div class="max-w-sm rounded overflow-hidden shadow-lg mx-1">
  <img class="w-full" src="https://fakeimg.pl/350x200/ff0000,128/000,255" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    </div> 
</div>

  </slide>

</carousel>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Volunteers',
  props: {
    msg: String
  },
    components: {
    Carousel,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
