
import Col from "../../layout/components/Col"
import Box from "../Box"
import Text from "../Text"
import CounterProducts from "./CounterProducts"

function ProductCard({
    _id: id,
    name,
    image,
    shortDescription,
    price,
    brand,
    stock
}) {
    return (
        <Col size={{
            xs: 12,
            md: 6,
            lg: 4,
            xl: 3
        }}>
            <Box className="card__product-container">
                <Box className="justify-items-center">
                    <Text><small>{brand}</small></Text>
                </Box>
                <Box className="card__product-content">
                    <img src={image} alt={name} className="card__product-image" />
                    <Text as="h3">{name}</Text>
                    <Text as="span" className="card__product-amount">${price}.00</Text>
                    <Text className="card__product-description"><small>{shortDescription}</small></Text>
                    <Text className="card__product-description"><small>{stock} en stock</small></Text>
                    <Box className="card__product-button">
                        <CounterProducts
                            product= {{
                                id,
                                name,
                                image,
                                price,
                                stock,
                                brand
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Col>

    )
}

export default ProductCard