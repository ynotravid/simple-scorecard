<template>
    <div id="leaderboard">
        <div class="lb-layer-background">
            <div class="lb-row lb-hole-row-background"></div>
        </div>
        <div class="lb-layer-select-indicator">
            <div id="qa-lb-selection-indicator" class="lb-selection-indicator"></div>
        </div>
        <div class="lb-layer-labels">
            <div class="lb-row lb-hole-row">
                <span class="lb-hole-col--label">Hole</span>
                <span class="lb-hole-col">1</span>
                <span class="lb-hole-col">2</span>
                <span class="lb-hole-col">3</span>
                <span class="lb-hole-col">4</span>
                <span class="lb-hole-col">5</span>
                <span class="lb-hole-col">6</span>
                <span class="lb-hole-col">7</span>
                <span class="lb-hole-col">8</span>
                <span class="lb-hole-col">9</span>
                <span class="lb-hole-col">IN</span>
            </div>
            <div class="lb-row lb-player-row">
                <span class="lb-player-col--label">Pug 1</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">3</span>
                <span class="lb-player-col">3</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">5</span>
                <span class="lb-player-col">6</span>
                <span class="lb-player-col">3</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">28</span>
            </div>
            <div class="lb-row lb-player-row">
                <span class="lb-player-col--label">Pug 2</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">3</span>
                <span class="lb-player-col">3</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">-</span>
                <span class="lb-player-col">6</span>
                <span class="lb-player-col">3</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">4</span>
                <span class="lb-player-col">28</span>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store.js';

let self;

export default {
    name: 'leaderboard',
    data () {
        return {
    //      tweets : store.tweets,
    //      newTweet : ''
            players: [
                {
                    userInfo: {
                        name: 'Pug',
                        imgUrl: null
                    },
                    scores: [4, 3, 3, 4, 5, 6]
                }
            ],
            selection: 5
        }
    },
    created () {
        self = this;
    },
    methods : {

    }
}
</script>

<!-- 'scoped' will try to keep this css from leaking out. -->
<style scoped lang="sass">
    @import '~@/sass/common-vars.sass';

    #leaderboard {
        height: 100px;
        width: 100%;
    }

    .lb-row {
        height: 2em;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .lb-hole-row-background {
        background-color: $theme-primary-color;
        color: $theme-secondary-color--light;
        font-family: Supercell-Magic;
    }
    .lb-hole-col--label {
        width: 6em;
        margin-left: 1em;
        font-family: Supercell-Magic;
        text-shadow: 2px 2px #000000;
    }
    .lb-hole-col {
        font-family: Supercell-Magic;
        text-shadow: 2px 2px #000000;
        flex: 1 0 0;
    }
    .lb-hole-row {
        color: $theme-secondary-color--light;
    }

    .lb-player-col--label {
        font-family: Supercell-Magic;
        width: 6em;
        margin-left: 1em;
    }
    .lb-player-col {
        font-family: Supercell-Magic;
        flex: 1 0 0;
    }






    .lb-selection-indicator {
        height: 98%;
        width: 30px;
        left: 53%;
        position: absolute;
        background-color: $theme-secondary-color--light;
        border: 1px solid;
        border-radius: 4px;
        box-shadow: 1px 0 3px rgba(0, 0, 0, 0.12);

    }

    .lb-layer-background {
        position: absolute;
        height: 100px;
        width: 100%;
        background-color: $theme-secondary-color;
    }
    .lb-layer-select-indicator {
        position: absolute;
        height: 100px;
        width: 100%;
    }
    .lb-layer-labels {
        position: absolute;
        height: 100px;
        width: 100%;
    }








</style>
