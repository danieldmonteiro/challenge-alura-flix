//const baseURL = "https://aluraflix-api-theta.vercel.app/data-carrusel";

const baseURL = "https://my-json-server.typicode.com/danieldmonteiro/fake-api-alura-flix/data-carrusel";

export const listDataCarrusel = async () => {
  // const [dataCarrusel, setDataCarrusel] = useState([]);
  // useEffect(() => {
  //   fetch(baseURL)
  //     .then((respuesta) => respuesta.json())
  //     .then((data) => {
  //       setDataCarrusel(data);
  //       //console.log(data); // Puedes acceder a los datos aquí
  //     });
  // }, []);
  // return { dataCarrusel };
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export const createNuevoVideo = async (category) => {
  try {
    const response = await fetch(`${baseURL}/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createNuevaCategoria = async (datosAEnviar) => {
  try {
    const response = await fetch(`${baseURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosAEnviar),
    });
    const data = await response.json();
    return data; // Esto devuelve la categoría recién creada con su id
  } catch (err) {
    console.error(err);
  }
};
