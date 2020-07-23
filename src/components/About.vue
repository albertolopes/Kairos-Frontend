<template>
  <v-card flat color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">KAIROS</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Appetizers',
        ],
        text: 'O menage time foi criado pelo Alberto Lopes como um exercio de desenvolvimento de software '+
        "utilizando Java e Spring Boot na construção do back-and e VueJs para o front-and, abaixo estará " +
        'os o links do projeto no Github.',
      }
    },
  }
</script>