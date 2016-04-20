import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function home(state= {messages: [], whatIKnow: []}, action) {
  switch(action.type) {
    case "SEND_MESSAGE":
      return Object.assign({}, state, { messages: [action.item].concat(state.messages) })
    case "REPLY_MESSAGE":
      return Object.assign({}, state, { messages: [action.item].concat(state.messages) })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing,
  home
})

export default rootReducer
