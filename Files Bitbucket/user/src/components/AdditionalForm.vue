<template>
    <div class="AdditionalForm">
        <v-form ref="form">
            <v-row justify="center" align="center">
                <v-col cols="10" class="text-center">
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="info.date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="info.date"
                            label="Choose your birth date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="info.date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(info.date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <v-select
                    v-model="info.gender"
                    :items="items"
                    label="Gender"
                    solo
                    ></v-select>
                    <p>Select the subjects you are interested in:</p>
                    <ImageGrid @cards="verificar"/>
                    <v-btn
                        color="#002649"
                        @click="send"
                        class="text-none white--text"
                    >
                    Send
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import ImageGrid from "./ImageGrid"

export default {
    name:"SignUpForm",
    components:{
        ImageGrid
    },
    data(){
        return{
            items: ['Female', 'Male', 'Other'],
            info:{
                date: new Date().toISOString().substr(0, 10),
                gender:'',
                activity:[]
            },
            menu: false,
            modal: false,
        }
    },
    methods:{
        send(){
            console.log(this.info);
        },
        verificar(valor){
            this.info.activity = valor;
        }
    }
}
</script>

<style scoped>
</style>