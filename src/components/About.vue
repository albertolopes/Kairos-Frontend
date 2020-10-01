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
    </v-toolbar>

    <v-card-text>
      Oi, eu sou o Alberto e criei esse aplicativo como um exercicio de desenvolvimento 
      de software, o codigo fonte estará disponivel no meu perfil pessoal do github caso queira 
      conferir.
      Minha ideia inicial era criar algo simples onde eu pudesse aplicar algumas ferramentas como; Spring Boot,
      Java, algum framework JavaScript onde o escolhido por mim foi o VueJs pela sua facilidade de aprendizagem,
      pois o meu foco principal era o backand.
    </v-card-text>

    <v-card-text>
      Bem, se você chegou até aqui espero que tenha gostado! 
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
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
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
        ]
      }
    }
  }
</script>