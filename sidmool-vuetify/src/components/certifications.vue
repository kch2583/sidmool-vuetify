<template>
  <v-container>
    <v-row>
      <v-col v-for="src in logoSrcList" :key="src" cols="2">
        <v-img
          :src="'../src/assets/certifications_image/' + src"
          contain
          max-height="60"
          max-width="120"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    logoSrcList: [
      "15406_27249_513.jpeg",
      "200066_90063_125.jpeg",
      "23928493.jpeg",
      "biohealthcare.jpg",
      "ISMSISMS-P.png",
      "logo_75306.jpeg",
      "PS20061000251.jpeg",
      "radio.jpeg",
      "runway.jpg",
      "skydream.jpg",
      "Unknown.png",
      "xsh_2.png"
    ]
  })
};
</script>

<style></style>
