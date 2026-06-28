
import Box from './Box'
import Text from './Text'

function Badge({children, value}) {
  return (
    <Box className="badge__container">
        {children}
        <Box className="badge__content">
            <Text as="span">{value}</Text>
        </Box>
    </Box>
  )
}

export default Badge