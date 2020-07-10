<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="rounded-card">
            <v-img
              :src="card.src"
              class="white--text align-end"
              height="300px"
              @click.stop=open_modal(card.id)
            >
            </v-img>

            <v-card-actions>
              <v-list-item-avatar color="grey darken-3" size="50">
                <v-img
                  :src="card.logo"
                  class="ma-2"
                >
                </v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{card.title}}</v-list-item-title>
              </v-list-item-content>
              <v-btn icon>
                <v-icon large>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon large>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="90vw">
        <v-card class="mx-auto" max-width="400">
          <v-card-title>
            <v-list-item-avatar color="grey darken-3" size="50">
              <v-img
                :src="temp_card.logo"
                class="ma-2"
              >
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{temp_card.company}}</v-list-item-title>
          </v-list-item-content>
          </v-card-title>
          <v-img
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.8)"
            height="300px"
            :src="temp_card.src"
          >
            <v-card-title>{{temp_card.title}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{temp_card.remaining}} cúpones restantes</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{temp_card.description}}</div>

            <div>{{temp_card.conditions}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="text-none bigger" color="blue darken-1" text @click="dialog = false">Reclamar</v-btn>

            <v-btn class="text-none bigger" color="blue darken-1" text @click="dialog = false">Compartir</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon medium>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon medium>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
import posts from "../assets/feed_test/posts.json"

export default {
  data: () => ({
    cards: posts.data,
    dialog: false,
    temp_card:''
  }),
  methods:{
    open_modal(id){
      this.temp_card = this.cards[id];
      this.dialog = true;
      console.log(id);
    }
  }
};
</script>

<style scoped>

.rounded-card{
  border-radius: 15%;
}

.bigger{
  font-weight: bold;
}

</style>