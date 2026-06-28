
export const regexPatternsContact = {
    name: /^[a-zA-ZáéíóúñÁÉÍÓÚÑ'\-\s]{2,100}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    subject: /^[\w\s.,!¡¿?\""'\-]{3,150}$/,
    message: /^[\s\S]{10,2000}$/
};

export const validationsTextErrors = {
    name: "El nombre no tiene un formato válido.",
    email: "El email no tiene un formato válido.",
    subject: "El asunto no tiene un formato válido.",
    message: "El mensaje debe tener entre 10 y 2000 caracteres.",
}