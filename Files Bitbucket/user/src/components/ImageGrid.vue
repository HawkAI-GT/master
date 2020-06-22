<template>
  <v-row>
      <v-icon>fas fa-edit</v-icon>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card 
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="n in 8"
              :key="n"
              class="d-flex child-flex"
              cols="6"
            >
              <v-card flat tile class="d-flex" @click="selected(n)">
                <v-img
                  :src="`https://hawkai-frontend.s3.amazonaws.com/${n}-min.jpg`"
                  aspect-ratio="1"
                  class="grey lighten-2 white--text align-end transparente"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card-title class="white--text">{{temas[n - 1]}}</v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data(){
        return{
            activity:[false,false,false,false,false,false,false,false],
            temas:["Coffe","Shoes","Food","Pets","Clothes","Action","Tech","Toys"]
        }
    },
    methods:{
        selected(e){
            console.log(e);
            this.activity[e - 1] = true
            this.$emit('cards',this.activity)
        }
    }
}
</script>

<style scoped>
.transparente{
    background-color: white!important;
    opacity: 1.35;
    border-color: transparent!important;
}
</style>