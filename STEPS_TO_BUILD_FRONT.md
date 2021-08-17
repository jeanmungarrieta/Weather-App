# Front-end build steps

## First Layout Phase

1. Análisis del diseño UX/UI
2. Generar la división de componentes de mi página.
3. Crear los componentes vacios en React y consumirlos de padres a hijos
4. Realizar la maquetación con los textos e imagenes del diseño a fuego (top-down o bottom-up).
5. Validar lo que es variable dentro de los componentes, cambiandolo por `props` y actualizar los componentes padre

## Retrieving the data

1. Analizar el API
    - Obtener la URL(s) del API que hay que llamar
    - Entender los parámetros de entrada o body (POST o PUT o PATCH) que hay que pasarle al API
    - identificar y listar exactamente que parámetros de respuesta tengo que usar en mi UI.

2. Crear mi carpeta donde voy a meter las llamadas a mi API
3. Construir funciones para cada una de las llamadas a mi API (las que hacen los fetch).
4. Utilizar useState y useEffect en el componente padre (el padre de todos). hint: Suele ser interesante crear un custom hook.
5. Con los datos GET consumidos, le pasamos la información a los componetes por props.
    ** En este punto tengamos que hacer ajustes en los props de los componentes.

## Actualizando el Dato

1. El usuario reacciona a nuestra web rellenando formularios o añadiendo un producto a la cesta de la compra, etc.
2. Esto crea una actualización y por tanto una llamada a un API (POST, PUT o PATCH).
3. Tras la actualización correcta, se redirecciona a otra página del sitio.
