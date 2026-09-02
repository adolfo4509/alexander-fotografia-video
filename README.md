# Alexander Fotografía y Video

Aplicación web para gestionar sesiones fotográficas, consultar el catálogo de servicios y administrar galerías de imágenes.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Tailwind CSS

## Requisitos

- Node.js
- npm
- Un proyecto configurado en Firebase

## Instalación

Instala las dependencias del proyecto:


npm install

## configura las variables de Firebase en un archivo .env.local en la raíz del proyecto:

- NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
- NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id

Los nombres de las variables deben coincidir con los utilizados en src/lib/firebase.ts.

No compartas las credenciales privadas ni subas archivos .env.local al repositorio.

# Ejecución
Inicia el servidor de desarrollo:

npm run dev

Después, abre http://localhost:3000 en el navegador.

# Comandos disponibles

npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la compilación de producción
npm run start    # Inicia la aplicación compilada
npm run lint     # Ejecuta ESLint

# Arquitectura del proyecto
El proyecto utiliza una arquitectura organizada por responsabilidades:

src/
├── app/                    # Páginas y rutas de Next.js
│   ├── catalog/            # Catálogo de servicios
│   ├── gallery/            # Galerías de imágenes
│   ├── login/              # Inicio de sesión
│   └── sessions/           # Gestión de sesiones fotográficas
├── components/             # Componentes reutilizables
├── hooks/                  # Hooks personalizados de React
├── lib/                    # Configuración de Firebase
└── services/               # Servicios de autenticación y persistencia
    └── storage/            # Operaciones relacionadas con Firebase Storage

 # Responsabilidades principales
src/app: contiene las páginas y rutas de la aplicación.
src/components: contiene componentes reutilizables de la interfaz.
src/hooks: contiene lógica reutilizable basada en hooks de React.
src/lib/firebase.ts: inicializa y exporta los servicios de Firebase.
src/services: encapsula las operaciones de autenticación, sesiones, catálogo, galerías e imágenes.
Integración con Firebase
La aplicación utiliza diferentes servicios de Firebase:

Firebase Authentication
Gestiona el inicio y cierre de sesión de los usuarios. El estado de autenticación se observa desde los componentes correspondientes.

Cloud Firestore

Almacena las fotografías asociadas a cada sesión. Las imágenes pueden incluir metadatos como:

Identificador de la sesión
Nombre original del archivo
Tipo de archivo
Fecha de carga
Rutas principales
/ - Página principal.
/login - Inicio de sesión.
/sessions - Consulta y gestión de sesiones fotográficas.
/catalog - Catálogo de servicios.
/catalog/[id] - Detalle de un servicio.
/gallery - Consulta de galerías.
/gallery/[sessionId] - Imágenes asociadas a una sesión específica.

# Servicios principales
Los servicios de la aplicación se encuentran en src/services:

auth.ts - Inicio y cierre de sesión.
sessions.ts - Creación y consulta de sesiones fotográficas.
catalog.ts - Consulta del catálogo de servicios.
gallery.ts - Consulta de galerías.
photos.ts - Carga de fotografías y sus metadatos.
storage/getAllImages.ts - Consulta de imágenes almacenadas en Firebase Storage.

# Flujo general de información
El usuario inicia sesión mediante Firebase Authentication.
El usuario consulta o registra una sesión fotográfica.
La información de la sesión se almacena en Cloud Firestore.
Las fotografías se cargan en Firebase Storage.
Los metadatos de cada fotografía se guardan junto con el archivo.
La galería consulta las imágenes asociadas al identificador de la sesión.

# Validación del proyecto
Ejecuta ESLint:
npm run lint

# Genera la compilación de producción:
npm run build

Si la compilación finaliza correctamente, inicia la aplicación en modo producción:

npm run start

# Despliegue
La aplicación puede desplegarse en Vercel u otra plataforma compatible con Next.js.

Durante el despliegue, configura las mismas variables de entorno de Firebase utilizadas en .env.local.

También debes verificar que las reglas de:

Firebase Authentication
Cloud Firestore
Firebase Storage
