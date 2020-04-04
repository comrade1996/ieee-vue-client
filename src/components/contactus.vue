<template>
<div class=" grid grid-cols-2">
<div class="bg-local object-cover " style="background-image: url('https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"></div>

  <div>
  
  <!-- start form -->
 <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
    
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name">
    </div>
    <div class="mb-6">
   
      <input class="shadow appearance-none border border-whitesmoke-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email Adress">

    </div>

    <div class="mb-6">
   
      <textarea class="shadow appearance-none border border-whitesmoke-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="password" placeholder="Write Your Message"></textarea>

    </div>

    <div class="flex items-center justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send Message
      </button>
   
    </div>
  </form>

</div>

 <!-- end form -->
  </div>

</div>
</template>

<script>
export default {
  name: 'Contactus',
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
