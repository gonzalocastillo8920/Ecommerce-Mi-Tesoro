
import { useState } from 'react'
import { uploadTextErrors, regexPatternsUpload } from "../validations/upload.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { postProducts } from '../api/products.js'

import Text from '../components/Text'
import Form from '../components/form/Form'
import Grid from '../layout/components/Grid'
import Col from '../layout/components/Col'
import Box from '../components/Box.jsx'

import useForm from '../hooks/useForm'

const initialValues = {
  name: "",
  brand: "",
  category: "",
  price: "",
  stock: "",
  shortDescription: "",
  longDescription: "",
  freeDelivery: false,
  ageFrom: "",
  ageTo: "",
  image: ""
}

function Upload() {

  const { values, handleChange, errors, resetForm } = useForm(
    initialValues,
    regexPatternsUpload,
    uploadTextErrors
  )

  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { ok, msg } = await postProducts(values)
      setResult({
        success: ok,
        message: msg,
      });
      resetForm()
      setTimeout(() => {
        setResult(null);
      }, 5000);
    } catch (error) {
      setResult({
        success: false,
        message: error.message,
      });
      setTimeout(() => {
        setResult(null);
      }, 5000);
    }
  }

  return (
    <>
      <Text as="h2"> Cargar Productos</Text>
      <Grid>
        <Col size={{ xs: 12, md: 8, lg: 6, xl: 6 }}>
          {result && (
            <Box className={`banner-${result.success ? "success" : "error"}`}>
              <Text as="span">{result.message}</Text>
            </Box>
          )}
          <Form
            inputList={[
              { id: "name", label: "Nombre del producto", type: "text", required: true },
              { id: "brand", label: "Marca", type: "text", required: true },
              { id: "category", label: "Categoría", type: "text", required: true },
              { id: "price", label: "Precio", type: "number", required: true },
              { id: "stock", label: "Stock", type: "number", required: true },
              { id: "shortDescription", label: "Descripción corta", type: "textarea", required: true },
              { id: "longDescription", label: "Descripción larga", type: "textarea" },
              { id: "freeDerivery", label: "Envío gratis", type: "checkbox" },
              { id: "ageFrom", label: "Edad desde", type: "number" },
              { id: "ageTo", label: "Edad hasta", type: "number" },
              { id: "image", label: "Imagen del producto", type: "file" }
            ]}
            buttonLabel={
              <>
              guardar producto
              <FontAwesomeIcon icon={faSave} size="s" />
              </>
            }
            onSubmit={handleSubmit}
            onChange={handleChange}
            values={values}
            errors={errors}
          />
        </Col>
      </Grid>
    </>
  )
}

export default Upload