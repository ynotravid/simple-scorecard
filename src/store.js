import { ADD_PLAYER, SET_VIEW, SET_SELECTED_HOLE } from './mutations';
let pugId = 1;
const Store = {
  state: {
    viewMode: 'ALL18',
    selectedHole: 1,
    players: [
      {
          userInfo: {
              name: 'Me',
              imgUrl: null
          },
          scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      },{
          userInfo: {
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
    }
  }
};

export default Store;
