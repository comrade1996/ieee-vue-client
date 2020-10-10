<template>
  <div class="container px-6 py-12 mx-auto" id="speakers">
    <h1 class="text-xl font-bold text-center text-blue-500">Speakers</h1>

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
        
        <div class="px-6 py-4">
            <h1 class="text-2xl font-semibold text-gray-800">{{volunteer.name}}</h1>
            <p class="py-2 text-lg text-gray-700">{{volunteer.job}}</p>
            <div class="flex items-baseline  mt-4 text-blue-600">
                <a href="#"><svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor" /></svg></a>
                <a href="#"><svg class="w-8" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="XMLID_184_"><path class="st0" d="M130.5,289h53.8v173h-53.8V289z M157.5,203c17.2,0,31.2,14,31.2,31.2   c0,17.2-14,31.2-31.2,31.2c-17.3,0-31.2-14-31.2-31.2C126.3,217,140.2,203,157.5,203" id="XMLID_195_"/><path class="st0" d="M218.1,289h51.5v23.7h0.7c7.2-13.6,24.7-27.9,50.9-27.9c54.4,0,64.5,35.8,64.5,82.4V462H332   v-84.1c0-20.1-0.3-45.9-27.9-45.9c-28,0-32.2,21.9-32.2,44.4V462h-53.7V289z" id="XMLID_192_"/></g></svg></a>
            </div>
        </div>
    </div>
    

      </slide>
    </carousel>

  </div>
</template>


<script>
export default {
  data() {
    return {
      volunteers: [
        {
          name: "Mohamed Alfaki",
          img: require("../assets/img/volunteers/Abdalaziz_Mousa_alrofai_Mohammed.jpg"),
          job: "Agile Coach, AgilityHealth",
        },
        {
          name: "Prof.Sharif Fadul",
          img: require("../assets/img/volunteers/Banan_Babiker_Osman_Babiker.jpg"),
          job: "Electrical & Electronic Engineering, UofK",
        },
        {
          name: "Ibrahim Hegazy",
          img: require("../assets/img/volunteers/Mayada_jalal_mohamed_sharif.jpg"),
          job: "junior manager, deloitte Netherlands",
        },
        {
          name: "Munzer Kamal",
          img: require("../assets/img/volunteers/Mazin_Hafiz_Eltahir_Mohamed.jpg"),
          job: "penetration tester",
        },
        {
          name: "Sally Osman",
          img: require("../assets/img/volunteers/Mozan_Fateh_Elaleem_mussa_Abdullah.jpg"),
          job: "Cyber Security",
        },
        {
          name: "Mohammad Noreen",
          img: require("../assets/img/volunteers/Maaz_salah_Ahmed_Mohamed.jpg"),
          job: "Head of strategic planning",
        },
        {
          name: "Noha Ahmed",
          img: require("../assets/img/volunteers/salwa_Hafiz_Sulieman_mohammed_Ahmed.jpg"),
          job: "Chairman for SUST Branch 2018-2020",
        },
        {
          name: "Omer Hayder",
          img: require("../assets/img/volunteers/Samar_Abd_Algadir_ahmed_mustafa.jpg"),
          job: "Electrical Engineering UofK",
        },
        {
          name: "Baraah Adil ",
          img: require("../assets/img/volunteers/Abrar_Elzobier_Eltayeb_Mohammed.jpg"),
          job: "Machine learning and coding enthusiast",
        },
        {
          name: "Merghani Mohammed",
          img: require("../assets/img/volunteers/Muzzamil_Ali_Hassan_Mahmoud.jpg"),
          job: "Junior software engineer",
        },
      //   {
      //     name: "alfadil banaga musa Elshiekh",
      //     img: require("../assets/img/volunteers/alfadil_banaga_musa_Elshiekh.jpg"),
      //     team: "public relations",
      //     job: "arrange and organize speeches for events",
      //   },
      //   {
      //     name: "Amaal Mubark Eisa Aldein",
      //     img: require("../assets/img/volunteers/Amaal_Mubark_Eisa_Aldein.jpg"),
      //     team: "Public relations",
      //     job: "Member",
      //   },
      //   {
      //     name: "Albara mohammed abd allah hossain",
      //     img: require("../assets/img/volunteers/Albara_mohammed_abd_allah_hossain.jpg"),
      //     team: "Financial",
      //     job: "Investment",
      //   },
      //   {
      //     name: "AML MOHAMMED HASSAN OSMAN",
      //     img: require("../assets/img/volunteers/AML_MOHAMMED_HASSAN_OSMAN.jpg"),
      //     team: "Logistics",
      //     job: "Member",
      //   },
      //   {
      //     name: "Merghani Mohammed Tayeb Al-asmaa Esmail",
      //     img: require("../assets/img/volunteers/Merghani_Mohammed_Tayeb_Al-asmaa_Esmail Makie.jpg"),
      //     team: "Strategic",
      //     job: "Vice",
      //   },
      //   {
      //     name: "Hawaa Basheer Ali Elamin",
      //     img: require("../assets/img/volunteers/Hawaa_Basheer_Ali_Elamin.jpg"),
      //     team: "Public relastions",
      //     job: "Public relation officer",
      //   },
      //   {
      //     name: "Shadin Yassir",
      //     img: require("../assets/img/volunteers/Shadin_Yassir.jpg"),
      //     team: "",
      //     job: "Vice chairperson",
      //   },
      //   {
      //     name: "Tasabeeh alshafie abdala seed aldeen",
      //     img: require("../assets/img/volunteers/Tasabeeh_alshafie.jpg"),
      //     team: "Logistic",
      //     job: "Technical support",
      //   },
      //   {
      //     name: "Abdallah kamal aldeen ibrahim mohamed",
      //     img: require("../assets/img/volunteers/Abdallah_kamal_aldeen_ibrahim_mohamed.jpg"),
      //     team: "Multimedia",
      //     job: "Graphic designer",
      //   },
      //   {
      //     name: "Malaz Abdalla mohmmed Ahmad",
      //     img: require("../assets/img/volunteers/Malaz_Abdalla_mohmmed_Ahmad.jpg"),
      //     team: "Public Relations",
      //     job: "Member",
      //   },
      //   {
      //     name: "Hassan kamaleldin hassan abdelgader",
      //     img: require("../assets/img/volunteers/Hassan_kamaleldin_hassan_abdelgader.jpg"),
      //     team: "Multimedia - volunteers Coordinators",
      //     job: "Graphics designer",
      //   },
      //   {
      //     name: "Malaz Abdelkhalig sarageldin yousif",
      //     img: require("../assets/img/volunteers/Malaz_Abdelkhalig_sarageldin_yousif.jpg"),
      //     team: "Marketing",
      //     job: "Member",
      //   },
      //   {
      //     name: "Mustafa Hassan Abdelgadir Ali",
      //     img: require("../assets/img/volunteers/Mustafa_Hassan_Abdelgadir_Ali.jpg"),
      //     team: "Program management",
      //     job: "Member",
      //   },
      //   {
      //     name: "Rabaa Mohammed Osman Alfhal",
      //     img: require("../assets/img/volunteers/Rabaa_Mohammed_Osman_Alfhal.jpg"),
      //     team: "public Relations",
      //     job: "Member",
      //   },
      //   {
      //     name: "Suha Kamal Abuzeid Mohamed",
      //     img: require("../assets/img/volunteers/Suha_Kamal_Abuzeid_Mohamed.jpg"),
      //     team: "Public relations",
      //     job: "Vice-Public Relations",
      //   },
      //   {
      //     name: "Rania Fathalrahman Abdelmahamoud Ali",
      //     img: require("../assets/img/volunteers/Rania_Fathalrahman_Abdelmahamoud_Ali.jpg"),
      //     team: "Marketing",
      //     job: "Content writing",
      //   },
      //   {
      //     name: "Fatima Mirghani Ahmed El-faki",
      //     img: require("../assets/img/volunteers/Fatima_Mirghani_Ahmed_El-faki.jpg"),
      //     team: "volunteers Coordinators",
      //     job: "Head of volunteers Coordinators",
      //   },
      //   {
      //     name: "fatima abdalla alageb abdalla ",
      //     img: require("../assets/img/volunteers/fatima_abdalla_alageb_abdalla.jpg"),
      //     team: "Marketing",
      //     job: "Content writer",
      //   },
      //   {
      //     name: "Kareema Osman mohe alden alfke",
      //     img: require("../assets/img/volunteers/Kareema_Osman_mohe_alden_alfke.jpg"),
      //     team: "Financial",
      //     job: "Member",
      //   },
      //   {
      //     name: "Mudther Atif Siddig ElRayah",
      //     img: require("../assets/img/volunteers/Mudther_Atif_Siddig_ElRayah.jpg"),
      //     team: "Programming management - Software development",
      //     job: "Member",
      //   },
      //   {
      //     name: "Mujtaba Salah EL-Din Siddig",
      //     img: require("../assets/img/volunteers/Mujtaba_Salah_EL-Din_Siddig.jpg"),
      //     team: "Multimedia",
      //     job: "Member",
      //   },
      //   {
      //     name: "Mohammed ombadah hamad elbashir",
      //     img: require("../assets/img/volunteers/Mohammed_ombadah_hamad_elbashir.jpg"),
      //     team: "Multimedia",
      //     job: "Photographer",
      //   },
      //   {
      //     name: "Omar Abdulrahman Ali Hassan",
      //     img: require("../assets/img/volunteers/Omar_Abdulrahman_Ali_Hassan.jpg"),
      //     team: "Multimedia",
      //     job: "Photographer",
      //   },
      //   {
      //     name: "Rayan Ibrahim Saeed Ibrahim",
      //     img: require("../assets/img/volunteers/Rayan_Ibrahim_Saeed_Ibrahim.jpg"),
      //     team: "Marketing",
      //     job: "Head of Marketing",
      //   },
      //   {
      //     name: "Mohmmad alhashim mojahed abdalla",
      //     img: require("../assets/img/volunteers/Mohmmad_alhashim_mojahed_abdalla.jpg"),
      //     team: "Public relations",
      //     job: "Member",
      //   },
      //   {
      //     name: "Mohammed Saeed Abdualshafi Mohammed",
      //     img: require("../assets/img/volunteers/Mohammed_Saeed_Abdualshafi_Mohammed.jpg"),
      //     team: "Programming Management",
      //     job: "Vice",
      //   },
      //   {
      //     name: "Abdallah Mahmoud Azmi Mahmoud",
      //     img: require("../assets/img/volunteers/Abdallah_Mahmoud_Azmi_Mahmoud.jpg"),
      //     team: "Multimedia",
      //     job: "Head of Multimedia",
      //   },
      //   {
      //     name: "Anas mohamed Osman mohamed ali",
      //     img: require("../assets/img/volunteers/Anas_mohamed_Osman_mohamed_ali.jpg"),
      //     team: "Logistics",
      //     job: "Member",
      //   },
      //   {
      //     name: "Rayan abdalazeem ahmed babikir",
      //     img: require("../assets/img/volunteers/Rayan_abdalazeem_ahmed_babikir.jpeg"),
      //     team: "Logistics",
      //     job: "Secreatry",
      //   },
      //   {
      //     name: "Esra Elshik Alhalfaya bahari",
      //     img: require("../assets/img/volunteers/Esra_Elshik_Alhalfaya_bahari.jpeg"),
      //     team: "Logistics - volunteers Coordinators",
      //     job: "volunteers Coordinators",
      //   },
      //   {
      //     name: "Yousra Alrasheed Mohammed Ahmed",
      //     img: require("../assets/img/volunteers/no_image.jpg"),
      //     team: "Logistics",
      //     job: "Member",
      //   },
      //   {
      //     name: "Mohammed edris musa edris",
      //     img: require("../assets/img/volunteers/Mohammed_edris_musa_edris.jpg"),
      //     team: "Software Devolopers",
      //     job: "Member",
      //   },
      //   {
      //     name: "Omair Gibreel abdallatief ahmed",
      //     img: require("../assets/img/volunteers/Omair_Gibreel_abdallatief_ahmed.jpeg"),
      //     team: "Software Devolopers",
      //     job: "Web master",
      //   },
      //   {
      //     name: "Rayan abdelrahem ali mohammed",
      //     img: require("../assets/img/volunteers/Rayan_Abdelrahem_Ali_Mohammed.jpeg"),
      //     team: "Public relations",
      //     job: "Share and study ideas",
      //   },
      ],
    };
  },
};
</script> 