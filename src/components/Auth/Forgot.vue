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
                        <v-btn
                            color="blue"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                            >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>
                                Forgot it
                            </v-toolbar-title>
                        </v-toolbar>                        
                        <v-card-text>
                            <v-alert
                                text
                                dense
                                color="teal"
                                border="left"
                            >
                                You will receve a new password in the email.
                            </v-alert>                            
                            <v-text-field
                                name="email"
                                label="Email"
                                type="text"
                                v-model="email"
                            ></v-text-field> 
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn to="/login" color="indigo" dark>Back</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn 
                                color="primary" 
                                dark
                                @click.prevent="sendEmail()">
                                Send
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
    name: 'forgot',
    data: () =>({
        color: '',
        mode: '',
        snackbar: false,
        text: '',
        timeout: 6000,
        x: null,
        y: 'top',
    }),
    methods: {
        sendEmail(){
            console.log(this.email)
            this.$store.dispatch("FORGOT",{
                email: this.email
            })
            .then(() => {                    
                this.snackbar = true,
                this.text = 'The email has been sent.'
            })
            .catch((response) => {
                this.snackbar = true,
                this.text = response
            })
        }
    }
}; 
</script>