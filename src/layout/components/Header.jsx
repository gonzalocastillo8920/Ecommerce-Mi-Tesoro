
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import Box from '../../components/Box'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Container from './Container'
import Cart from '../../components/cart/Cart'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Box as='header' className="header__container">
                <Container className="d-flex justify-between align-center">
                    <Box className="d-flex">
                        <Button
                            aria-label="Abrir menú"
                            variant="solid"
                            color='primary'
                            className="header__button-burger-menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            text={<FontAwesomeIcon icon={faBars} size="lg" />}
                        ></Button>
                        <Text as='h1' className="d-flex justify-center align-center ml-2">
                            <Link to="/">
                                Juguetería Mi Tesoro
                                {<FontAwesomeIcon icon={faStar} size="xs" />}
                            </Link>
                        </Text>
                    </Box>
                    <Box className="header__content">
                        <Box className="header__navigation">
                            <Box as="ul">
                                <Box as="li" className="header__navigation-link"><Link to="/">Home</Link></Box>
                                <Box as="li" className="header__navigation-link"><Link to="/about-us">Sobre Nosotros</Link></Box>
                                <Box as="li" className="header__navigation-link"><Link to="/upload">Alta</Link></Box>
                                <Box as="li" className="header__navigation-link"><Link to="/contact">Contacto</Link></Box>
                            </Box>
                        </Box>
                        <Cart />
                    </Box>
                </Container>
            </Box>
            {
                menuOpen && (
                    <Box as="aside" className="header__menu">
                        <Box className="header__content">
                            <Box as="nav" className="header__navigation">
                                <Box as="ul">
                                    <Box as="li" className="header__navigation-link">
                                        <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                                    </Box>
                                    <Box as="li" className="header__navigation-link">
                                        <Link to="/about-us">Sobre Nosotros</Link>
                                    </Box>
                                    <Box as="li" className="header__navigation-link">
                                        <Link to="/upload">Alta</Link>
                                    </Box>
                                    <Box as="li" className="header__navigation-link">
                                        <Link to="/contact">Contacto</Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default Header