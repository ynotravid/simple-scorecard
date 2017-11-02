import Vue from 'vue'
import Vuex from 'vuex'
import Main from './main.vue'
import Routes from './routes.js'
import Framework7 from 'Framework7'
import Framework7Vue from 'Framework7Vue'
import Scorecard from './vues/scorecard.vue'
import Leaderboard from './vues/leaderboard.vue'
import Store from './store.js';


document.addEventListener('deviceready', function () {
  
  Vue.use(Vuex)
  Vue.use(Framework7Vue);

  const store = new Vuex.Store(Store);    

  Vue.component('scorecard', Scorecard);
  Vue.component('leaderboard', Leaderboard);
  
  new Vue({
    el: '#app',
    render: h => h(Main),
    store,
//    components: {'scorecard', Scorecard},
    framework7: {
        root: '#app',
        animateNavBackIcon: true,
        routes: Routes,
        material: true
    }
  });
});