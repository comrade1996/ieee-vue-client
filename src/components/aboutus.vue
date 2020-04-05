<template>
<div class="grid grid-cols-2 h-screen">

  <div class=" grid">
    <span class="text-blue-400 mt-10 justify-start font-normal">About Us</span>
    <span class="  justify-start font-normal" >IEEE Alneelian Student Branch</span>
    <article class="justify-start font-normal">Lorem ipsum dolor sit,
       amet consectetur adipisicing elit.
        Eum molestias quis, expedita explicabo quisquam, nostrum quod fugiat quo
       consequatur delectus hic debitis eligendi vitae ab ipsa magni, numquam culpa placeat!</article>
  </div>
  <div class="bg-local object-cover "
   style="background-repeat: no-repeat;  background-size: cover;
   background-image: url('https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"></div>

</div>
</template>

<script>
export default {
  name: 'Aboutus',
  props: {
    msg: String
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
