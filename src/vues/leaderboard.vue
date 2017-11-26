<template>
    <div id="leaderboard" v-bind:style="{ height: leaderBoardHeight + 'rem' }">
        <!-- BACKGROUND LAYER -->
        <!-- <div class="lb-layer lb-layer-background--container" v-bind:style="{ height: leaderBoardHeight + 'rem' }"> -->
        <div class="lb-layer lb-layer-background--container" :style="compLeaderBoardHeight">
            <div class="lb-layer-background--header"></div>
        </div>

        <!-- SELECTION INDICATOR LAYER -->
        <div id="qa-lb-layer-select-indicator" class="lb-layer" :style="compLeaderBoardHeight">
            <div id="qa-lb-selection-indicator" ref="lbSelector" class="lb-selection-indicator" v-bind:style="selectorStyles"></div>
        </div>

        <!-- INFORMATION LAYER (names, scores, etc) -->      
        <div id="qa-lb-layer-information" class="lb-layer" v-bind:style="compLeaderBoardHeight">

            <div class="lb-layer-info--container">
                <div :class="[compLeaderBoardHeight, ...computePlayerNamesCol.classes]"
                     :id="'lb-col-player-names'"
                     :ref="'playerNames'">
                    <div :class="computePlayerNamesCol.header.classes">{{computePlayerNamesCol.header.value}}</div>
                    <div v-for="val in computePlayerNamesCol.values" :class="computePlayerNamesCol.textClasses" key="colHeaderPlayerValue">{{val || '-'}}</div>
                </div>

                <transition name="transfont9">
                    <div v-if="viewMode !== 'BACK9'" class="lb-col--score-container">
                        <div v-for="(col, index) in computeFront9" 
                             :key="col.holeNumber"
                             :class="[compLeaderBoardHeight, ...col.classes]"
                             :id="'lb-col-' +index"
                             :ref="'hole' +col.holeNumber"
                             :hole="col.holeNumber"
                             @click.capture="handleScoreSelect(col.selectable, $event)">

                            <div :class="col.header.classes" :key="'lbl'+col.holeNumber">{{col.header.value}}</div>
                            <div v-for="(val, i) in col.values" :class="col.textClasses" :key="'colHeaderValue' +col.holeNumber +i">{{val || '-'}}</div>
                        </div>
                    </div>
                </transition>
                <div>
                    <div :class="[compLeaderBoardHeight, ...compFront9SubTotal.classes]">
                        <div :class="compFront9SubTotal.header.classes">{{compFront9SubTotal.header.value}}</div>
                        <div v-for="val in compFront9SubTotal.values" :class="compFront9SubTotal.textClasses">{{val || '-'}}</div>
                    </div>
                </div>

                <transition name="transfont9">
                    <div v-if="viewMode !== 'FRONT9'" class="lb-col--score-container">
                        <div v-for="(col, index) in computeBack9" 
                             :key="col.holeNumber"
                             :class="[compLeaderBoardHeight, ...col.classes]"
                             :id="'lb-col-' +index"
                             :ref="'hole' +col.holeNumber"
                             :hole="col.holeNumber"
                             @click.capture="handleScoreSelect(col.selectable, $event)">

                            <div :class="col.header.classes" :key="'lbl'+col.holeNumber">{{col.header.value}}</div>
                            <div v-for="(val, i) in col.values" :class="col.textClasses" :key="'colHeaderValue' +col.holeNumber +i">{{val || '-'}}</div>
                        </div>
                    </div>
                </transition>
                <div>
                    <div :class="[compLeaderBoardHeight, ...compBack9SubTotal.classes]">
                        <div :class="compBack9SubTotal.header.classes">{{compBack9SubTotal.header.value}}</div>
                        <div v-for="val in compBack9SubTotal.values" :class="compBack9SubTotal.textClasses">{{val || '-'}}</div>
                    </div>
                </div>

            </div>
        </div>

    <!-- <button @click="selectOMode" style="position:absolute; bottom:80px;">swap</button> -->
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
            // console.log('*** <leaderboard> selectedHoleNumber(): ', selectedHoleNew);
            if (selectedHoleNew !== selectedHolePrev) {
                self.selectHoleByHoleNumber(selectedHoleNew);
            }
            return selectedHoleNew;
        },
        isShowFront9() {
            const mode = this.$store.state.viewMode;
            return mode === 'FRONT9' || 'ALL18';
        },
        computePlayerNamesCol() {
            return {
                description: 'player names',
                header: {
                    classes: ['lb-header-cell--name', 'lb-header-text'],
                    value: this.selectedHoleNumber
                },
                classes: ['lb-col--name'],
                textClasses: ['lb-data-cell--name'],
                values: this.players.map( (player) => { return player.userInfo.name; }),
                selectable: false
            };            
        },
        computeFront9() {
            let columns = [];
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
            }
            return columns;
        },
        computeBack9() {
            let columns = [];
            if ( this.viewMode && this.viewMode === 'BACK9' || this.viewMode === 'ALL18') {
                // Front 9 scores
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
            }
            return columns;
        },
        compFront9SubTotal() {
            return {
                    description: 'Font 9 score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: '1/2'
                    },
                    classes: ['lb-col--subtotal'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map( (player) => { return this.subTotal(player.scores, 0, 8); }),
                    selectable: false                                
            };
        },
        compBack9SubTotal() {
            return {
                    description: 'Back 9 score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: '2/2'
                    },
                    classes: ['lb-col--subtotal'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map( (player) => { return this.subTotal(player.scores, 9, 17); }),
                    selectable: false                                
            };
        },
        leaderBoardHeight() {
            return 1.5 * (this.players.length + 1);
        },
        compLeaderBoardHeight() {
            return {
                active: true,
                height: (1.5 * (this.players.length + 1)) +'rem'
            }
        },
        selectorStyles() {
            return {
                active: true,
                height: (1.5 * (this.players.length + 1)) +'rem',
                width: this.selector.width +'px'
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
        selectOMode(mode) {
            const MODE_MAP = {FRONT9:0, BACK9:1, ALL18:2};
            const MODES = ['FRONT9','BACK9','ALL18'];
            let newMode = MODES[ ((MODE_MAP[this.viewMode] +1) %3) ]; 
            console.log('*** swap to: ', newMode);
            this.setViewMode(newMode);

        },
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
            // Move it into position.
            let newTargetElm  = this.$refs.hole1[0];
            let lbSelectorElm = this.$refs.lbSelector;

            let targetBox = newTargetElm.getBoundingClientRect();
            this.selector.width = targetBox.width;
            TweenMax.to(lbSelectorElm, 0, {left: targetBox.left});
            TweenMax.to(lbSelectorElm, .225, {opacity: 1});

            //Fade in.
            this.showSelection = true;
        },
        selectHoleByHoleNumber(number) {
            // Move it into position.
            let newTargetElm = this.$refs['hole' +number][0];
            let lbSelectorElm = this.$refs.lbSelector;

            let targetBox = newTargetElm.getBoundingClientRect();
            this.selector.width = targetBox.width;
            TweenMax.to(lbSelectorElm, .3, {left: targetBox.left});
        },
        updateViewMode() {
            if (this.isPortrait) {
                this.setViewMode(this.selectedHoleNumber < 10 ? 'FRONT9' : 'BACK9');
            } else {
                this.setViewMode('ALL18');
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

    $lb-row-height: 1.5rem;
    $lb--name--width: 2.5rem;

    #leaderboard {
        height: 100px;
        width: 100%;
        font-size: 10px;
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
        padding: 0 .75rem;
    }



    .lb-col {
        display: flex;
        flex: 1 0 0;
        flex-direction: column;
        align-items: center;
    }
    .lb-col--name {
        width: $lb--name--width;        
        // margin-left: 1rem;
    }
    .lb-col--score-container {
        display: flex;
        flex-grow: 1;
        overflow: hidden;
    }
    .lb-col--subtotal {
        display: inline;
        width: 1rem;
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



    .transfont9-enter-active, .transfont9-leave-active {
        transition: all 1s;
    }
    .transfont9-enter, .transfont9-leave-to {
        flex: .00001;
    }


</style>
