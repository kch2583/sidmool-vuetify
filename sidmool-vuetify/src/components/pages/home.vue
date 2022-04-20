<template>
  <div>
    <MainCarousel />
    <ProductTab />
    <NewProducts />
    <BestReview />
  </div>
</template>

<script>
import MainCarousel from "../mainCarousel.vue";
import ProductTab from "../productTab.vue";
import NewProducts from "../newProducts.vue";
import BestReview from "../bestReview.vue";
export default {
  components: {
    NewProducts,
    BestReview,
    MainCarousel,
    ProductTab
  }
};
</script>

<style></style>
