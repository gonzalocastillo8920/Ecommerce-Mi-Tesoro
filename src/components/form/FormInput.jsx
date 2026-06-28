
import Box from "../Box"
import Text from "../Text"
import cx from "classnames"

function FormInput({ id, label, type = "text", error, onChange, value, required = false }) {
  return (
    <Box className={cx("form__input-group",
      { form__checkbox: type === "checkbox" })}>
      <Text as="label" htmlFor={id}>{`${label}${required ? " *" : ""}`}</Text>
      {
        type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            type={type}
            className={
              cx(
                "form__input",
                "textarea",
                { "input-error": error }
              )}
            onChange={onChange}
            value={value}
            required={required}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            className={
              cx(
                "form__input",
                { "input-error": error }
              )}
            onChange={onChange}
            value={value}
            required={required}
          />
        )
      }
      {
        error &&
        <Box className="form-error-container">
          <Text as="span" className="form__input-helper form-error-container">
            {error}
          </Text>
        </Box>
      }
    </Box>
  )
}

export default FormInput