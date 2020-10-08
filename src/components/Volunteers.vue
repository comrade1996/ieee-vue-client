<template>
  <div class="container px-6 py-12 mx-auto" id="volunteers">
    <h1 class="text-xl font-bold text-center text-blue-500">Volunteers</h1>

    <carousel
      :perPageCustom="[[768, 3], [1024, 3], [400,1] ,[360,1], [280,1], [520, 1]]"
      :autoplay="true"
      :autoplayHoverPause="true"
      :paginationEnabled="false"
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
                <h1 class="px-2 text-sm">patterson@example.com</h1>
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
        // {
        //   name: "Abdalaziz Mousa alrofai Mohammed",
        //   img: require("../assets/img/volunteers/Abdalaziz_Mousa_alrofai_Mohammed.jpg"),
        //   team: "Multimedia",
        //   job: "Graphics Designer - video editor",
        // },
        {
          name: "Banan Babiker",
          img: require("../assets/img/volunteers/Banan_Babiker_Osman_Babiker.jpg"),
          team: "Financial",
          job: "Head of Financial",
        },
        // {
        //   name: "Mayada jalal mohamed sharif",
        //   img: require("../assets/img/volunteers/Mayada_jalal_mohamed_sharif.jpg"),
        //   team: "Marketing",
        //   job: "Member",
        // },
        {
          name: "Mazin Hafiz",
          img: require("../assets/img/volunteers/Mazin_Hafiz_Eltahir_Mohamed.jpg"),
          team: "Program management",
          job: "Head of program management",
        },
        // {
        //   name: "Mozan Fateh Elaleem mussa Abdullah",
        //   img: require("../assets/img/volunteers/Mozan_Fateh_Elaleem_mussa_Abdullah.jpg"),
        //   team: "programming management and public relationships ",
        //   job: "translater and text editor",
        // },
        {
          name: "Maaz salah",
          img: require("../assets/img/volunteers/Maaz_salah_Ahmed_Mohamed.jpg"),
          team: "strategic planning",
          job: "Head of strategic planning",
        },
        // {
        //   name: "salwa Hafiz Sulieman mohammed ahmed",
        //   img: require("../assets/img/volunteers/salwa_Hafiz_Sulieman_mohammed_Ahmed.jpg"),
        //   team: "stratigic palnning",
        //   job: "Member",
        // },
        // {
        //   name: "Samar Abd Algadir ahmed mustafa",
        //   img: require("../assets/img/volunteers/Samar_Abd_Algadir_ahmed_mustafa.jpg"),
        //   team: "Puplic realations",
        //   job: "Member",
        // },
        // {
        //   name: "Abrar Elzobier Eltayeb Mohammed",
        //   img: require("../assets/img/volunteers/Abrar_Elzobier_Eltayeb_Mohammed.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        {
          name: "Muzzamil Ali",
          img: require("../assets/img/volunteers/Muzzamil_Ali_Hassan_Mahmoud.jpg"),
          team: "logistic",
          job: "head of logistic",
        },
        // {
        //   name: "alfadil banaga musa Elshiekh",
        //   img: require("../assets/img/volunteers/alfadil_banaga_musa_Elshiekh.jpg"),
        //   team: "public relations",
        //   job: "arrange and organize speeches for events",
        // },
        // {
        //   name: "Amaal Mubark Eisa Aldein",
        //   img: require("../assets/img/volunteers/Amaal_Mubark_Eisa_Aldein.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Albara mohammed abd allah hossain",
        //   img: require("../assets/img/volunteers/Albara_mohammed_abd_allah_hossain.jpg"),
        //   team: "Financial",
        //   job: "Investment",
        // },
        // {
        //   name: "AML MOHAMMED HASSAN OSMAN",
        //   img: require("../assets/img/volunteers/AML_MOHAMMED_HASSAN_OSMAN.jpg"),
        //   team: "Logistics",
        //   job: "Member",
        // },
        {
          name: "Merghani Mohammed",
          img: require("../assets/img/volunteers/Merghani_Mohammed_Tayeb_Al-asmaa_Esmail Makie.jpg"),
          team: "Strategic",
          job: "Vice",
        },
        {
          name: "Hawaa Basheer Ali Elamin",
          img: require("../assets/img/volunteers/Hawaa_Basheer_Ali_Elamin.jpg"),
          team: "Public relastions",
          job: "Public relation officer",
        },
        {
          name: "Shadin Yassir",
          img: require("../assets/img/volunteers/Shadin_Yassir.jpg"),
          team: "",
          job: "Vice chairperson",
        },
        {
          name: "Tasabeeh alshafie",
          img: require("../assets/img/volunteers/Tasabeeh_alshafie.jpg"),
          team: "Logistic",
          job: "Technical support",
        },
        // {
        //   name: "Abdallah kamal aldeen ibrahim mohamed",
        //   img: require("../assets/img/volunteers/Abdallah_kamal_aldeen_ibrahim_mohamed.jpg"),
        //   team: "Multimedia",
        //   job: "Graphic designer",
        // },
        // {
        //   name: "Malaz Abdalla mohmmed Ahmad",
        //   img: require("../assets/img/volunteers/Malaz_Abdalla_mohmmed_Ahmad.jpg"),
        //   team: "Public Relations",
        //   job: "Member",
        // },
        {
          name: "Hassan kamaleldin",
          img: require("../assets/img/volunteers/Hassan_kamaleldin_hassan_abdelgader.jpg"),
          team: "Multimedia",
          job: "Graphics designer",
        },
        // {
        //   name: "Malaz Abdelkhalig sarageldin yousif",
        //   img: require("../assets/img/volunteers/Malaz_Abdelkhalig_sarageldin_yousif.jpg"),
        //   team: "Marketing",
        //   job: "Member",
        // },
        // {
        //   name: "Mustafa Hassan Abdelgadir Ali",
        //   img: require("../assets/img/volunteers/Mustafa_Hassan_Abdelgadir_Ali.jpg"),
        //   team: "Program management",
        //   job: "Member",
        // },
        // {
        //   name: "Rabaa Mohammed Osman Alfhal",
        //   img: require("../assets/img/volunteers/Rabaa_Mohammed_Osman_Alfhal.jpg"),
        //   team: "public Relations",
        //   job: "Member",
        // },
        {
          name: "Suha Kamal",
          img: require("../assets/img/volunteers/Suha_Kamal_Abuzeid_Mohamed.jpg"),
          team: "Public relations",
          job: "Vice-Public Relations",
        },
        // {
        //   name: "Rania Fathalrahman Abdelmahamoud Ali",
        //   img: require("../assets/img/volunteers/Rania_Fathalrahman_Abdelmahamoud_Ali.jpg"),
        //   team: "Marketing",
        //   job: "Content writing",
        // },
        {
          name: "Fatima Mirghani",
          img: require("../assets/img/volunteers/Fatima_Mirghani_Ahmed_El-faki.jpg"),
          team: "volunteers Coordinators",
          job: "Head of volunteers Coordinators",
        },
        // {
        //   name: "fatima abdalla alageb abdalla ",
        //   img: require("../assets/img/volunteers/fatima_abdalla_alageb_abdalla.jpg"),
        //   team: "Marketing",
        //   job: "Content writer",
        // },
        // {
        //   name: "Kareema Osman mohe alden alfke",
        //   img: require("../assets/img/volunteers/Kareema_Osman_mohe_alden_alfke.jpg"),
        //   team: "Financial",
        //   job: "Member",
        // },
        // {
        //   name: "Mudther Atif Siddig ElRayah",
        //   img: require("../assets/img/volunteers/Mudther_Atif_Siddig_ElRayah.jpg"),
        //   team: "Programming management - Software development",
        //   job: "Member",
        // },
        // {
        //   name: "Mujtaba Salah EL-Din Siddig",
        //   img: require("../assets/img/volunteers/Mujtaba_Salah_EL-Din_Siddig.jpg"),
        //   team: "Multimedia",
        //   job: "Member",
        // },
        // {
        //   name: "Mohammed ombadah hamad elbashir",
        //   img: require("../assets/img/volunteers/Mohammed_ombadah_hamad_elbashir.jpg"),
        //   team: "Multimedia",
        //   job: "Photographer",
        // },
        // {
        //   name: "Omar Abdulrahman Ali Hassan",
        //   img: require("../assets/img/volunteers/Omar_Abdulrahman_Ali_Hassan.jpg"),
        //   team: "Multimedia",
        //   job: "Photographer",
        // },
        {
          name: "Rayan Ibrahim",
          img: require("../assets/img/volunteers/Rayan_Ibrahim_Saeed_Ibrahim.jpg"),
          team: "Marketing",
          job: "Head of Marketing",
        },
        // {
        //   name: "Mohmmad alhashim mojahed abdalla",
        //   img: require("../assets/img/volunteers/Mohmmad_alhashim_mojahed_abdalla.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        {
          name: "Mohammed Saeed",
          img: require("../assets/img/volunteers/Mohammed_Saeed_Abdualshafi_Mohammed.jpg"),
          team: "Programming Management",
          job: "Vice",
        },
        {
          name: "Abdallah Mahmoud",
          img: require("../assets/img/volunteers/Abdallah_Mahmoud_Azmi_Mahmoud.jpg"),
          team: "Multimedia",
          job: "Head of Multimedia",
        },
        // {
        //   name: "Anas mohamed Osman mohamed ali",
        //   img: require("../assets/img/volunteers/Anas_mohamed_Osman_mohamed_ali.jpg"),
        //   team: "Logistics",
        //   job: "Member",
        // },
        // {
        //   name: "Rayan abdalazeem ahmed babikir",
        //   img: require("../assets/img/volunteers/Rayan_abdalazeem_ahmed_babikir.jpeg"),
        //   team: "Logistics",
        //   job: "Secreatry",
        // },
        {
          name: "Esra Elshik",
          img: require("../assets/img/volunteers/Esra_Elshik_Alhalfaya_bahari.jpeg"),
          team: "Logistics",
          job: "volunteers Coordinators",
        },
        // {
        //   name: "Yousra Alrasheed Mohammed Ahmed",
        //   img: require("../assets/img/volunteers/no_image.jpg"),
        //   team: "Logistics",
        //   job: "Member",
        // },
        {
          name: "Mohammed edris",
          img: require("../assets/img/volunteers/Mohammed_edris_musa_edris.jpg"),
          team: "Software Devolopers",
          job: "Web master",
        },
        // {
        //   name: "Omair Gibreel abdallatief ahmed",
        //   img: require("../assets/img/volunteers/Omair_Gibreel_abdallatief_ahmed.jpeg"),
        //   team: "Software Devolopers",
        //   job: "Web master",
        // },
        // {
        //   name: "Rayan abdelrahem ali mohammed",
        //   img: require("../assets/img/volunteers/Rayan_Abdelrahem_Ali_Mohammed.jpeg"),
        //   team: "Public relations",
        //   job: "Share and study ideas",
        // },
        // {
        //   name: "Nasraldein abdallah mohammed",
        //   img: require("../assets/img/volunteers/Nasraldein_abdallah_mohammed.jpg"),
        //   team: "Multimedia",
        //   job: "Designer",
        // },
        // {
        //   name: "Ibrahim Amgd Alguzoly Abdalla",
        //   img: require("../assets/img/volunteers/Ibrahim_Amgd_Alguzoly_Abdalla.jpg"),
        //   team: "Logistic",
        //   job: "Member",
        // },
        // {
        //   name: "Modather Ahmed Mohamed Noor",
        //   img: require("../assets/img/volunteers/Modather_Ahmed_Mohamed_Noor.jpg"),
        //   team: "Marketing",
        //   job: "Search & correcting posts",
        // },
        // {
        //   name: "Mohamed Adam Musa Idris",
        //   img: require("../assets/img/volunteers/Mohamed_Adam_Musa_Idris.jpg"),
        //   team: "Logistic",
        //   job: "Technical support",
        // },
        // {
        //   name: "Safaa hassan musa dowalbeet",
        //   img: require("../assets/img/volunteers/no_image.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Albraa Ibrahim Mohamed Ibrahim",
        //   img: require("../assets/img/volunteers/Albraa_Ibrahim_Mohamed_Ibrahim.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Mushtaha Mudaser Abd-elmajed Babikr",
        //   img: require("../assets/img/volunteers/Mushtaha_Mudaser_Abd-elmajed_Babikr.jpg"),
        //   team: "Logistic",
        //   job: "Member",
        // },
        // {
        //   name: "Mohammed barakat Hamed alnieel",
        //   img: require("../assets/img/volunteers/Mohammed_barakat_Hamed_alnieel.jpg"),
        //   team: "Multimedia",
        //   job: "Member",
        // },
        // {
        //   name: "Awab medhat mohammed el-hassan",
        //   img: require("../assets/img/volunteers/Awab_medhat_mohammed_el-hassan.jpg"),
        //   team: "Logistics",
        //   job: "Member",
        // },
        // {
        //   name: "Tibyan Nizar Alsir Abdulsamad",
        //   img: require("../assets/img/volunteers/Tibyan_Nizar_Alsir_Abdulsamad.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Lujain al-attaya ibrahim adam",
        //   img: require("../assets/img/volunteers/Lujain_al-attaya_ibrahim_adam.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Sahar jaafar zain el-abidine",
        //   img: require("../assets/img/volunteers/Sahar_jaafar_zain_el-abidine.jpg"),
        //   team: "Marketing",
        //   job: "Member",
        // },
        // {
        //   name: "Fatima mohktar muhamed almin",
        //   img: require("../assets/img/volunteers/no_image.jpg"),
        //   team: "Logistic",
        //   job: "Member",
        // },
        // {
        //   name: "Ayaa Elnazer mohmmad abd alhade",
        //   img: require("../assets/img/volunteers/Ayaa_Elnazer_mohmmad_abd_alhade.jpg"),
        //   team: "Logistic",
        //   job: "Member",
        // },
        // {
        //   name: "Fawzeia Nasr Hussein Abdelrahman",
        //   img: require("../assets/img/volunteers/Fawzeia_Nasr_Hussein_Abdelrahman.jpg"),
        //   team: "Multimedia",
        //   job: "Member",
        // },
        // {
        //   name: "Mustafa omer Mustafa alawad",
        //   img: require("../assets/img/volunteers/Mustafa_omer_Mustafa_alawad.jpg"),
        //   team: "public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Fatima mohktar mohumed almin",
        //   img: require("../assets/img/volunteers/Fatima_mohktar_mohumed_almin.jpg"),
        //   team: "Logistic",
        //   job: "Member",
        // },
        // {
        //   name: "Alhassan abdalrhman alhassan alsheik",
        //   img: require("../assets/img/volunteers/Alhassan_abdalrhman_alhassan_alsheik.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Mohialdeen Alderdery Mohammed Ali Hamd",
        //   img: require("../assets/img/volunteers/Mohialdeen_Alderdery_Mohammed_Ali_Hamd.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Hashim Ahmad Musa Ibrahim",
        //   img: require("../assets/img/volunteers/Hashim_Ahmad_Musa_Ibrahim.jpg"),
        //   team: "Public relations",
        //   job: "Member",
        // },
        // {
        //   name: "Mrwa El-Bagir Ahmed Abd Alrahman Abd Alfadil",
        //   img: require("../assets/img/volunteers/Mrwa_El-Bagir_Ahmed_Abd_Alrahman_Abd_Alfadil.jpeg"),
        //   team: "Marketing",
        //   job: "Member",
        // },
        // {
        //   name: "Amal Hassab Alrasol Mohamed Ahmed",
        //   img: require("../assets/img/volunteers/Amal_Hassab _Alrasol_Mohamed_Ahmed.jpeg"),
        //   team: "Financial",
        //   job: "Member",
        // },
        // {
        //   name: "Roaa kheder rahma Ahmed",
        //   img: require("../assets/img/volunteers/no_image.jpg"),
        //   team: "",
        //   job: "Member",
        // },
        // {
        //   name: "Raheeg Ogail Ali",
        //   img: require("../assets/img/volunteers/Raheeg_Ogail_Ali.jpeg"),
        //   team: "Financial",
        //   job: "Member",
        // },
      ],
    };
  },
};
</script> 