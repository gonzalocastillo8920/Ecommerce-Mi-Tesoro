import ProductCard from "./ProductCard"
import Grid from "../../layout/components/Grid"

import { use } from "react"
import Box from "../Box"
import Pagination from "./Pagination"

function ProductList({ getProductsPromise, setPageNumber }) {
  const { products, totalPages, pageNumber } = use(getProductsPromise)

  return (
    <>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </Grid>
      <Box className="w-100 d-flex justify-center mt-4">
        <Pagination 
            handlePrevPage={setPageNumber}
            handleNextPage={setPageNumber}
            page={pageNumber}
            totalPages={totalPages}
        />
      </Box>
    </>
  );
}

export default ProductList;
