<template>
  <v-card class="overflow-hidden mx-auto" flat height="570" max-width="1500">
    <v-container>
      <v-row dense>
        <!-- <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="headline">Gerenciar Tarefas</v-card-title>

            <v-card-subtitle>Gerencie tarefas tarefas e organize sua vida</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Clique aqui</v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Gerenciar Tarefas",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Configurações de Usuario",
        artist: "Ellie Goulding"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Sobre o aplicativo",
        artist: "Ellie Goulding"
      }
    ]
  })
};
</script>