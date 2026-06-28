
import Box from '../Box'
import Button from '../Button'
import Text from '../Text'

function Pagination({ handlePrevPage, handleNextPage, page, totalPages }) {
  
  return (
    <Box className="counter__product-container">
      <Button text="<<" onClick={() => handlePrevPage(1)} disabled={page === 1} variant='outline' color='secondary'/>
      <Button text="<" onClick={() => handlePrevPage(page - 1)} disabled={ page === 1} variant='outline' color='secondary'/>
      <Text as="span">{page}/{totalPages}</Text>
      <Button text=">" onClick={() => handleNextPage(page + 1)} disabled={page === totalPages} variant='outline' color='secondary'/>
      <Button text=">>" onClick={() => handleNextPage(totalPages)} disabled={page === totalPages} variant='outline' color='secondary'/>
    </Box>
  )
}

export default Pagination