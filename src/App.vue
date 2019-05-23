<template>
  <div class="container">
    <div class="row">
      <div class="well">
        <strong>Jogo da memória.</strong>
        <p class="badge">{{points}}</p>
        <div>
          <button class="btn btn-primary" @click="start">restart</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 ajustMargin" v-for="(card, index) in gameCards" :key="index">
        <app-carta
          :img-object="card"
          :img-url-verso="verso.src"
          :key="card.hash"
          @cardSelected="cardSelected"
          style="height: 120px;"
        ></app-carta>
      </div>
    </div>
  </div>
</template>

<script>
import carta from "./components/Carta.vue";
import { Politicos } from "./Politicos.js";
export default {
  mixins: [Politicos],
  data() {
    return {
      gameCards: [],
      points: 0,
      selectedcards: []
    };
  },
  methods: {
    start() {
      this.gameCards = [];
      let that = this;
      setTimeout(() => {
        let cardCount = that.images.length;
        let cards = that.images.concat(this.images);
        that.randomizeGameCards(cards);
        cards.map(item => {
          item.hash = Math.random()
            .toString(36)
            .substr(2);
        });

        that.gameCards = cards;
      }, 2000);
    },
    randomizeGameCards(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = Object.assign({}, array[i]);
        array[i] = Object.assign({}, array[j]);
        array[j] = temp;
      }
    },
    cardSelected(card) {
      this.selectedcards.push(card);
      if (this.selectedcards.length == 2) {
        if (this.selectedcards[0].src == this.selectedcards[1].src) {          

          this.gameCards.map(item => {
            item.done = item.done == true || item.src == card.src;
          });

          this.points += 1;

          this.selectedcards = [];
        } else {
          window.setTimeout(() => {
            this.selectedcards[0].open = this.selectedcards[1].open = false;
            this.selectedcards = [];
          }, 1300);
        }
      }
    }
  },
  components: { "app-carta": carta },
  created() {
    this.start();
  }
};
</script>

<style>
.ajustMargin {
  margin-top: 5px;
}
</style>
