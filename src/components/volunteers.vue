<template>
<div class="">
<carousel>
  <slide>
    <div  class="bg-local object-cover" 
    style="background-image: url('https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"></div>
 <p>omair gibreel</p>
  </slide>
  <slide>
    <div  class="bg-local object-cover" 
    style="background-image: url('https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"></div>
 <p>omair gibreel</p>
  </slide>

  <slide>
    <div  class="bg-local object-cover" 
    style="background-image: url('https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"></div>
 <p>omair gibreel</p>
  </slide>
  <slide>
    Slide 2 Content
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
