import { ADD_PLAYER } from "./action";

const addPlayer={
    players:[]
}


const addPlayerReducer=(state=addPlayer, action)=>{
    switch (action.type) {
        case ADD_PLAYER:
            return {...state, players: [...state.players, action.payload]}
        default:
            return state
    }
}

export default addPlayerReducer;