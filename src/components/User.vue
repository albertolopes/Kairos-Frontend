<template>
  <v-card
    class="overflow-hidden"
  >
    <v-toolbar
      flat
      color="grey"
      dark
      @change="getUser"
      v-if="renderComponent"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title>
        Editar dados do usuario
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

      <v-text-field
        color="deep-purple"
        name="senha"
        label="Mudar senha (Opcional)"
        :type="show1 ? 'text' : 'password'"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="senha"
        @click:append="show1 = !show1"
        counter
      ></v-text-field>

    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isComplete"
        class="white--text"
        color="deep-purple"
        @click.prevent="putUser()"
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
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"      
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
      color="grey"
    >
      {{text}}
      <template v-slot:action="{ attrs }">
        <v-btn color="write" text v-bind="attrs" @click="snackbar = false">Fechar</v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        renderComponent: true,
        hasSaved: false,
        isEditing: null,
        model: null,
        id:"",
        nome: "",
        email: "",
        senha: "",
        senha_atual:"",
        confirmar_senha: "",
        show1: false,
        snackbar: false,
        text: "",
        timeout: 6000,
        loading: false,
        mode: "",
        x: null,
        y: "top",
        rules: {
          required: value => !!value || "Required",
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          },
        }
      }
    },
    computed: {
      isComplete() {
        return this.nome && this.email;
      }
    },
    beforeMount(){
      this.getUser();
      this.forceRerender();
    },
    methods: {
      forceRerender() {
        this.renderComponent = false;
        this.$nextTick(() => {
          this.renderComponent = true;
        });
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
      getUser() {
      this.$store
        .dispatch("GET_USER")
        .then((response) => {
          this.id = response.data.id;
          this.nome = response.data.nome;
          this.email = response.data.email;
          this.senha_atual = response.data.senha;
        });
      },
      putUser() {
      this.$store
        .dispatch("PUT_USER", {
          id: this.id,
          nome: this.nome,
          email: this.email,
          senha: this.senha == "" ? this.senha_atual : this.senha
        })
        .then(() => {
          this.loading = false,
          this.snackbar = true;
          this.text = "Usuario atualizado com sucesso!";
        },
         error => {
            this.loading = false,
            this.snackbar = true;
            this.text = error.response.data.message;
        });
      }
    },
  }
</script>