
import { useContext, useMemo } from 'react'
import Box from '../Box'
import Button from '../Button'
import Text from '../Text'
import ProductCartContext from '../../context/ProductCartContext'

function CounterProducts({ product }) {

  const { productsCart, removeProductFromCart, addProductToCart } = useContext(ProductCartContext)

  const quantity = useMemo(() => productsCart.find(pc => pc.product.id === product.id)?.quantity ?? 0,
    [productsCart, product.id]
  )
  return (
    <Box className="counter__product-container">
      <Button text="-" onClick={() => removeProductFromCart(product)} disabled={quantity <= 0} />
      <Text as="span">{quantity}</Text>
      <Button text="+" onClick={() => addProductToCart(product)} disabled={quantity === product.stock}/>
    </Box>
  )
}

export default CounterProducts