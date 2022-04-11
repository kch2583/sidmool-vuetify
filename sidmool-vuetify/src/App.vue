<template>
  <v-app>
    <Appbar />
    <Tab />
    <MainCarousel />
    <v-main>
      <HelloWorld />
    </v-main>
    <Certifications />
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/footer.vue";
import Certifications from "./components/certifications.vue";
import Appbar from "./components/appbar.vue";
import Tab from "./components/tab.vue";
import MainCarousel from "./components/mainCarousel.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
    Certifications,
    Appbar,
    Tab,
    MainCarousel
  },
  data: () => ({
    //
  })
};
</script>
