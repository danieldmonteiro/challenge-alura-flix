export const CampoTitulo = [
  { required: true, message: "Por favor, escreva um título" },
  { min: 5, message: "O título deve ter mais de 5 caracteres" },
  {
    max: 50,
    message: "O título não deve ter mais de 50 caracteres",
  },
];

export const CampoUrlVideo = [
  { required: true, message: "Por favor, escreva uma url de vídeo" },
  { type: "url", message: "URL não válida" },
];

export const CampoUrlImagen = [
  { required: true, message: "Por favor, escreva uma url de imagen" },
{ type: "url", message: "URL não válida" },
];

export const CampoCategoria = [
  { required: true, message: "Por favor, escreva uma categoría" },
];

export const CampoAreaTexto = [
  { required: true, message: "Por favor, escreva uma descrição" },
  {
    max: 100,
    message: "A descrição não deve ter mais de 100 caracteres",
  },
];

export const CampoSeguridad = [
  {
    required: false,
    message: "Por favor, escreva um código de segurança",
  },
];

/* NOVA CATEGORIA*/
export const CampoFormacion = [
  {
    required: true,
    message: "Por favor, escreva uma formação",
  },
];
export const CampoDescripcion = [
  {
    required: true,
    message: "Por favor, escreva uma descrição",
  },
];
export const CampoColor = [
  {
    required: true,
    message: "Por favor, escolha uma cor",
  },
];
