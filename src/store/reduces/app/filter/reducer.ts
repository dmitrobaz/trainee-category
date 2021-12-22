import { initState } from ".";
import { filter as filterTypes } from "../../../types";



export const filter = (state: any = initState, action: any) => {
    switch (action.type) {
        case filterTypes.CATEGORY_SELECTED: {
            const currentState = state.category
            const filtered = currentState.filter((id: number) => id !== 0)

            return { category: [...filtered, action.payload] }
        }
        case filterTypes.CATEGORY_UNSELECTED: {
            const currentState = state.category
            const filtered = currentState.filter((id: number) => id !== action.payload || 0)

            return { category: [...filtered] }
        }
        case filterTypes.CATEGORY_ALL_SELECTED: {

            return { category: [0] }
        }

        default: return state
    }
}

