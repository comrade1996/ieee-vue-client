<template>
<div  class="bg-local h-screen" style=" background-repeat: no-repeat;  background-size: cover;
 background-image:url('https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')">
<nav class="flex mb-4">
  <span class="w-1/4 p-3 font-bold hover:text-gray-500 text-gray-200 text-2xl justify-start"> IEEE</span>
<ul class="w-3/4 pt-4 text-right justify-end">
  <li class="mr-6 ">
    <a class="text-gray-200 hover:text-gray-500 font-normal text-lg hover:font-bold" href="#">Home</a>
  </li>
  <li class="mr-6">
    <a class="text-gray-200 hover:text-gray-500 font-normal hover:font-bold" href="#">About US</a>
  </li>
  <li class="mr-6">
    <a class="text-gray-200 hover:text-gray-500 font-normal hover:font-bold" href="#">Events</a>
  </li>
  <li class="mr-6">
    <a class="text-gray-200 hover:text-gray-500 font-normal hover:font-bold" href="#">Contact Us</a>
  </li>
</ul>
</nav>
<div class="">
<span>IEEE ANUSB <span>FAMILY</span></span>
<p>Lorem ipsum  commodi consequuntur suscipit! Ex consectetur est 
  ipsa ad, illum, odit nam nihil neque fugiat dolorum quod perspiciatis eaque!</p>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


li {
  display: inline-block;
 
}
</style>
