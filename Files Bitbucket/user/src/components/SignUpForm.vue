<template>
    <div class="SignUpForm">
        <v-form name="signup" ref="form" v-model="valid" lazy-validation>
            <v-row justify="center" align="center">
                <v-col cols="10" class="text-center">
                    <v-text-field
                        v-model="info.name"
                        :rules="campoRules"
                        label="Solo"
                        placeholder="Full Name"
                        solo
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="info.email"
                        :rules="campoRules"
                        label="Solo"
                        placeholder="Email"
                        solo
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="info.password"
                        :rules="campoRules"
                        :append-icon="showp ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showp ? 'text' : 'password'"
                        @click:append="showp = !showp"
                        label="Solo"
                        placeholder="Password"
                        solo
                        required
                    ></v-text-field>
                    <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You have to agree to the terms and conditions!']"
                        label="Agree terms and conditions"
                        required
                    ></v-checkbox>
                    <v-btn
                        align="center"
                        :disabled="!valid"
                        color="#002649"
                        @click="validate"
                        class="text-none white--text"
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
            info:{
                name:'',
                email:'',
                password:''
            },
            checkbox:false,
            valid:true,
            campoRules: [
                v => !!v || 'This field is mandatory'
            ]
        }
    },
    methods:{
        validate(){
            if(this.$refs.form.validate()){
                console.log(this.info)
            }
        }
    }
}
</script>

<style scoped>
</style>