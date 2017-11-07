<template>
    <div id="leaderboard" v-bind:style="{ height: leaderBoardHeight + 'rem' }">
        <!-- BACKGROUND LAYER -->
        <!-- <div class="lb-layer lb-layer-background--container" v-bind:style="{ height: leaderBoardHeight + 'rem' }"> -->
        <div class="lb-layer lb-layer-background--container" v-bind:style="compLeaderBoardHeight">
            <div class="lb-layer-background--header"></div>
        </div>

        <!-- SELECTION INDICATOR LAYER -->
        <div id="qa-lb-layer-select-indicator" class="lb-layer" v-bind:style="compLeaderBoardHeight">
            <!-- <transition appear name="fade"> -->
                <div id="qa-lb-selection-indicator" ref="lbSelector" class="lb-selection-indicator" v-bind:style="selectorStyles"></div>
            <!-- </transition> -->
        </div>


        <!-- INFORMATION LAYER (names, scores, etc) -->      
        <div id="qa-lb-layer-information" class="lb-layer" v-bind:style="compLeaderBoardHeight">
            <div class="lb-layer-info--container">

                <div v-for="(col, index) in columnsToDisplay" 
                      :class="[compLeaderBoardHeight, ...col.classes]"
                      :id="'lb-col-' +index"
                      :ref="'hole' +col.holeNumber"
                      :hole="col.holeNumber"
                      @click.capture="handleScoreSelect(col.selectable, $event)">

                    <div :class="col.header.classes">{{col.header.value}}</div>

                    <div v-for="val in col.values" :class="col.textClasses">{{val || '-'}}</div>

                </div>

            </div>
        </div>


    </div>
</template>

<script>

import {TweenMax, Power2, TimelineLite} from "gsap";

let self;
let selectedHolePrev = 1;

const SCORES_TO_SHOW = ['FRONT9', 'BACK9', 'ALL18'];


export default {
    name: 'leaderboard',
    data () {
        return {
            isPortrait: window.matchMedia("(orientation: portrait)").matches,
//            selection: 1,
            showSelection: false,
            selector: {
                width: 0
            },
            toSelector: {
                width: 0,
            }
        }
    },
    computed: {
        viewMode() {
            return this.$store.state.viewMode;
        },
        players() {
            return this.$store.state.players;
        },
        selectedHoleNumber() {
            let selectedHoleNew = this.$store.state.selectedHole;
            console.log('*** <leaderboard> selectedHoleNumber(): ', selectedHoleNew);
            if (selectedHoleNew !== selectedHolePrev) {
                self.selectHoleByHoleNumber(selectedHoleNew);
            }
            return selectedHoleNew;
        },
        columnsToDisplay() {
            // names
            let columns = [
                {
                    description: 'player names',
                    header: {
                        classes: ['lb-header-cell--name', 'lb-header-text'],
                        value: this.selectedHoleNumber
                    },
                    classes: ['lb-col--name'],
                    textClasses: ['lb-data-cell--name'],
                    values: this.players.map( (player) => { return player.userInfo.name; }),
                    selectable: false
                }
            ];

            if ( this.viewMode && this.viewMode === 'FRONT9' || this.viewMode === 'ALL18') {
                // Front 9 scores
                for ( let i=0; i<9; i++ ) {
                    columns.push({
                        description: `hole ${i +1} score`,
                        header: {
                            classes: ['lb-header-cell', 'lb-header-text'],
                            value: i+1
                        },
                        classes: ['lb-col'],
                        textClasses: ['lb-data-cell'],
                        holeNumber: i+1,
                        values: this.players.map( (player) => { return player.scores[i]; }),
                        selectable: true                    
                    });
                }

                // Front 9 subtotal
                columns.push({
                    description: 'Font 9 score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: ''
                    },
                    classes: ['lb-col'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map( (player) => { return this.subTotal(player.scores, 0, 8); }),
                    selectable: false                
                });
            }

            if ( this.viewMode && this.viewMode === 'BACK9' || this.viewMode === 'ALL18') {
            
                // Back 9 scores
                for ( let i=9; i<18; i++ ) {
                    columns.push({
                        description: `hole ${i +1} score`,
                        header: {
                            classes: ['lb-header-cell', 'lb-header-text'],
                            value: i+1
                        },
                        classes: ['lb-col'],
                        textClasses: ['lb-data-cell'],
                        holeNumber: i+1,
                        values: this.players.map( (player) => { return player.scores[i]; }),
                        selectable: true                    
                    });
                }

                // Back 9 subtotal
                columns.push({
                    description: 'Back 9 score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: ''
                    },
                    classes: ['lb-col'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map( (player) => { return this.subTotal(player.scores, 9, 17); }),
                    selectable: false                
                });

                // Total score
                columns.push({
                    description: 'Total score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: 'TOT'
                    },
                    classes: ['lb-col'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map( (player) => { return this.subTotal(player.scores, 0, 17); }),
                    selectable: false                
                });
            }

            return columns;
        },
        leaderBoardHeight() {
            return 2 * (this.players.length + 1);
        },
        compLeaderBoardHeight: function () {
            return {
                active: true,
                height: (2 * (this.players.length + 1)) +'rem'
            }
        },
        selectorStyles() {
            return {
                active: true,
                height: (2 * (this.players.length + 1)) +'rem',
                width: this.selector.width +'px'
                // left: this.selector.left +'px'
            };
        }
    },
    created() {
        self = this;
        var mediaQueryRule = window.matchMedia("(orientation: portrait)")
        mediaQueryRule.onchange = function(e) { 
            self.isPortrait = window.matchMedia("(orientation: portrait)").matches;
            self.updateViewMode();
        }
        window.addEventListener('resize', self.syncSelector);
        self.updateViewMode();
    },
    mounted() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            self.initialSelection();
        })
    },
    methods: {
        setViewMode(mode) {
            this.$store.dispatch('setViewMode', mode);
        },
        selectHoleNumber(holeNumber) {
            this.$store.dispatch('selectHoleNumber', holeNumber);
        },
        syncSelector() {
            let targetElm = this.$refs['hole'+this.selectedHoleNumber][0];
            let targetBox = targetElm.getBoundingClientRect();
            let lbSelectorElm = this.$refs.lbSelector;
            this.selector.width = targetBox.width;
            TweenMax.to(lbSelectorElm, 0, {left: targetBox.left});            
        },
        initialSelection() {
            //Move it into position.
            let newTargetElm  = this.$refs.hole1[0];
            let lbSelectorElm = this.$refs.lbSelector;

            let targetBox = newTargetElm.getBoundingClientRect();
            this.selector.width = targetBox.width;
            // this.selector.left = targetBox.left;
            // lbSelectorElm.left = targetBox.left;
            TweenMax.to(lbSelectorElm, 0, {left: targetBox.left});
            TweenMax.to(lbSelectorElm, .225, {opacity: 1});

            //Fade in.
            this.showSelection = true;
        },
        selectHoleByHoleNumber(number) {
            //Move it into position.
            let newTargetElm = this.$refs['hole' +number][0];
            let lbSelectorElm = this.$refs.lbSelector;

            let targetBox = newTargetElm.getBoundingClientRect();
            this.selector.width = targetBox.width;
            TweenMax.to(lbSelectorElm, .3, {left: targetBox.left});
        },
        updateViewMode() {
            if (this.isPortrait) {
                this.setViewMode(this.selectedHoleNumber < 10 ? 'FRONT9' : 'BACK9');
                // this.viewMode = this.selection < 10 ? 'FRONT9' : 'BACK9';
            } else {
                this.setViewMode('ALL18');
                // this.viewMode = 'ALL18'
            }
        },
        subTotal(scores, start, end) {
            return scores.slice(start, end).reduce( (prev, cur) => {
                return prev + cur;
            });
        },
        handleScoreSelect(selectable, event) {
            if ( !selectable || !event.currentTarget.attributes.hole ) return;
            let newTarget = event.currentTarget;
            let newHoleNumber = newTarget.attributes.hole.value;
            let previousHole = this.selectedHoleNumber || 1;
            let distanceToTravel = Math.abs( newHoleNumber - previousHole );

            let animationLength = (225 +(150 * distanceToTravel / 17)) / 1000;

            let newSelection = parseInt(event.currentTarget.attributes.hole.value);
            let targetBox = event.currentTarget.getBoundingClientRect(); 
            let toBeState = {
                left: targetBox.left, 
                height: targetBox.height, 
                width: targetBox.width
            };
            let lbSelectorElm = this.$refs.lbSelector;
            console.log('animation length: ', animationLength);
            TweenMax.to(lbSelectorElm, animationLength, toBeState);

            this.selector = Object.assign({}, this.selector, toBeState);
            this.selectHoleNumber(newSelection);
        }
    }
}
</script>

<!-- 'scoped' will try to keep this css from leaking out. -->
<style scoped lang="sass">
    @import '~@/sass/common-vars.sass';

    $lb-row-height: 2rem;
    $lb--name--width: 4rem;

    #leaderboard {
        height: 100px;
        width: 100%;
        font-size: 12px;
    }

    .lb-layer {
        position: absolute;
        width: 100%;        
    }

    .lb-layer-background--container {
        background-color: $theme-secondary-color;
    }
    .lb-layer-background--header {
        height: $lb-row-height;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: $theme-primary-color;
        color: $theme-secondary-color--light;
    }

    .lb-selection-indicator {
        // left: -100px;
        opacity: 0;
        position: absolute;
        background-color: rgba(225,226,225,.8);
        border: 2px solid;
        border-radius: 4px;
        box-shadow: 1px 0 3px rgba(0, 0, 0, 0.12);
    }

    .lb-layer-info--container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }



    .lb-col--name {
        width: $lb--name--width;        
        margin-left: 1rem;
    }
    .lb-col {
        display: flex;
        flex: 1 0 0;
        flex-direction: column;
        align-items: center;
    }

    .lb-header-text {
        text-shadow: 2px 2px #000000;
        -webkit-text-fill-color: white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    .lb-header-cell--name {
        height: $lb-row-height;
        display: flex;
        line-height: $lb-row-height;
        text-align: center;
        justify-content: center;
        user-select: none;
    }
    .lb-header-cell {
        height: $lb-row-height;
        display: flex;
        line-height: $lb-row-height;
        text-align: center;
        justify-content: center;
        user-select: none;
    }
    .lb-data-cell {
        height: $lb-row-height;
        display: flex;
        line-height: $lb-row-height;
        text-align: center;
        justify-content: center;
        user-select: none;
    }
    .lb-data-cell--name {
        height: $lb-row-height;
        display: flex;
        line-height: $lb-row-height;
        text-align: center;
        user-select: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }
</style>
