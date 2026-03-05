# 🏫 School Management System (Backend API)

Una robusta API RESTful diseñada para centralizar la administración escolar, gestionando de manera eficiente la matriculación de alumnos, registros de docentes y el control académico.

---

## 🚀 Key Features

* **Student Management:** Operaciones CRUD completas para la gestión de alumnos con validación de esquemas.
* **Faculty Administration:** Control detallado de perfiles docentes y asignación de materias.
* **Academic Control:** Gestión de cursos, niveles y seguimiento de registros académicos.
* **Secure API:** Implementación de mejores prácticas para la integridad de los datos y manejo de respuestas.


## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) |
| **Database** | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) |
| **Tools** | ![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat&logo=npm&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white) |


## ⚙️ Prerequisites

Antes de comenzar, asegúrate de tener instalado lo siguiente:
* [Node.js](https://nodejs.org/) (Versión LTS recomendada)
* [MySQL](https://www.mysql.com/) (Instancia local o en la nube)
* Un cliente para pruebas de API (como [Postman](https://www.postman.com/))

## 🔧 Installation & Setup

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Yeu07/Escuela.git](https://github.com/Yeu07/Escuela.git)
cd Escuela
```
### 2. Instalar dependencias
```bash
npm install
```
### 3. Configuración de la base de datos
Definir en el archivo .env las siguientes varaibles
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=escuela_db
```
### 4. Ejecutar el servidor
```bash
npx tsx watch src/index.ts
```
