
import api from "./"

export const getProducts = async (page) => {
    const response = await api.get(`/products?limit=12&pageNumber=${page}`)
    return response.data
}

export const postProducts = async (product) => {

    const formDataProducts = new FormData()

    Object.entries(product).forEach(([key, value]) => {
        formDataProducts.append(key, value)
    })

    const response = await api.post("/products", formDataProducts, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })  
    return response.data
}