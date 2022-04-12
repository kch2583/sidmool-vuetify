<template>
  <v-carousel
    hide-delimiter-background
    :show-arrows="false"
    cycle
    delimiter-icon="mdi-minus"
  >
    <!-- <v-sheet :color="color" height="100%" tile> </v-sheet> -->
    <v-carousel-item
      v-for="image in images"
      :key="image"
      :src="'../src/assets/carousel_image/' + image"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    carousel: 0,

    images: [
      "top_banner_img01.jpeg",
      "top_banner_img02.jpeg",
      "top_banner_img03.jpeg",
      "top_banner_img04.jpeg",
      "top_banner_img05.jpeg",
      "top_banner_img06.jpeg",
      "top_banner_img07.jpeg",
      "top_banner_img08.jpeg",
      "top_banner_img09.jpeg",
      "top_banner_img10.jpeg"
    ]
  })
};
</script>

<style></style>
