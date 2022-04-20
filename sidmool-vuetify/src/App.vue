<template>
  <v-app>
    <Appbar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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

// import Home from "./components/pages/home.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
    Certifications,
    Appbar
  },
  data: () => ({
    //
  })
};
</script>
