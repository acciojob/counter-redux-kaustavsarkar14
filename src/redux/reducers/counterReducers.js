import { DECREMENT, INCREMENT, RESET } from "../actions/actionsType"

export const counterReducers = (state = 0, action) => {
    if (action.type == INCREMENT) {
        return state + 1
    }
    else if (action.type == DECREMENT) {
        return state - 1
    }
    else if (action.type == RESET) {
        return 0
    }
    else return 0
}