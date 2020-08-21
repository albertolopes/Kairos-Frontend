<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form>
          <v-card class="elevation-12">
            <v-snackbar
              v-model="snackbar"
              :bottom="y === 'bottom'"
              :color="color"
              :left="x === 'left'"
              :multi-line="mode === 'multi-line'"
              :right="x === 'right'"
              :timeout="timeout"
              :top="y === 'top'"
              :vertical="mode === 'vertical'"
            >
              {{text}}
              <template v-slot:action="{ attrs }">
                <v-btn color="write" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
              </template>
            </v-snackbar>
            <v-toolbar dark color="deep-purple">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                :rules="[rules.required]"
                color="deep-purple"
                name="nome"
                label="Nome"
                type="text"
                v-model="nome"
              ></v-text-field>
              <v-text-field
                :rules="[rules.required]"
                color="deep-purple"
                v-model="senha"
                name="senha"
                label="Senha"
                type="password"
              ></v-text-field>
              <div class="my-2">
                <v-btn to="/forgot" text small color="deep-purple">Esqueci minha senha</v-btn>
              </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn text small to="/signup" color="deep-purple">Cadastre-se</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isComplete"
                class="white--text"
                color="deep-purple"
                @click="agreement = true, dialog = false, login()"
              >Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    nome: undefined,
    senha: undefined,
    color: "grey lighten",
    mode: "",
    snackbar: false,
    text: "",
    timeout: 6000,
    x: null,
    y: "top",
    rules: {
      required: value => !!value || "Required"
    }
  }),
  computed: {
    isComplete() {
      return this.nome && this.senha;
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          nome: this.nome,
          senha: this.senha
        })
        .then(
          () => {
            this.$router.go(this.$router.replace("tasks"));
          },
          error => {
            this.snackbar = true;
            this.text = error.response.data.message;
          }
        );
    }
  }
};
</script>