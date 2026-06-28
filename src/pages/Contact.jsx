import Form from "../components/form/Form";
import Text from "../components/Text";
import Grid from "../layout/components/Grid";
import Col from "../layout/components/Col";
import useForm from "../hooks/useForm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import {
  regexPatternsContact,
  validationsTextErrors,
} from "../validations/contact.js";

import { postContacts } from "../api/contact.js";
import { useState } from "react";
import Box from "../components/Box.jsx";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

function Contact() {
  const { values, handleChange, errors, resetForm } = useForm(
    initialValues,
    regexPatternsContact,
    validationsTextErrors,
  );

  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ok, msg } = await postContacts(values);
      setResult({
        success: ok,
        message: msg,
      });
      resetForm();
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
  };

  return (
    <>
      <Text as="h2">Contacto</Text>
      <Grid>
        <Col size={{ xs: 12, md: 8, lg: 6, xl: 6 }}>
          {result && (
            <Box className={`banner-${result.success ? "success" : "error"}`}>
              <Text as="span">{result.message}</Text>
            </Box>
          )}
          <Form
            inputList={[
              { id: "name", label: "Nombre", type: "text", required: true },
              {
                id: "email",
                label: "Correo electrónico",
                type: "email",
                required: true,
              },
              { id: "subject", label: "Asunto", type: "text", required: true },
              {
                id: "body",
                label: "Mensaje",
                type: "textarea",
                required: true,
              },
            ]}
            buttonLabel={
              <>
              enviar mensaje
              <FontAwesomeIcon icon={faPaperPlane} size="xs" />
              </>
            }
            onChange={handleChange}
            values={values}
            errors={errors}
            onSubmit={handleSubmit}
          />
        </Col>
      </Grid>
    </>
  );
}

export default Contact;
