<template>
    <div class="SignUpForm">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row justify="center">
                <v-col cols="10" class="text-center">
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
                        label="Acepto términos y condiciones."
                        required
                    ></v-checkbox>
                    <v-btn
                        align="center"
                        :disabled="!valid"
                        color="#002649"
                        @click="validate"
                        class="text-none"
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