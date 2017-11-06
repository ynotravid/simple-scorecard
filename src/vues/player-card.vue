<template>
    <div id="player-card" class="se-player-card">
        <span class="se-pc-user-info">
            <span class="se-pc-user-info__label">{{name}}</span>
            <span class="se-pc-user-info__pic"><img style="" src="img/profile-placeholder.png" /></span>
        </span>
        <span class="se-pc-score-box"><span>{{score}}</span></span>
        <span class="se-pc-score-pad">
            <span class="se-pc-sp-number-container">
                <div class="se-pc-sp-row">
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(1)">1</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(2)">2</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(3)">3</span>
                </div>
                <div class="se-pc-sp-row">
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(4)">4</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(5)">5</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(6)">6</span>
                </div>
                <div class="se-pc-sp-row">
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(7)">7</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(8)">8</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(9)">9</span>
                </div>
                <div class="se-pc-sp-row">
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(score -1)">-</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(10)">10</span>
                    <span class="se-pc-sp-number scorepad__button button-raised ripple" @click.prevent="updateScore(score +1)">+</span>
                </div>
            </span>
        </span>

    </div>

</template>

<script>

// import {TweenMax, Power2, TimelineLite} from "gsap";
let self;

export default {
    name: 'PlayerCard',
    props: {
        playerId: {
            type: String,
            required: true
        },
        holeNumber: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            default: ''
        },
        imgUrl: {
            type: String,
            default: ''
        },
        score: {
            type: Number,
            default: null
        }
    },
    data () {
        return {
        }
    },
    computed: {
    },
    created() {
        self = this;
    },
    mounted() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
        })
    },
    methods: {
        updateScore(newScore) {
            this.$emit('update-score', this.playerId, this.holeNumber, newScore);
        }
    }
}
</script>

<!-- 'scoped' will try to keep this css from leaking out. -->
<style scoped lang="sass">
    @import '~@/sass/common-vars.sass';


    #player-card {
    }

    .se-player-card {
        // border: 1px solid black;
        height: 110px;
        display: flex;
        /*align-items: center;*/
        margin: 8px;
        background-color: $theme-secondary-color--light;
        border-radius: 4px;
        /*background: $theme-secondary-color--light;*/
        padding: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .se-pc-user-info {
        flex: 1 0 0;
    }
    .se-pc-user-info__label {
        flex: 1 0 0;
        font-family: Supercell-Magic;
        font-size: 20px;
    }
    .se-pc-user-info__pic {
        flex: 1 0 0;
    }
    .se-pc-user-info__pic > img {
        /*flex: 1 0 0;*/
        width: 50px; 
        height: auto;
    }
    .se-pc-score-box {
        flex: 1 0 0;
        height: 100%;
        margin-right: 8px;
        /*border: 2px solid black;*/
        border-radius: 12px;
        font-family: Supercell-Magic;
        font-size: 45px;
        vertical-align: middle;
        line-height: 100px;
        text-align: center;
        background-color: $theme-primary-color;
        color: $theme-secondary-color--light;
        text-shadow: 4px 4px #000000;
    }
    .se-pc-score-pad {
        flex: 2 0 0;
        height: 100%;
        flex-direction: row;
    }

    .se-pc-sp-number-container {
        flex: 1 0 0;
        /*flex-wrap: wrap;*/
        justify-content: space-around;

    }
    .se-pc-sp-row {
        display: flex;
        flex: 1 0 0;
        justify-content: space-around;
    }
    .se-pc-sp-number {
        flex: 1 0 0;
        margin: 2px 4px;
    }

    .scorepad__button {
        text-decoration: none;
        text-align: center;
        /*display: block;*/
        border-radius: 2px;
        /*line-height: 36px;*/
        box-sizing: border-box;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        /*background: none;*/
        /*padding: 0 10px;*/
        /*margin: 0;*/
        /*height: 36px;*/
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        text-transform: uppercase;
        font-family: inherit;
        cursor: pointer;
        /*min-width: 64px;*/
        /*position: relative;*/
        overflow: hidden;
        outline: 0;
        border: none;
        transition-duration: 300ms;
        -webkit-transition-duration: 300ms;
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        user-select: none;
        -webkit-user-select: none;
        background: #629749;
        color: $theme-secondary-color--light;
        font-family: Supercell-Magic;
        text-shadow: 2px 2px #000000;
        padding: 1px 0px;
    }
</style>
