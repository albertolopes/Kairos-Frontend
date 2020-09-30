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
        Sobre
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      Oi, eu sou o Alberto Lopes e criei esse aplicativo como um exercicio de desenvolvimento 
      de software, o codigo fonte estará disponivel em seu perfil pessoal no github caso queira 
      conferir.
      A ideia era basicamente criar algo simples onde eu pudesse aplicasse algumas ferramentas como; Spring Boot,
      Java, algum JavaScript onde o escolhido por mim foi o VueJs pela sua facilidade de aprendizagem, 
      já que o meu foco principal era o Backand.
      Bem, se você chegou até aqui, espero que tenha gostado! 
    </v-card-text>

    <v-card-title>
        <strong class="subheading">Encontre-me através das minhas redes sociais:</strong>
        <v-btn
          v-for="icon in social"
          :key="icon"
          link :to="icon.to"
          target="_blank"
          class="mx-4"
          icon
        >
          <v-icon size="30px">
            {{ icon.icons }}
          </v-icon>
        </v-btn>
      </v-card-title>
    <v-divider></v-divider>
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
        senha: "",
        social: [
        {
          icons: 'mdi-github',
          to:'/github'
        },
        {
          icons:'mdi-linkedin',
          to:'/linkedin'
        },
        {
          icons:'mdi-twitter',
          to:'/twitter'
        },
        {
          icons:'mdi-instagram',
          to:'/instagram'
        },
      ],
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