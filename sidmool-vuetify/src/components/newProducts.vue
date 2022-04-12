<template>
  <v-container>
    <v-card flat outlined rounded="xl" width="100%" align="center">
      <v-card-title class="justify-center">신제품</v-card-title>
      <v-container>
        <v-row>
          <v-col v-for="product in newProductList" :key="product.name" cols="3">
            <v-card flat>
              <v-img
                :src="'./src/assets/products/' + product.image_src"
                aspect-ratio="1.5"
                height="100"
                contain
              ></v-img>
              <v-card-title class="text-subtitle-2">
                {{ product.name }}</v-card-title
              >
              <v-card-text class="text-caption"
                >{{ product.description }}
                <br />
                <del
                  style="color:grey"
                  v-if="product.original_price !== product.discount_price"
                >
                  &#8361;
                  {{ product.original_price.toLocaleString("ko-KR") }}</del
                >

                <strong>
                  &#8361; {{ product.discount_price.toLocaleString("ko-KR") }}
                </strong></v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    newProductList: [
      {
        name: "어성초 시카 약산성 폼클렌징 165ml",
        description: "어성초 마스크팩 2개 증정! 리얼 약산성/피지/진정/모공",
        original_price: 16800,
        discount_price: 12800,
        image_src: "0030130000523.jpeg"
      },

      {
        name: "뽀얀 쌀겨 비누 100g 오리지널/베이비파우더향 [선택구입]",
        description: "깨끗한 국산 쌀겨를 곱게 갈아 넣은 수제비누",
        original_price: 2400,
        discount_price: 2400,
        image_src: "0010150000043.jpeg"
      },
      {
        name: "프리미엄 약산성 어성초 비누 120g",
        description: "영국산 원료 + 어성초 적용 고민케어 고체클렌저",
        original_price: 12400,
        discount_price: 8400,
        image_src: "0010120000043.jpeg"
      },
      {
        name: "(알러지프리향) 갈라톡사이드 탈모 샴푸 플로럴 400ml",
        description: "갈라톡사이드 앰플 한병의 영양을 담은 특별함",
        original_price: 16800,
        discount_price: 16800,
        image_src: "0030140000223.jpeg"
      },
      {
        name: "터피네올 앰플 20ml",
        description: "티트리의 심장! 터피네올 99% 편안한 문제성 피부 케어!",
        original_price: 18600,
        discount_price: 18600,
        image_src: "0030040000123.jpeg"
      },
      {
        name: "어성초 시카 마스크팩 1+1",
        description: "진한 유기농 어성초 55% 저분자 히알루론산/병풀파우더",
        original_price: 1500,
        discount_price: 1500,
        image_src: "0020120000043.jpeg"
      },
      {
        name: "민중기 EFI 리바이브 더마크림 60ml",
        description: "E.F.I 세럼을 담은 급속 케어 더마크림",
        original_price: 32800,
        discount_price: 32800,
        image_src: "0030070000373.jpeg"
      },
      {
        name: "슈퍼 바이오틱스 유래 바이옴 99 앰플 210ml",
        description: "오픈감사 1,000개 한정 50%할인 행사중 / 초민감용",
        original_price: 28000,
        discount_price: 13900,
        image_src: "0030100000333.jpeg"
      }
    ]
  })
};
</script>

<style></style>
