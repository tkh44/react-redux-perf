import {createStore} from 'smitty'
import chance from './chance.js'

var initialState = []
var count = 330
var store = createStore(initialState)
const FILL_PAIRS = 'fill-pairs'
const UPDATE_PAIR = 'update-pair'

function getRandIndex () {
  return Math.floor(Math.random() * (store.state.length - 1))
}

store.createActions({
  fillPairs: () => {
    let pairs = []
    for (let i = 0; i < count; i++) {
      var pair = chance.currency_pair()
      pairs.push({
        id: i,
        value: Math.random(),
        name: pair[0].code + pair[1].code
      })
    }
    return store => {
      store.emit(FILL_PAIRS, pairs)
    }
  },
  updatePair: () => {
    return store => {
      store.emit(UPDATE_PAIR, {
        id: getRandIndex(),
        value: Math.random()
      })
    }
  },
  simulate: () => {
    return store => {
      let update = () => store.emit(store.actions.updatePair)
      setInterval(update, 13)

      setInterval(update, 21)

      setInterval(update, 34)

      setInterval(update, 55)
    }
  }
})

store.handleActions({
  [FILL_PAIRS]: (state, pairs) => {
    return pairs.concat()
  },
  [UPDATE_PAIR]: (state, {id, value}) => {
    return state.map(pair => {
      return pair.id === id ? Object.assign({}, pair, {value}) : pair
    })
  }
})

export default store
