<template>
  <v-card
    class="overflow-hidden"
  >
    <v-toolbar
      flat
      color="grey"
      dark
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title>
        Editar Usuario
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>

      <v-text-field
        color="deep-purple"
        name="nome"
        label="Nome"
        type="text"
        v-model="nome"
      ></v-text-field>

      <v-text-field
        color="deep-purple"
        name="email"
        label="Email"
        type="text"
        v-model="email"
      ></v-text-field>

    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Salvar
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
        email: "",
        nome: "",
        senha: ""
      }
    },

    methods: {
      customFilter (item, queryText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>