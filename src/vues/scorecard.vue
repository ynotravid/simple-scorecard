<template>
  <div id="scorecard">
    <div class="page" data-page="scorecard">
        <div id="scorecard" style="margin-top: 56px">
            <leaderboard></leaderboard>
        </div>
        <div>
            <a href="#" class="open-popup link floating-button color-golf" @click="addPlayer"><i class="icon icon-plus"></i></a>
        </div>
        <player-deck></player-deck>
    </div>
  </div>
</template>

<script>
import store from '../store.js';
let self;

export default {
    name: 'scorecard',
    data () {
        return {
        }
    },
    created () {
        self = this;
    },
    methods : {
        addPlayer() {
            this.$store.dispatch('addPlayer');
        }
    }
}
</script>

<!-- 'scoped' will try to keep this css from leaking out. -->
<style scoped lang="sass">
    @import '~@/sass/common-vars.sass';

    // #leaderboard {
    //     height: 100px;
    //     width: 100%;
    // }

    #scorecard {
        .page {
            background: $theme-secondary-color--dark;
        }
    }


</style>
