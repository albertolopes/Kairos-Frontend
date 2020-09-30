<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex 8 12 xs sm md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="deep-purple">
            <v-toolbar-title>Sign up</v-toolbar-title>
              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="grey"
              ></v-progress-linear>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              color="deep-purple"
              name="nome"
              label="Usuario"
              v-model="nome"
              :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
              color="deep-purple"
              name="email"
              label="Email"
              v-model="email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>

            <v-text-field
              color="deep-purple"
              name="senha"
              label="Senha"
              :rules="[rules.required]"
              type="password"
              v-model="senha"
            ></v-text-field>

            <v-text-field
              color="deep-purple"
              name="confirm_password"
              label="Confirme sua senha"
              :rules="[rules.required]"
              type="password"
              v-model="confirm_password"
              :error="!valid()"
            ></v-text-field>

            <v-form>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-btn to="/login" color="deep-purple" text>Voltar</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!isComplete"
                  class="white--text"
                  color="deep-purple"
                  @click.prevent="register()"
                >Registrar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
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
              <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    nome: "",
    senha: "",
    confirm_password: "",
    color: "",
    mode: "",
    snackbar: false,
    text: "",
    timeout: 6000,
    loading: false,
    x: null,
    y: "top",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    }
  }),
  computed: {
    isComplete() {
      return this.nome && this.email && this.senha && this.confirm_password;
    }
  },
  methods: {
    register() {
      if (this.valid()) {
        this.loading = true,
        this.$store
          .dispatch("REGISTER", {
            nome: this.nome,
            email: this.email,
            senha: this.senha
          }).then(() => {
              this.loading = false,
              this.snackbar = true;
              this.text = "Usuario criado com sucesso!";
              this.email = "";
              this.nome = "";
              this.senha = "";
              this.password = "";
              this.confirm_password = "";
            },
          error => {
            this.loading = false,
            this.snackbar = true;
            this.text = error.response.data.message;
          }
          );
      }
    },
    valid() {
      return this.senha === this.confirm_password;
    }
  }
};
</script>