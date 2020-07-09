<template>
  <v-card class="mx-auto" max-width="500" @click.stop="dialog=true">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="rounded-card">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
            </v-img>

            <v-card-actions>
              <v-img :src="card.src" max-height="30px" aspect-ratio="1" />
              <v-card-title v-text="card.title"></v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon x-large>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon x-large>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="90vw">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="300px"
            src="https://ak.picdn.net/shutterstock/videos/24599282/thumb/3.jpg"
          >
            <v-card-title>Mi café 2X1</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">10 cúpones restantes</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>2x1 en cafés tradicionales</div>

            <div>Aplica en zona 10 de lunes a jueves</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">Reclamar</v-btn>

            <v-btn color="blue darken-1" text @click="dialog = false">Compartir</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Mi café 2X1",
        src: "https://ak.picdn.net/shutterstock/videos/24599282/thumb/3.jpg",
        flex: 12
      },
      {
        title: "Mi café 2X1",
        src: "https://ak.picdn.net/shutterstock/videos/24599282/thumb/3.jpg",
        flex: 12
      },
      {
        title: "Mi café 2X1",
        src: "https://ak.picdn.net/shutterstock/videos/24599282/thumb/3.jpg",
        flex: 12
      }
    ],
    dialog: false
  })
};
</script>

<style scoped>

.rounded-card{
  border-radius: 15%;
}

</style>