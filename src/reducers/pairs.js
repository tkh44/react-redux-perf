import * as c from '../constants.js'

var initialState = []

function pairs (state = initialState, action) {
  switch (action.type) {
    case c.FILL_PAIRS: {
      return action.pairs.concat()
    }
    case c.UPDATE_PAIR: {
      return state.map(pair => {
        return pair.id === action.id
          ? Object.assign({}, pair, { value: action.value })
          : pair
      })
    }
    default: {
      return state
    }
  }
}

export default pairs
