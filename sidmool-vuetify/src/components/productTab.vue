<template>
  <v-container>
    <v-card flat outlined rounded="xl">
      <v-tabs v-model="tab" centered>
        <v-tab> 기능별</v-tab>
        <v-tab> 성분 라인별</v-tab>
        <v-tab> 고민별</v-tab>
        <v-tab> 내츄럴 99</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-btn v-for="item in byFunction" :key="item" text rounded>
                {{ item }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-btn v-for="item in byIngredientLine" :key="item" text rounded>
                {{ item }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-btn v-for="item in byTrouble" :key="item" text rounded>
                {{ item }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-btn v-for="item in byNatural99" :key="item" text rounded>
                {{ item }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    byFunction: [
      "신제품",
      "시드물2",
      "클렌징",
      "수제비누",
      "수분크림",
      "앰플",
      "에센스세럼",
      "수분젤",
      "로션",
      "크림",
      "썬스크린",
      "무기자차",
      "각질관리",
      "마스크팩",
      "바디",
      "색조",
      "헤어",
      "립&아이케어",
      "페이스&바디오일",
      "스킨토너미스트",
      "스킨케어브러쉬",
      "화장소품",
      "건강식품",
      "예비맘추천",
      "미취학가능제품",
      "청소년화장품추천",
      "세트할인",
      "남성용화장품",
      "민중기시리즈",
      "이벤트",
      "BEST"
    ],
    byIngredientLine: [
      "어성초",
      "무오일 다당류",
      "봉독",
      "바하",
      "아하",
      "녹차(EGCG)",
      "카렌듈라",
      "아크바이",
      "천연오일",
      "메가펩타이드",
      "콜라겐",
      "호호바",
      "휴먼올리고",
      "뷰리즈",
      "달팽이",
      "EGF",
      "EFI",
      "프로폴리스",
      "히아루론산",
      "세라마이드",
      "티트리",
      "아스타잔틴",
      "사카로발효",
      "닥커트럽",
      "병풀(센텔라)",
      "징크",
      "동백",
      "스킨소스",
      "판테놀",
      "닥터갈라톡"
    ],
    byTrouble: [
      "AC스팟",
      "바디케어",
      "모공관리",
      "피지관리",
      "장벽강화",
      "거친모공",
      "각질관리",
      "트럽",
      "악건성",
      "붉은톤",
      "미백",
      "자외선차단",
      "주름개선&탄력",
      "속건성(수부지)",
      "화이트헤드관리",
      "블랙헤드관리",
      "건조&민감피부",
      "안티옥시",
      "탈모",
      "레이저관리",
      "미백&주름개선",
      "탄력집중관리",
      "시카케어",
      "동물성프리"
    ],
    byNatural99: [
      "클렌징",
      "퍼스트에센스",
      "스킨토너미스트",
      "앰플",
      "에센스세럼",
      "수분젤로션",
      "크림",
      "립&아이",
      "페이스&바디오일",
      "마스크팩",
      "바디&헤어",
      "자외선차단"
    ]
  })
};
</script>

<style></style>
