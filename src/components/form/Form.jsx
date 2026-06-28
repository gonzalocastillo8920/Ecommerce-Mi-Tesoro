
import Button from "../Button"
import FormInput from "./FormInput"

function Form({
    onSubmit,
    inputList = [],
    onChange,
    values = {},
    errors = {},
    buttonLabel,
}) {

    const isValidForm = 
        Object.values(errors).every(error => !error) && 
        Object.entries(values).every(([key, value]) => value || !inputList.find(input => input.id === key)?.required)

    return (
        <form onSubmit={onSubmit} className="form__container" noValidate>
            {
                inputList.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        onChange={onChange}
                        value={input.type === "file" ? values[input.id].filename : (values[input.id] || "")}
                        error={errors[input.id]}
                    />
                ))
            }
            <Button
                type="submit"
                text={buttonLabel}
                color="secondary"
                disabled={!isValidForm}
            />
        </form>
    )
}

export default Form