<template>
  <v-container>
    <v-row>
      <v-card class="rounded-xl">
        <v-card-title class="justify-center text-h4">
          시드물 제품, 어떻게 써야할까?
        </v-card-title>

        <v-card-text class="text-center text-h6">
          시드물 제품을 어떻게 사용할지 모르시는 고객님들을 위해 준비된
          게시판입니다. 피부타입과 고민을 간단하게 남겨주시면 친절하고 자세하게
          답변드리겠습니다. 문의량에 따라서 답변은 다소 늦어질 수도 있습니다.
        </v-card-text>
      </v-card>
    </v-row>
    <v-row width="100%">
      <v-col cols="12">
        <v-btn rounded>글쓰기</v-btn>

        <v-btn rounded>내가 쓴 게시글 보기</v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table
          disable-filtering
          disable-sort
          :headers="header"
          :items="howToUse"
        >
          <v-data-table-header></v-data-table-header>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    header: [
      { text: "번호", value: "number" },
      { text: "제목", value: "title" },
      { text: "글쓴이", value: "writer" },
      { text: "날짜", value: "date" },
      { text: "조회수", value: "views" }
    ],
    howToUse: [
      {
        number: 1,
        title: "제품 추천해주세요!",
        writer: "fjeiw",
        date: "2022.04.23",
        views: 203
      }
    ]
  })
};
</script>

<style></style>
