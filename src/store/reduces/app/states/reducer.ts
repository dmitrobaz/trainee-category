import { initState } from ".";
import { states as statesTypes } from "../../../types";



export const states = (state: any = initState, action: any) => {
    switch (action.type) {
        case statesTypes.TOGGLE_POPUP: {
            return { popup: !state.popup }
        }

        default: return state
    }
}

