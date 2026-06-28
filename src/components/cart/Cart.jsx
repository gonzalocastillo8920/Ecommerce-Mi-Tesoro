
import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"

import ProductCartContext from "../../context/ProductCartContext"

import Badge from "../Badge"
import Box from "../Box"
import Button from "../Button"
import CartItem from "./CartItem"
import Modal from "../Modal"
import Text from "../Text"

function Cart() {

    const [Open, setOpen] = useState(false)
    const { productsCartQuantity, productsCart } = useContext(ProductCartContext)
    const navigate = useNavigate()

    const totalAmount = productsCart.reduce((acc, { product, quantity }) => acc + (product.price * quantity), 0)

    return (
        <>
            <Box role="button" onClick={() => setOpen(true)}>
                <Badge value={productsCartQuantity}>
                    <FontAwesomeIcon icon={faShoppingCart} size="xl" />
                </Badge>
            </Box>
            <Modal isOpen={Open} handleClose={() => setOpen(false)}>
                <Text as="h2" className="cart__title">Tu carrito de productos</Text>
                {
                productsCartQuantity > 0 ? (
                    productsCart.map(({product, quantity}) => (
                        <CartItem key={product.id} quantity={quantity} {...product} />
                    ))
                ) : (
                    <Text as="p" className="cart__total">No hay productos en el carrito 🥲</Text>
                )}
                <Text as="h3" className="cart__total">Total del carrito: ${totalAmount.toFixed(2)}</Text>
                <Box className="cart__actions">
                    <Button className="" text="Finalizar Compra 😎" onClick={() => {
                        navigate("/checkout")
                        setOpen(false)
                    }} disabled={totalAmount == 0}/>
                </Box>
            </Modal>
        </>
    )
}

export default Cart