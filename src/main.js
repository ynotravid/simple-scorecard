import Vue from 'vue'
import Vuex from 'vuex'
import Main from './main.vue'
import Routes from './routes.js'
import Framework7 from 'Framework7'
import Framework7Vue from 'Framework7Vue'
import Scorecard from './vues/scorecard.vue'
import Leaderboard from './vues/leaderboard.vue'
import PlayerDeck from './vues/player-deck.vue'
import PlayerCard from './vues/player-card.vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Store from './store.js'


document.addEventListener('deviceready', function () {
  
  Vue.use(Vuex);
  Vue.use(Framework7Vue);
  // Vue.use(VueAwesomeSwiper);

  const store = new Vuex.Store(Store);    

  Vue.component('scorecard', Scorecard);
  Vue.component('leaderboard', Leaderboard);
  Vue.component('player-deck', PlayerDeck);
  Vue.component('player-card', PlayerCard);
  // Vue.component('swiper', swiper);
  // Vue.component('swiper-slide', swiperSlide);

  
  new Vue({
    el: '#app',
    render: h => h(Main),
    store,
    framework7: {
        root: '#app',
        animateNavBackIcon: true,
        routes: Routes,
        material: true
    }
  });
});