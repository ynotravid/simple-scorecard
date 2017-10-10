<template>
  <div id="app" class="theme-golf">
    <div class="statusbar-overlay"></div>
    <div class="panel-overlay"></div>
    <div class="panel panel-left panel-cover">
      <div class="view navbar-fixed">
        <div class="pages">
          <div data-page="panel-left" class="page">
            <div class="navbar">
              <div class="navbar-inner">
                <div class="center">Options and Such</div>
              </div>
            </div>
            <div class="page-content">
              <div class="content-block">
                <p><b>TODO:</b> navigation and quick options.  Also maybe <a href="#" class="close-panel">close me</a> btn.</p>
              </div>
              <div class="content-block-title">Lorem Ipsum</div>
              <div class="content-block">
                <p>Long text block goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem urna, gravida non scelerisque id, fringilla ac velit. Phasellus elementum a ipsum at ornare. Mauris sagittis rhoncus euismod. Integer convallis augue eu lacus ultrices, in dictum elit consequat. Nulla faucibus massa id felis egestas eleifend. Proin consequat dignissim magna ut scelerisque. Vestibulum ac lorem semper, posuere sapien nec, pharetra massa. Nulla a tellus facilisis, sollicitudin quam porta, aliquam lorem. Fusce dignissim eros ac diam molestie, ut ultrices lorem tristique. Ut facilisis augue ac nisi egestas malesuada. Nunc posuere tortor quis eleifend mollis. Aliquam erat volutpat. Donec feugiat elit tellus, nec convallis orci elementum in. Sed urna mi, vestibulum id tempus id, pretium et ante. Pellentesque eget sollicitudin ligula. Phasellus pellentesque velit eu porta suscipit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="views">
      <div class="view view-main">
        <div class="pages navbar-fixed">
          <!--<div class="page" data-page="scorecard">-->
            <div class="navbar">
              <div class="navbar-inner">
                <div class="center">Golf Scorecard</div>
                <div class="right"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>
              </div>
            </div>
                            <scorecard></scorecard>

            <!--<div class="page-content">

            </div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>



  </div>
</template>

<script>
import store from './store.js';
import Scorecard from './vues/scorecard.vue'

let self;

export default {
  name: 'main',
  data () {
    return {
      // tweets : store.tweets,
      // newTweet : ''
    }
  },
  created () {
    self = this;
  },
  methods : {
  }
}
</script>

<style lang="sass">
  @import '~@/sass/common-vars.sass';

  .banner-ad__horiz {
    height: 50px;
    background-color: rebeccapurple;
    border: 1px solid black;
  }

  .statusbar-overlay {
      background: #000000;
  }

.navbar {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    
}



</style>
