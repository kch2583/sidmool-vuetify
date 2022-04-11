<template>
  <v-carousel
    hide-delimiter-background
    :show-arrows="false"
    cycle
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item v-for="color in colors" :key="color">
      <v-sheet :color="color" height="100%" tile> </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    carousel: 0,
    colors: ["red", "orange", "yellow", "green", "blue", "indigo", "#7f00ff"]
  })
};
</script>

<style></style>
