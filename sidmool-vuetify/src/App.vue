<template>
  <v-app>
    <Appbar />
    <MainCarousel />
    <ProductTab />
    <v-main>
      <NewProducts />
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
import MainCarousel from "./components/mainCarousel.vue";
import ProductTab from "./components/productTab.vue";
import NewProducts from "./components/newProducts.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
    Certifications,
    Appbar,
    NewProducts,
    MainCarousel,
    ProductTab
  },
  data: () => ({
    //
  })
};
</script>
