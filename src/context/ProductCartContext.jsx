import { createContext} from "react"

export const ProductCartContext = createContext({
    productsCart: [],
    productsCartQuantity: 0,
    addProductToCart: () => {},
    removeProductFromCart: () => {}

})

export default ProductCartContext