import { initState } from ".";
import { categoryConfig } from "../../../../config";
import { config as configTypes } from "../../../types";


export const config = (state: any = initState, action: any) => {
    switch (action.type) {
        case configTypes.SET_DEFAULT_CATEGORIES: {

            return { category: categoryConfig }
        }
        case configTypes.ADD_NEW_CATEGORY: {
            const newCategory = { id: state.category.length + 1, name: action.payload }
            return { category: [...state.category, newCategory] }
        }
        case configTypes.REMOVE_CATEGORY: {
            const filteredCategory = state.category.filter((item: any) => item.id !== action.payload)
            return { category: [...filteredCategory] }
        }
        default: return state
    }
}

