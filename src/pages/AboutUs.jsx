
import Text from '../components/Text'
import Box from '../components/Box'
import Grid from '../layout/components/Grid'
import Col from '../layout/components/Col'

import img1 from "../assets/01.jpg"
import img2 from "../assets/02.jpg"
import img3 from "../assets/03.jpg"
import img4 from "../assets/04.jpg"
import img5 from "../assets/05.jpeg"

function AboutUs() {
    return (
        <>
                <Box className="container container__page-content">
                    <Text as='h2'>Sobre Nosotros:</Text>
                    <Grid>
                        <Col size={{ xs: 12, md: 6, lg: 6, xl: 6, sm: 12 }}>
                            <Box className="container__us">
                                <Box className="slider">
                                    <Box className="slides">
                                        <img src={img1} className="container__us-img" alt="Juguetería Mi Tesoro"/>
                                        <img src={img2} className="container__us-img" alt="Juguetería Mi Tesoro"/>
                                        <img src={img3} className="container__us-img" alt="Juguetería Mi Tesoro"/>
                                        <img src={img4} className="container__us-img" alt="Juguetería Mi Tesoro"/>
                                        <img src={img5} className="container__us-img" alt="Juguetería Mi Tesoro"/>
                                    </Box>
                                </Box>
                            </Box>
                        </Col>
                        <Col size={{ xs: 12, md: 6, lg: 6, xl: 6, sm: 12 }}>
                        <Box className="container__us">
                            <Box className="container__us-text">
                                <Text as="p">
                                    En <strong>Juguetería Mi Tesoro</strong>, nos apasiona brindar alegría y diversión a niños y niñas a través de nuestros juguetes de alta calidad. <b>Fundada en 1995</b>, nuestra tienda se ha convertido en una tienda confiable para padres y niños que buscan productos seguros, educativos y entretenidos.<br/><br/>
                                </Text>
                                <Text as="p">
                                    <i>Nuestro compromiso es ofrecer una amplia variedad de juguetes que fomenten la creatividad, el aprendizaje y el juego saludable</i>. Con un equipo dedicado y una atención al cliente excepcional, nos esforzamos por ser la elección número uno para las familias que buscan momentos inolvidables de juego y diversión.<br/><br/>
                                </Text>
                                <Text as="p">
                                    <b>En Juguetería Mi Tesoro, creemos que el juego es fundamental para el desarrollode los niños. Por eso, nos esforzamos por ofrecer una amplia gama de juguetes que no solo entretengan, sino que también estimulen la imaginación y el aprendizaje.</b>
                                </Text>
                            </Box>
                        </Box>
                        </Col>
                    </Grid>
                </Box>
        </>
    )
}

export default AboutUs