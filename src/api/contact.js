
import api from "."

export const postContacts = async (body) => {
    const response = await api.post("/message", body)
    return response.data
}