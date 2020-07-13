<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-form>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title>
                                Login
                            </v-toolbar-title>
                        </v-toolbar>
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
                                <v-btn
                                    color="deep-purple"
                                    text
                                    v-bind="attrs"
                                    @click="snackbar = false"
                                    >
                                    Close
                                </v-btn>
                            </template>
                        </v-snackbar>
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
                                <v-btn  to="/forgot" text small color="deep-purple"> Forgot it my password</v-btn>   
                            </div>
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn text to="/signup" color="deep-purple">Sign up</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn 
                                class="white--text"
                                color="deep-purple accent-4"
                                @click="agreement = true, dialog = false, login()">
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>    
            </v-flex>
        </v-layout>
    </v-container>    
</template>

<script>
export default {
    name: 'login',
    data: () =>({
        nome: undefined,
        senha: undefined,
        color: 'deep-purple',
        mode: '',
        snackbar: false,
        text: '',
        timeout: 6000,
        x: null,
        y: 'top',
        rules: {
            required: value => !!value || "Required"           
        }
    }),    
    methods: {
        login() {
            this.$store.dispatch("LOGIN",{
                nome: this.nome,
                senha: this.senha
            })
            .then(() => {
              this.$router.push('/init');
            },
            error => {
              this.snackbar = true;
              this.text = error.response.data.message
            }
          );
                        
        }
    }
}; 
</script>