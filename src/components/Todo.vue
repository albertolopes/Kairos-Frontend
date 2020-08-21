<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      left
      fluid
    >
      <v-list dense>

        <v-list-item
          v-for="item in items" :key="item.title" link :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-9">
          <v-btn 
            block 
            color="deep-purple"
            @click.prevent="logout()"
            dark
          >Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="deep-purple"
      dark
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      <v-icon large>mdi-dots-horizontal</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>KAIRÓS</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
     <v-main>
      <v-container
        fluid
        align="align-baseline"
        justify="center"
      >
        <template>
          <router-view></router-view>
        </template>
      </v-container>
     </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'todo',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Inicio', 
          to: '/',
        },
        {
          title: 'Tarefas ',
          icon: 'mdi-clipboard-outline',
          to: '/tasks'
        },
        {
          icon: 'mdi-account',
          title: 'Usuario',
          to: '/user',
        },
        {
          title: 'Notificações',
          icon: 'mdi-bell',
          to: '/components/notifications',
        },
      ],
    }),
    methods: {
        logout() {
           this.$store.dispatch("LOGOUT",{})
           .then(
            () => {
              this.$router.push('login');
            },
            error => {
              this.snackbar = true;
              this.text = error.response.data.message
            }
          );
        }
    }
  }
</script>
