
import { ProductCartContext } from "./ProductCartContext"
import { useState } from "react"

function ProductCartProvider({ children }) {

    const [productsCart, setProductsCart] = useState([])

    const addProductToCart = (product) => {
        const findProduct = productsCart.find(productCart => productCart.product.id === product.id)
        if (!findProduct) {
            setProductsCart([...productsCart, { product, quantity: 1 }])
        } else {
            setProductsCart(
                productsCart.map((productCart) => productCart.product.id === product.id ?
                    { product, quantity: productCart.quantity + 1 }
                    : productCart
                )
            )
        }
    }
    const removeProductFromCart = (product) => {
        const findProduct = productsCart.find(productCart => productCart.product.id === product.id)
        const findProductQuantity = findProduct?.quantity || 0
        if (findProductQuantity === 1) {
            setProductsCart(
                productsCart.filter((productCart) => productCart.product.id !== product.id)
            )
        } else {
            setProductsCart(
                productsCart.map((productCart) => productCart.product.id === product.id ?
                    { product, quantity: productCart.quantity - 1 }
                    : productCart
                )
            )
        }
    }

    return (
        <ProductCartContext.Provider
            value={{
                productsCart: productsCart,
                productsCartQuantity: productsCart.length,
                addProductToCart,
                removeProductFromCart
            }}
        >{children}</ProductCartContext.Provider>
    )
}

export default ProductCartProvider