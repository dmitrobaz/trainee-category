import { initState } from ".";
import { states as statesTypes } from "../../../types";


export const states = (state: any = initState, action: any) => {
    switch (action.type) {
        case statesTypes.TOGGLE_POPUP: {
            return {
                isPopupOpen: !state.isPopupOpen,
                isEditCategory: state.isEditCategory,
                isAddNewCategory: state.isAddNewCategory,
                isRenameCategory: state.isRenameCategory,
                isSaveCategory: state.isSaveCategory
            }
        }
        case statesTypes.TOGGLE_EDIT_CATEGORY: {
            return {
                isPopupOpen: state.isPopupOpen,
                isEditCategory: !state.isEditCategory,
                isAddNewCategory: state.isAddNewCategory,
                isRenameCategory: state.isRenameCategory,
                isSaveCategory: state.isSaveCategory
            }
        }
        case statesTypes.TOGGLE_ADD_CATEGORY: {
            return {
                isPopupOpen: state.isPopupOpen,
                isEditCategory: state.isEditCategory,
                isAddNewCategory: !state.isAddNewCategory,
                isRenameCategory: state.isRenameCategory,
                isSaveCategory: state.isSaveCategory
            }
        }
        case statesTypes.TOGGLE_RENAME_CATEGORY: {
            return {
                isPopupOpen: state.isPopupOpen,
                isEditCategory: state.isEditCategory,
                isAddNewCategory: state.isAddNewCategory,
                isRenameCategory: !state.isRenameCategory,
                isSaveCategory: state.isSaveCategory
            }
        }
        case statesTypes.TOGGLE_SAVE_CATEGORY: {
            return {
                isPopupOpen: state.isPopupOpen,
                isEditCategory: state.isEditCategory,
                isAddNewCategory: state.isAddNewCategory,
                isRenameCategory: state.isRenameCategory,
                isSaveCategory: action.payload
            }
        }

        default: return state
    }
}

