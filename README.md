# Descripción de la página web - Pronóstico del Tiempo

La página web es una interfaz de pronóstico del tiempo que muestra información meteorológica para una ubicación específica. Al cargar la página, se obtienen los datos del pronóstico del tiempo utilizando la API de OpenWeatherMap. 

## Estructura de la página

La página consta de dos secciones principales: la barra lateral (*SideBar*) y el contenido principal. 

### Barra lateral

La barra lateral contiene elementos interactivos para buscar y seleccionar la ubicación. Incluye los siguientes componentes:

- **Campo de búsqueda de país y ciudad**: Permite al usuario ingresar el país y la ciudad para obtener el pronóstico del tiempo correspondiente a esa ubicación.
- **Botón de ubicación actual**: Al hacer clic en este botón, se obtiene la ubicación actual del usuario y se muestra el pronóstico del tiempo para esa ubicación.

### Contenido principal

El contenido principal muestra el pronóstico del tiempo para los próximos días. Incluye los siguientes elementos:

- **Tarjetas de pronóstico del tiempo (*Card*)**: Representan cada día del pronóstico y muestran información como la fecha, el icono del clima, la temperatura máxima y mínima, y una descripción del clima.
- **Aspectos destacados (*BCards*)**: Esta sección muestra información adicional sobre el pronóstico actual, como la visibilidad y la humedad.

## Funcionalidades principales

La página web ofrece las siguientes funcionalidades principales:

1. **Búsqueda de ubicación**: El usuario puede ingresar el país y la ciudad en el campo de búsqueda de la barra lateral para obtener el pronóstico del tiempo correspondiente a esa ubicación.
2. **Ubicación actual**: Al hacer clic en el botón de ubicación actual de la barra lateral, se obtiene la ubicación actual del usuario y se muestra el pronóstico del tiempo para esa ubicación.
3. **Cambio de unidad de medida**: Se proporciona la opción de cambiar la unidad de medida entre Celsius y Fahrenheit. Al hacer clic en los botones correspondientes, se actualiza el pronóstico del tiempo con la unidad de medida seleccionada.

## Créditos

La página fue creada por Benjamin Tavarez para Funbal  - devChallenges.io.


