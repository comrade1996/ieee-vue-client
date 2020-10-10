<template>
  <div class="container px-6 py-12 mx-auto" id="volunteers">
    <h1 class="text-xl font-bold text-center text-blue-500">Volunteers Offiec</h1>

    <carousel
      :perPageCustom="[[768, 3], [1024, 3], [400,1] ,[360,1], [280,1], [520, 1]]"
      :autoplay="true"
      :autoplayHoverPause="true"
      :paginationEnabled="false"
      :navigationEnabled="true"
    >
      <slide
        class="flex px-1"
        v-for="(volunteer, index) in volunteers"
        :key="index"
        style="width:fit-content"
      >
      <div class="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg">
        <img class="object-cover object-center w-full h-56" loading="lazy" :src="volunteer.img" alt="avatar">
        <div class="flex items-center px-6 py-3 bg-gray-900">
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
                <h1 class="px-2 text-sm">{{volunteer.email}}</h1>
            </div>
        </div>
    </div>
    
      </slide>
    </carousel>
    <div class="flex items-center justify-center mt-8">
      <router-link to="/volunteers"
        href="#"
        class="flex items-center justify-center w-full text-center text-blue-500 hover:underline"
      >
        <span>All Volunteers</span>
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
      volunteers: [
        {
          name: "Banan Babiker",
          img: require("../assets/img/volunteers/Banan_Babiker_Osman_Babiker.jpg"),
          team: "Financial",
          job: "Head of Financial",
          email:"ieee@org.com"
        },

        {
          name: "Mazin Hafiz",
          img: require("../assets/img/volunteers/Mazin_Hafiz_Eltahir_Mohamed.jpg"),
          team: "Program management",
          job: "Head of program management",
          email:"ieee@org.com"
        },

        {
          name: "Maaz salah",
          img: require("../assets/img/volunteers/Maaz_salah_Ahmed_Mohamed.jpg"),
          team: "strategic planning",
          job: "Head of strategic planning",
          email:"ieee@org.com"
        },

        {
          name: "Muzzamil Ali",
          img: require("../assets/img/volunteers/Muzzamil_Ali_Hassan_Mahmoud.jpg"),
          team: "logistic",
          job: "head of logistic",
          email:"ieee@org.com"
        },

        {
          name: "Merghani Mohammed",
          img: require("../assets/img/volunteers/Merghani_Mohammed_Tayeb_Al-asmaa_Esmail Makie.jpg"),
          team: "Strategic",
          job: "Vice",
          email:"ieee@org.com"
        },
        {
          name: "Hawaa Basheer Ali Elamin",
          img: require("../assets/img/volunteers/Hawaa_Basheer_Ali_Elamin.jpg"),
          team: "Public relastions",
          job: "Public relation officer",
          email:"ieee@org.com"
        },
        {
          name: "Shadin Yassir",
          img: require("../assets/img/volunteers/Shadin_Yassir.jpg"),
          team: "",
          job: "Vice chairperson",
          email:"ieee@org.com"
        },
        {
          name: "Tasabeeh alshafie",
          img: require("../assets/img/volunteers/Tasabeeh_alshafie.jpg"),
          team: "Logistic",
          job: "Technical support",
          email:"ieee@org.com"
        },

        {
          name: "Hassan kamaleldin",
          img: require("../assets/img/volunteers/Hassan_kamaleldin_hassan_abdelgader.jpg"),
          team: "Multimedia",
          job: "Graphics designer",
          email:"ieee@org.com"
        },

        {
          name: "Suha Kamal",
          img: require("../assets/img/volunteers/Suha_Kamal_Abuzeid_Mohamed.jpg"),
          team: "Public relations",
          job: "Vice-Public Relations",
          email:"ieee@org.com"
        },

        {
          name: "Fatima Mirghani",
          img: require("../assets/img/volunteers/Fatima_Mirghani_Ahmed_El-faki.jpg"),
          team: "volunteers Coordinators",
          job: "Head of volunteers Coordinators",
          email:"ieee@org.com"
        },
       
        {
          name: "Rayan Ibrahim",
          img: require("../assets/img/volunteers/Rayan_Ibrahim_Saeed_Ibrahim.jpg"),
          team: "Marketing",
          job: "Head of Marketing",
          email:"ieee@org.com"
        },

        {
          name: "Mohammed Saeed",
          img: require("../assets/img/volunteers/Mohammed_Saeed_Abdualshafi_Mohammed.jpg"),
          team: "Programming Management",
          job: "Vice",
          email:"ieee@org.com"
        },
        {
          name: "Abdallah Mahmoud",
          img: require("../assets/img/volunteers/Abdallah_Mahmoud_Azmi_Mahmoud.jpg"),
          team: "Multimedia",
          job: "Head of Multimedia",
          email:"ieee@org.com"
        },
       
        {
          name: "Esra Elshik",
          img: require("../assets/img/volunteers/Esra_Elshik_Alhalfaya_bahari.jpeg"),
          team: "Logistics",
          job: "volunteers Coordinators",
          email:"ieee@org.com"
        },
        
        {
          name: "Mohammed edris",
          img: require("../assets/img/volunteers/Mohammed_edris_musa_edris.jpg"),
          team: "Software Devolopers",
          job: "Web master",
          email:"ieee@org.com"
        },
      ],
    };
  },
};
</script> 