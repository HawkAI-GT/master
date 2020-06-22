<template>
    <div class="AdditionalForm">
        <v-form ref="form">
            <v-row justify="center" align="center">
                <v-col cols="10" class="text-center">
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Choose your birth date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <v-select
                    :items="items"
                    label="Gender"
                    solo
                    ></v-select>
                    <p>Select the subjects you are interested in:</p>
                    <ImageGrid />
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
                name:'',
                email:'',
                password:''
            },
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
        }
    },
    methods:{
        send(){
            console.log(this.info);
        }
    }
}
</script>

<style scoped>
</style>