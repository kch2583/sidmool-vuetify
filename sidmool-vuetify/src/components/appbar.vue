<template>
  <v-app-bar align-center elevation="0" app>
    <v-toolbar-title>SIDMOOL</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-form
      ><v-text-field placeholder="Search" dense rounded filled hide-details="">
        <template v-slot:append>
          <v-icon>mdi-magnify</v-icon>
        </template>
      </v-text-field></v-form
    >

    <v-spacer></v-spacer>
    <v-btn x-small plain v-for="item in list" :key="item" text rounded>
      {{ item }}
    </v-btn>

    <template v-slot:extension>
      <v-tabs show-arrows centered color="#7da135" name="mainTab">
        <v-tab v-for="tab in tabList" :key="tab.name" :to="tab.to">
          {{ tab.name }}</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    list: [
      "로그인",
      "회원가입",
      "장바구니",
      "주문조회",
      "마이페이지",
      "고객센터"
    ],
    tabList: [
      { to: "", name: "시드물 소개" },
      { to: "", name: "포토후기" },
      { to: "", name: "사용후기" },

      { to: "/howtouse", name: "전 어떻게 써요?" },
      { to: "", name: "성분사전" },
      { to: "", name: "1:1 문의 게시판" },
      { to: "", name: "시드물 통신" },
      { to: "", name: "시사모 자유게시판" }
    ]
  })
};
</script>

<style></style>
