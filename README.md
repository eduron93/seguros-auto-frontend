# Seguros Auto - Frontend

Aplicación web desarrollada en **Angular** para consumir el microservicio de cotización de seguros de automóviles.

## Tecnologías

- Angular 20
- TypeScript
- Angular Router
- Angular HttpClient
- HTML5
- CSS3

## Requisitos

Antes de iniciar, asegúrese de tener instalado:

- Node.js 20 o superior
- npm 10 o superior
- Angular CLI

Verificar las versiones:

```bash
node -v
npm -v
ng version
```

## Clonar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd seguros-auto-web
```

## Instalar dependencias

```bash
npm install
```

## Configuración

El frontend consume el backend en:

```
http://localhost:8080
```

Si la URL cambia, modificar el archivo correspondiente donde se define la API (por ejemplo, `environment.ts` o el servicio HTTP).

## Ejecutar el proyecto

Iniciar el servidor de desarrollo:

```bash
ng serve
```

o

```bash
npm start
```

La aplicación estará disponible en:

```
http://localhost:4200
```

## Funcionalidades

### Inicio de sesión

Permite autenticar un usuario mediante:

- Usuario
- Contraseña

Al autenticarse correctamente se obtiene un token JWT utilizado para consumir los servicios protegidos.

---

### Consulta de productos

Permite visualizar los productos de seguros disponibles obtenidos desde el backend.

Cada producto incluye:

- Cobertura
- Descripción
- Precio base

El botón **Cotizar** selecciona automáticamente la cobertura para generar una cotización.

---

### Generación de cotización

La pantalla de cotización solicita:

- Marca del vehículo (*)
- Modelo del vehículo (*)
- Año
- Valor asegurado
- Cobertura

Al completar los campos obligatorios se habilita el botón **Generar Cotización**.

El sistema envía la solicitud al backend y muestra:

- Código de referencia
- Prima calculada

---

### Seguridad

- Autenticación mediante JWT.
- Las páginas protegidas requieren un usuario autenticado.
- Si el token expira o no existe, el usuario es redirigido al inicio de sesión.
- Opción para cerrar sesión desde la esquina superior derecha.

## Estructura del proyecto

```
src/
 ├── app/
 │    ├── login/
 │    ├── quotation/
 │    ├── products/
 │    ├── services/
 │    ├── guards/
 │    ├── models/
 │    └── app.routes.ts
 │
 ├── assets/
 ├── environments/
 └── main.ts
```

## Scripts disponibles

Instalar dependencias

```bash
npm install
```

Iniciar servidor

```bash
ng serve
```

Compilar

```bash
ng build
```

Compilar para producción

```bash
ng build --configuration production
```

Ejecutar pruebas

```bash
ng test
```

## Flujo de uso

1. Ejecutar el backend.
2. Ejecutar el frontend.
3. Abrir:

```
http://localhost:4200
```

4. Iniciar sesión.
5. Consultar productos.
6. Seleccionar una cobertura.
7. Generar una cotización.
8. Cerrar sesión cuando finalice.

## Backend requerido

El backend debe estar disponible en:

```
http://localhost:8080
```

Servicios utilizados:

| Método | Endpoint | Descripción |
|---------|----------|-------------|
| POST | /auth/verify | Autenticación |
| GET | /products | Consulta de productos |
| POST | /quotations | Generación de cotizaciones |

## Autor

Proyecto desarrollado como parte de una prueba técnica de un microservicio de cotización de seguros utilizando **Spring Boot**, **PostgreSQL** y **Angular**.