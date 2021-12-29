import { initState } from ".";
import { interim as interimTypes } from "../../../types";


export const interim = (state: any = initState, action: any) => {
    switch (action.type) {
        case interimTypes.INTERIM_NEW_CATEGORY: {
            return {
                ...state, newItems: [...state.newItems, action.payload]
            }
        }
        case interimTypes.INTERIM_DELETE_CATEGORY: {
            return {
                ...state, deleteItems: [...state.deleteItems, action.payload]
            }
        }
        default: return state
    }
}
