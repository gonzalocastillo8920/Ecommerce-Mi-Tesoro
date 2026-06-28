
import { useContext, useEffect, useState } from "react"
import { Wallet } from "@mercadopago/sdk-react"
import { postPreferenceMP } from "../api/checkout"

import Text from "../components/Text"
import ProductCartContext from "../context/ProductCartContext"
import Box from "../components/Box"
import CartItem from "../components/cart/CartItem"

function Checkout() {
  const { productsCart } = useContext(ProductCartContext);
  const [preferenceId, setPreferenceId] = useState(null)

  useEffect(() => {
    const itemsList = productsCart.map(({ product, quantity }) => ({
      id: product.id,
      title: product.name,
      picture_url: product.image,
      quantity,
      unit_price: product.price
    }))
    postPreferenceMP({ items: itemsList })
      .then(({ preferenceId }) => setPreferenceId(preferenceId))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalAmount = productsCart.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  )

  return (
    <>
      <Text as="h2"> Completá tu compra!! 🤩</Text>
      <Box>
        {productsCart.map(({ product, quantity }) => (
          <CartItem key={product.id} quantity={quantity} {...product} />
        ))}
        <Text as="h3" className="cart__total__checkout">
          Total del carrito: ${totalAmount.toFixed(2)}
        </Text>
      </Box>      
        <Box className="cart__actions">
          {
            preferenceId &&
              <Wallet 
                initialization={{ preferenceId: preferenceId }}
                customization={{ texts: {valueProp: "smart_option"} }}
              />
          }
       </Box>
    </>
  )
}

export default Checkout;
