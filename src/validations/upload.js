
export const regexPatternsUpload = {
    name: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s\-\.]{3,50}$/,
    brand: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s&]{2,30}$/,
    category: /^[\s\S]{3,20}$/,
    shortDescription: /^[\s\S]{10,150}$/,
    largeDescription: /^[\s\S]{20,2000}$/
};

export const maxValuesUpload = {
    price: undefined,
    stock: 9999,
    ageFrom: 99,
    ageTo: 99,
};

export const uploadTextErrors = {
    name: "El nombre no tiene un formato válido.",
    price: "El precio debe ser mayor a cero.",
    stock: "El stock debe ser mayor a cero y menor a 9999.",
    brand: "La marca no tiene un formato válido.",
    category: "La categoría no tiene un formato válido.",
    shortDescription: "La descripción corta debe tener entre 10 y 150 caracteres.",
    longDescription: "La descripción larga debe tener entre 20 y 2000 caracteres.",
    ageFrom: "La edad desde debe ser mayor a cero y menor a 99.",
    ageTo: "La edad hasta debe ser mayor a cero y menor a 99",

};