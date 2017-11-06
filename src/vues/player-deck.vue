<template>
    <div id="player-deck" class="player-deck">
                <!-- Slider main container -->
                <div>{{selectedHole}}</div>
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div v-for="holeNumber in 18"class="swiper-slide">
                    <player-card  v-for="(player, index) in players"
                                  :player-id="'blah'"
                                  :hole-number="holeNumber"
                                  :name="player.userInfo.name"
                                  :img-url="player.userInfo.imgUrl"
                                  :score="player.scores[0]"
                                  v-on:update-score="updateScore">
                    </player-card>        
                </div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>

    </div>
</template>

<script>
// import {TweenMax, Power2, TimelineLite} from "gsap";
import {Swiper} from 'swiper';

let self;
let selectedHolePrev = 1;

export default {
    name: 'PlayerDeck',
    data () {
        return {
            mySwiper: {}
        }
    },
    computed: {
        viewMode() {
            return this.$store.state.viewMode;
        },
        players() {
            return this.$store.state.players;
        },
        selectedHole() {
            let selectedHoleNew = this.$store.state.selectedHole;
            console.log('*** <player-deck> selectedHole(): ', selectedHoleNew);
            if (this.mySwiper && selectedHoleNew !== selectedHolePrev) {
                this.mySwiper.slideTo(selectedHoleNew, 300);
                // mySwiper.slideTo(index, speed, runCallbacks);
            }
            return selectedHoleNew;
        }
    },
    created() {
        self = this;
    },
    // mounted() {
    //     this.$nextTick(function () {
    //         // Code that will run only after the
    //         // entire view has been rendered
    //     })
    // },
    mounted() {
        this.mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            // loop: true,
            // initialSlide: 0, // Default: 0
            // speed: 300,      // Default 300ms
            // slidesPerColumn: 1, // Could be useful to show multiple holes for large screens
            on: {
                init: function () {
                    console.log('*** swiper initialized');
                },
                slideChangeTransitionEnd: function() {
//                    self.slideChangeHandler();
                }
            },
            grabCursor: true,
        });
    },
    methods: {
        updateScore(playerId, holeNumber, newScore) {
            console.log('updateScore(): ', playerId, holeNumber, newScore);
        },
        selectHoleNumber(holeNumber) {
            this.$store.dispatch('selectHoleNumber', holeNumber);
        },
        slideChangeHandler(x) {
            console.log('*** slideChangeHandler(): ', x);
            self.selectHoleNumber(this.mySwiper.realIndex);
        }        
        
    }
}
</script>

<!-- 'scoped' will try to keep this css from leaking out. -->
<style scoped lang="sass">
    @import '~@/sass/common-vars.sass';

    .player-deck {
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
    }

    .swiper-button-prev, .swiper-button-next {
        display: none;
    }
</style>
