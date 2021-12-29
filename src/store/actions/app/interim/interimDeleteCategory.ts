import { interim } from "../../../types"


export const interimDeleteCategory = (payload: number[] = []) => ({
    type: interim.INTERIM_DELETE_CATEGORY,
    payload
})
