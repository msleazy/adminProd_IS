# 🛍️ Administrador de Productos Full Stack (PERN Stack)
API REST robusta y escalable para la gestión de productos utilizando Node.js, TypeScript y PostgreSQL. El objetivo principal es proporcionar un backend confiable que permita operaciones CRUD (Create, Read, Update, Delete) sobre productos, con arquitectura moderna y buenas prácticas de desarrollo.
Un sistema completo de gestión de productos desarrollado con PostgreSQL, Express, React y Node.js, implementando una arquitectura REST API robusta con validaciones, documentación y testing.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Documentación API](#documentación-api)
- [Testing](#testing)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)

## ✨ Características

### 🔧 Funcionalidades Core
- **CRUD Completo**: Crear, leer, actualizar y eliminar productos
- **Validación de Datos**: Validaciones robustas con `express-validator`
- **ORM con Sequelize**: Mapeo objeto-relacional con TypeScript
- **Base de Datos PostgreSQL**: Almacenamiento confiable en la nube (Render)
- **Variables de Entorno**: Configuración segura con `dotenv`

### 🚀 Funcionalidades Avanzadas
- **Middleware Personalizado**: Manejo centralizado de errores y validaciones
- **Documentación Swagger UI**: API documentada e interactiva
- **Testing Automatizado**: Suite de pruebas con Jest y SuperTest
- **Thunder Client**: Integración para testing de APIs en VS Code
- **TypeScript**: Tipado estático para mayor robustez

### 🎯 Operaciones CRUD Implementadas

#### ✅ **CREATE** - Crear Producto
- Endpoint: `POST /api/products`
- Validaciones: Nombre requerido, precio numérico > 0
- Disponibilidad por defecto: `true`

#### 📖 **READ** - Leer Productos
- `GET /api/products` - Obtener todos los productos (ordenados por ID)
- `GET /api/products/:id` - Obtener producto específico por ID
- Validación de ID como entero

#### 🔄 **UPDATE** - Actualizar Producto
- `PUT /api/products/:id` - Actualización completa del producto
- `PATCH /api/products/:id` - Alternar disponibilidad únicamente
- Validaciones de ID y campos requeridos

#### ❌ **DELETE** - Eliminar Producto
- `DELETE /api/products/:id` - Eliminación permanente
- Validación de ID existente

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **TypeScript** - Tipado estático
- **Sequelize** - ORM con soporte TypeScript
- **PostgreSQL** - Base de datos relacional
- **express-validator** - Validación de datos
- **dotenv** - Variables de entorno
- **colors** - Mensajes coloridos en consola

### Documentación y Testing
- **Swagger UI Express** - Documentación API interactiva
- **Jest** - Framework de testing
- **SuperTest** - Testing de APIs HTTP
- **Thunder Client** - Cliente API para VS Code

### Infraestructura
- **Render** - Hosting de base de datos PostgreSQL
- **TablePlus/DBeaver** - Clientes de base de datos

## 🚀 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- PostgreSQL (local o en la nube)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/administrador-productos.git
cd administrador-productos
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Instalar dependencias de desarrollo**
```bash
npm install -D typescript ts-node nodemon jest supertest @types/jest @types/supertest
npm install -D @types/express @types/node
```

4. **Configurar TypeScript**
```bash
npx tsc --init
```

## ⚙️ Configuración

### 1. Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:

```env
DATABASE_URL=postgresql://usuario:password@host:puerto/database?ssl=true
PORT=4000
NODE_ENV=development
```

### 2. Configuración TypeScript (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### 3. Scripts en `package.json`
```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## 🎮 Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

### Testing
```bash
npm test
npm run test:watch
```

## 📊 API Endpoints

| Método | Endpoint | Descripción | Validaciones |
|--------|----------|-------------|--------------|
| `GET` | `/api/products` | Obtener todos los productos | - |
| `GET` | `/api/products/:id` | Obtener producto por ID | ID debe ser entero |
| `POST` | `/api/products` | Crear nuevo producto | Nombre requerido, precio > 0 |
| `PUT` | `/api/products/:id` | Actualizar producto completo | ID entero, nombre y precio válidos |
| `PATCH` | `/api/products/:id` | Alternar disponibilidad | ID debe ser entero |
| `DELETE` | `/api/products/:id` | Eliminar producto | ID debe ser entero |

### Ejemplo de Uso

#### Crear Producto
```bash
POST /api/products
Content-Type: application/json

{
  "name": "Laptop Gaming",
  "price": 1500.99
}
```

#### Respuesta
```json
{
  "data": {
    "id": 1,
    "name": "Laptop Gaming",
    "price": 1500.99,
    "availability": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

## 📚 Documentación API

La documentación interactiva está disponible en:
```
http://localhost:4000/docs
```

### Características de la Documentación Swagger:
- **Interfaz interactiva** para probar endpoints
- **Esquemas de datos** detallados
- **Ejemplos de request/response**
- **Códigos de estado HTTP**
- **Validaciones documentadas**

## 🧪 Testing

### Suite de Pruebas Implementadas

#### 1. **Pruebas de Servidor**
- ✅ Conexión exitosa al servidor
- ✅ Respuesta del endpoint principal `/api`

#### 2. **Pruebas de Base de Datos**
- ✅ Conexión exitosa a PostgreSQL
- ✅ Autenticación de credenciales

#### 3. **Pruebas de Endpoints CRUD**
- ✅ GET `/api/products` - Listado de productos
- ✅ POST `/api/products` - Creación con validaciones
- ✅ PUT `/api/products/:id` - Actualización completa
- ✅ PATCH `/api/products/:id` - Actualización parcial
- ✅ DELETE `/api/products/:id` - Eliminación

### Ejecutar Tests
```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con cobertura
npm test -- --coverage
```

## 📁 Estructura del Proyecto

```
src/
├── config/
│   ├── db.ts              # Configuración base de datos
│   └── swagger.ts         # Configuración Swagger
├── controllers/
│   └── Products.ts        # Controladores CRUD
├── middleware/
│   └── index.ts           # Middleware de validaciones
├── models/
│   └── Products.model.ts  # Modelo Sequelize
├── routes/
│   └── router.ts          # Definición de rutas
├── __tests__/
│   └── server.test.ts     # Suite de pruebas
├── index.ts               # Punto de entrada
└── server.ts              # Configuración Express
```

## 🔧 Funcionalidades Técnicas Destacadas

### 1. **Middleware de Validación**
- Validación centralizada con `express-validator`
- Manejo de errores consistente
- Mensajes de error personalizados

### 2. **ORM con Decoradores**
- Uso de `sequelize-typescript`
- Decoradores para definición de modelos
- Validaciones a nivel de base de datos

### 3. **Configuración Robusta**
- Variables de entorno para seguridad
- Configuración SSL para PostgreSQL
- Manejo de errores con colores en consola

### 4. **Testing Completo**
- Pruebas unitarias y de integración
- Mocking de base de datos
- Cobertura de código

## 🚦 Estados de Respuesta HTTP

| Código | Descripción | Uso |
|--------|-------------|-----|
| `200` | OK | Operación exitosa |
| `201` | Created | Recurso creado |
| `400` | Bad Request | Validación fallida |
| `404` | Not Found | Recurso no encontrado |
| `500` | Internal Server Error | Error del servidor |

## 🔄 Roadmap de Desarrollo

### Sprint 1 - ✅ Completado
- [x] Configuración inicial del proyecto
- [x] Conexión a base de datos
- [x] Modelo de productos
- [x] CRUD básico

### Sprint 2 - ✅ Completado
- [x] Validaciones robustas
- [x] Middleware personalizado
- [x] Manejo de errores
- [x] Testing básico

### Sprint 3 - ✅ Completado
- [x] Documentación Swagger
- [x] Suite completa de testing
- [x] Optimización de código
- [x] Deploy y configuración

### Futuras Mejoras 🚀
- [ ] Autenticación JWT
- [ ] Paginación y filtros
- [ ] Frontend React
- [ ] Caché con Redis
- [ ] CI/CD Pipeline

## 👥 Equipo de Desarrollo

- **José Armando Martínez Jiménez**
- **Alexa Tahuilán Méndez** 
- **Luis Farid Chaires Pasalagua**
- **Mariano Morales Ramírez**

**Instructor:** José Guillermo Fierro Mendoza  
**Institución:** Instituto Tecnológico Nacional de México  
**Carrera:** Ingeniería en Sistemas Computacionales

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte del curso de Ingeniería de Software.

## 🤝 Contribuir

1. Fork del proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

⭐ **¡No olvides dar una estrella al proyecto si te fue útil!**
