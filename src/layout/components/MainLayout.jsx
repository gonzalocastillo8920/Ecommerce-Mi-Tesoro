
import Box from "../../components/Box";
import Container from "./Container";

function MainLayout({ children, }) {
    return (
        <Box as="main" className="layout__container">
            <Container className="container__page-content">
                {children}
            </Container>
        </Box>
    )
}

export default MainLayout