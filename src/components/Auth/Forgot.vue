<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form>
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
              <v-btn color="write" text v-bind="attrs" @click="snackbar = false">Fechar</v-btn>
            </template>
          </v-snackbar>
          <v-card class="elevation-12">
            <v-toolbar dark color="deep-purple">
              <v-toolbar-title>Esqueci minha senha</v-toolbar-title>
              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="grey"
              ></v-progress-linear>
            </v-toolbar>
            <v-card-text>
              <v-alert
                text
                dense
                color="deep-purple"
                border="left"
              >Você receberá uma nova senha no email cadastrado.</v-alert>
              <v-text-field
                color="deep-purple"
                name="email"
                label="Email"
                type="text"
                v-model="email"
              ></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/login" color="deep-purple" text>Back</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="deep-purple" dark @click.prevent="sendEmail()">Enviar</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "forgot",
  data: () => ({
    color: "grey",
    email: "",
    mode: "",
    snackbar: false,
    text: "",
    timeout: 6000,
    x: null,
    y: "top",
    loading: false,
  }),
  methods: {
    sendEmail() {
      this.loading = true,
      this.$store
        .dispatch("FORGOT", {
          email: this.email
        })
        .then(
          () => {
            this.loading = false,
            this.snackbar = true;
            this.text = "Nova senha criada com sucesso! Verifique seu email.";
          },
          error => {
            this.loading = false,
            this.snackbar = true;
            this.text = error.response.data.message;
          }
        );
    }
  }
};
</script>