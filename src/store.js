import { ADD_PLAYER, SET_VIEW, SET_SELECTED_HOLE, UPDATE_SCORE } from './mutations';
let pugId = 1;
let newPlayerId = 100;

const Store = {
  state: {
    viewMode: 'ALL18',
    selectedHole: 1,
    players: [
      {
          userInfo: {
              id: 0,
              name: 'Me',
              imgUrl: null
          },
          scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      },{
          userInfo: {
              id: 1,
              name: 'Pug',
              imgUrl: null
          },
          scores: [4, 3, 3, 4, 5, 6, null, null, null, null, null, null, null, null, null, null, null, null]
      }
    ]

  },
  mutations: {
    [ADD_PLAYER] (state, payload) {
      state.players.push(payload.value);
    },
    [SET_VIEW] (state, payload) {
      state.viewMode = payload.value;
    },
    [SET_SELECTED_HOLE] (state, payload) {
      state.selectedHole = payload.value;
    },
    [UPDATE_SCORE] (state, payload) {
      let id = payload.value.id;
      let hole = payload.value.hole;
      let score = payload.value.score;
      console.log('*** UPDATE_SCORE mutator');
      let player = state.players.filter((p) => {
        return p.userInfo.id === id;
      }).pop();
      player.scores.splice(hole -1, 1, score);
    }
  },
  actions: {
    addPlayer ({ commit, state }, player) {
      let playerToAdd = player || {
        userInfo: {
          name: `Pug ${pugId++}`,
          imgUrl: null
        },
        scores: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]    
      };
      playerToAdd.userInfo.id = newPlayerId++;
      commit( { type: ADD_PLAYER, value: playerToAdd } );
    },
    setViewMode ({ commit, state }, viewMode) {
      commit( { type: SET_VIEW, value: viewMode } );
    },
    selectHoleNumber({ commit, state }, holeNumber) {
      console.log('*** store.js selectHoleNumber(): ', holeNumber);
      commit({
        type: SET_SELECTED_HOLE,
        value: holeNumber
      });
    },
    updateScore({commit, state}, {id, hole, score}) {
      console.log('*** store - updateScore(): ', id, hole, score);
      commit({
        type: UPDATE_SCORE,
        value: {
          id,
          hole,
          score
        }
      });
    }
  }
};

export default Store;
