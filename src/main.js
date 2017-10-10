import Vue from 'vue'
import Main from './main.vue'
import Routes from './routes.js'
import Framework7 from 'Framework7'
import Framework7Vue from 'Framework7Vue'
import Scorecard from './vues/scorecard.vue'
import Leaderboard from './vues/leaderboard.vue'

document.addEventListener('deviceready', function () {
  
  Vue.use(Framework7Vue);

  Vue.component('scorecard', Scorecard);
  Vue.component('leaderboard', Leaderboard);
  
  new Vue({
    el: '#app',
    render: h => h(Main),
//    components: {'scorecard', Scorecard},
    framework7: {
        root: '#app',
        animateNavBackIcon: true,
        routes: Routes,
        material: true
    }
  });
});