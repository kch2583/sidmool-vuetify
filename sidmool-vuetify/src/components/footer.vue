<template>
  <v-footer color="#7da135" padless>
    <v-container>
      <v-row align="center">
        <v-col cols="4">
          <v-img
            src="../src/assets/sidmoolLogo2.png"
            height="200"
            aspect-ratio="1"
          ></v-img>
        </v-col>

        <v-col class=" white--text" cols="8">
          <v-col cols="12">
            <v-btn
              text
              rounded
              color="white"
              v-for="list in footerList"
              :key="list"
              >{{ list }}
            </v-btn></v-col
          >

          <v-col cols="12" class="text-caption">
            &middot; 상호 : 주식회사 시드물 &middot; 주소 : 우)35083 대전광역시
            중구 안영로 42(안영동) &middot; 전화 : 1577-9638(해외 :
            +82-42-716-0227) &middot; 팩스 : 042-367-7989 &middot;
            사업자등록번호 : 305-81-94469 &middot; 건강기능식품판매업 : 대전
            중구 제 503 &middot; 통신판매업신고번호 : 제2008 - 대전중구 - 0247호
            &middot; 화장품 제조판매업 등록필증 제 1163호 &middot; 서비스개선 :
            help@sidmool.com &middot; 대표 : 민중기 &middot; 개인정보책임자 :
            박소진
          </v-col>
          <v-col cols="12">
            <strong>COPYRIGHT &copy; 2008 SIDMOOL ALL RIGHTS RESERVED </strong>
            <p>Hosting by MakeShop</p>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerList: [
      "회사소개",
      "개인정보처리방침",
      "영상정보처리기기 운영/관리 방침",
      "이용약관",
      "이용안내",
      "고객센터",
      "회원가입",
      "사업자정보확인"
    ]
  })
};
</script>

<style></style>
