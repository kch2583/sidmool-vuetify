<template>
  <v-container>
    <v-card flat align="center">
      <v-card-title class="justify-center">
        시드물 베스트 리얼 포토후기 게시판
      </v-card-title>
      <!-- <v-card-text>
        <v-slide-group
          show-arrows
          v-model="model"
          @click:next="next()"
          @click:prev="prev()"
        >
          <v-slide-item v-for="(n, i) in images" :key="i">
            <v-card class="ma-5">
              <v-card-text>
                <v-img :src="n.src" height="250" width="300" />
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-card-text> -->
      <v-card-text>
        <v-row justify="space-around" align="center">
          <v-btn @click="prev()" icon>
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
          <v-col>
            <v-carousel
              hide-delimiters
              :show-arrows="false"
              height="100%"
              v-model="model"
            >
              <v-carousel-item v-for="(n, i) in images" :key="i">
                <v-container>
                  <v-row align="center" justify="center">
                    <v-col v-for="(m, j) in images" :key="j">
                      <v-card class="rounded-xl">
                        <v-card-text>
                          <v-img :src="m.src"> </v-img>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-btn @click="next()" icon>
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    images: [
      { alt: "A kitten", src: "../src/assets/logo.png" },
      { alt: "A kitten", src: "../src/assets/logo.png" },
      { alt: "A kitten", src: "../src/assets/logo.png" },
      { alt: "A kitten", src: "../src/assets/logo.png" }
    ]
  }),
  methods: {
    next() {
      // this.model == 3 ? (this.model = 0) : this.model;
      this.model++;
    },
    prev() {
      this.model == 0 ? (this.model = 4) : this.model;
      this.model--;
    }
  }
};
</script>

<style></style>
