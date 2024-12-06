# ionic-quack
	•	Página principal: Muestra una imagen aleatoria de la API al hacer clic en un botón
	•	Lista de imágenes: Pantalla donde se listan imágenes simuladas con botones para visualizarlas
	•	Detalle de imagen: Muestra una imagen seleccionada, puede volver al paso anterior o avanzar a la pagina de la api
	•	Navegación: Menú integrado para moverse entre las diferentes pantallas.
	•	Ionic Framework Angular: Diseño responsivo y atractivo
	•	Principios SOLID: Arquitectura escalable y mantenible


# Arquitectura
    •   arquitectura modular y separacion de responsabilidades

src/
├── app/
│   ├── components/
│   │   ├── home/               # Página principal
│   │   │   ├── home.page.ts
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   ├── list/               # Página de lista de imágenes
│   │   │   ├── list.page.ts
│   │   │   ├── list.page.html
│   │   │   ├── list.page.scss
│   │   ├── image-detail/       # Página de detalle de imagen
│   │   │   ├── image-detail.page.ts
│   │   │   ├── image-detail.page.html
│   │   │   ├── image-detail.page.scss
│   ├── services/
│   │   ├── duck.service.ts     # Servicio para consumir la API
│   ├── global.scss             # Estilos globales (incluye Bootstrap)
│   ├── app-routing.module.ts   # Configuración de rutas
│   ├── app.module.ts           # Configuración principal de Angular/Ionic

# Requisitos Previos

    Antes de comenzar, debes de tener instalado lo siguiente:
	•	Node.js (versión 14 o superior): Descargar Node.js
	•	Ionic CLI: Instalar con npm install -g @ionic/cli
	•	Git: Para clonar el repositorio.

# clonar repositorio
    •   git clone https://github.com/morenou20/ionic-quack.git
    •   cd ionic-quack

# instalar dependencias en caso de ser necesario
    •   npm install axios
    •   npm install boostrap

# iniciar servidor de desarrollo
    1.   abrir terminal en la carpeta raiz.
    2.   ejecutar comando "cd. \ionic-quack"
    3.   iniciar servidor de desarrollo con el comando "ionic serve"
    4.   Abre tu navegador y accede a http://localhost:8100.
