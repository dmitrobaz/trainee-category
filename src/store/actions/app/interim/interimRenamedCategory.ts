import { interim } from "../../../types"


export const interimRenamedCategory = (payload: { id: number, name: string }) => ({
    type: interim.INTERIM_RENAMED_CATEGORY,
    payload
})
