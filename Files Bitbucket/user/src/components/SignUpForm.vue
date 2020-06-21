<template>
    <div class="SignUpForm">
        <v-form>
            <v-row justify="center">
                <v-col cols="10">
                    <v-text-field
                        :rules="campoRules"
                        label="Solo"
                        placeholder="Nombres"
                        solo
                        required
                    ></v-text-field>
                    <v-text-field
                        :rules="campoRules"
                        label="Solo"
                        placeholder="Apellidos"
                        solo
                        required
                    ></v-text-field>
                    <v-text-field
                        :rules="campoRules"
                        label="Solo"
                        placeholder="Correo Electrónico"
                        solo
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :rules="campoRules"
                        :append-icon="showp ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showp ? 'text' : 'password'"
                        @click:append="showp = !showp"
                        label="Solo"
                        placeholder="Contraseña"
                        solo
                        required
                    ></v-text-field>
                    <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'Debe de aceptar los términos y condiciones']"
                        label="Aceptar términos y condiciones?"
                        required
                    ></v-checkbox>
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        @click="validate"
                    >
                    Registrarse
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name:"SignUpForm",
    data(){
        return{
            showp:false,
            password:'',
            checkbox:false,
            valid:true,
            campoRules: [
                v => !!v || 'Este campo es obligatorio'
            ]
        }
    },
    methods:{
        validate(){
            this.$refs.form.validate()
        }
    }
}
</script>

<style scoped>
</style>