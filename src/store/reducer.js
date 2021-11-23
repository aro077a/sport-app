import {combineReducers} from 'redux';
import addPlayerReducer from './addplayer/reducer'

export default combineReducers({
    addPlayer:addPlayerReducer
})