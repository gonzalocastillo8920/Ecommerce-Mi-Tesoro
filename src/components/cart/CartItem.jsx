
import Box from '../Box'
import Grid from '../../layout/components/Grid'
import Col from '../../layout/components/Col'
import Text from '../Text'

function CartItem({
    name,
    image,
    price,
    quantity
}) {
    return (
        <Box className="cartItem__container">
            <Grid className="cartItem__grid">
                <Col size={{ xs: 6, md: 2 }}>
                    <img src={image} alt={name} className="cartItem__image card__product-image"/>
                </Col>
                <Col size={{ xs: 12, md: 4 }} className="d-flex align-center">
                    <Text as="h3">{name}</Text>
                </Col>
                <Col size={{ xs: 6, md: 3 }} className="d-flex align-center">
                    <Text as="span">Unidades: {quantity}</Text>
                </Col>
                <Col size={{ xs: 6, md: 3 }} className="d-flex align-center">
                    <Text as="span" className="cartItem__price">Total/producto: ${(price * quantity).toFixed(2)}</Text>
                </Col>
            </Grid>
        </Box>
    )
}

export default CartItem