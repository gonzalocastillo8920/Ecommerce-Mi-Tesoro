import { useState } from "react"

const formatInitialErrorValues = (initialValues) => {
    const valuesKeys = Object.keys(initialValues)
    const errorValues = valuesKeys.reduce((acc, key) => {
        acc[key] = ""
        return acc
    }, {})
    return errorValues
}

export default function useForm(initialValues, regexAndValidationsPatterns, errorMessages) {

    const [values, setValues] = useState(initialValues)
    
    const [errors, setErrors] = useState(formatInitialErrorValues(initialValues))

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target
        setValues(
            {...values, 
                [name]: type === "checkbox" ? 
                    checked : type === "file"? files[0] : value

            })

        if (typeof value === "string") {
            const regex = new RegExp(regexAndValidationsPatterns[name])

            if (!regex.test(value)) {
                setErrors({...errors, [name]: errorMessages[name]})
            } else {
                setErrors({...errors, [name]: ""})
            }
        }
        if (typeof value === "number") {
            if (regexAndValidationsPatterns[name] && value > regexAndValidationsPatterns[name]) {
                setErrors({...errors, [name]: errorMessages[name]})
            } else {
                setErrors({...errors, [name]: ""})
            }
        }
    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors(formatInitialErrorValues(initialValues))
    }

    return {
        values,
        errors,
        handleChange,
        resetForm
    }
}
