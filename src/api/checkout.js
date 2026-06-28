
import api from "."

export const postPreferenceMP = async (body) => {
    const response = await api.post("/checkout", body)
    return response.data
}