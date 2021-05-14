<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <img width="auto" height="42" src="static/images/i4pro.png" alt="Logo I4pro" />

      <v-spacer></v-spacer>

      <v-btn href="https://www.i4pro.com.br" target="_blank" text>
        <span class="mr-2">Website</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <I4proExcel />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    I4proExcel: () => import('@/components/excel/i4pro-excel')
  },

  data: () => ({
    //
  })
};
</script>
