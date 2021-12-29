import { interim } from "../../../types"


export const interimNewCategory = (payload: { id: number, name: string }) => ({
    type: interim.INTERIM_NEW_CATEGORY,
    payload
})
