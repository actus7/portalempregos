# Portalempregos

El Portalempregos es un proyecto desarrollado para facilitar la conexión entre empresas y candidatos a empleo. A través de una plataforma intuitiva, permitimos que las empresas publiquen ofertas de trabajo y los candidatos se postulen a ellas, simplificando el proceso de contratación y búsqueda de empleo.

## Cómo Utilizar

Para utilizar el Portalempregos, sigue los pasos a continuación:

1. **Registro**: Tanto empresas como candidatos deben registrarse en el portal. El registro es simple y solo requiere información básica.
2. **Publicación de Ofertas**: Después de registrarse, las empresas pueden publicar ofertas de trabajo, detallando requisitos, responsabilidades y beneficios.
3. **Búsqueda de Ofertas**: Los candidatos pueden buscar ofertas utilizando filtros como ubicación, área de trabajo y tipo de contrato.
4. **Candidatura**: ¿Encontraste una oferta de interés? Los candidatos pueden postularse directamente a través del portal, enviando su currículum y otra información solicitada por la empresa.

## Configurando y Utilizando Prisma

Para configurar Prisma en tu proyecto, sigue los pasos a continuación:

1. Instala Prisma y sus dependencias:
    ```bash
    npm install @prisma/client
    npm install prisma --save-dev
    ```
2. Inicializa Prisma en tu proyecto:
    ```bash
    npx prisma init
    ```
3. Configura el archivo `.env` con tu cadena de conexión a la base de datos.

Después de configurar Prisma, puedes comenzar a utilizarlo para realizar operaciones en la base de datos. Aquí hay algunos ejemplos de operaciones CRUD:

- **Creación**:
    ```javascript
    async function createUser(data) {
      const newUser = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
        },
      });
      return newUser;
    }
    ```
- **Lectura**:
    ```javascript
    async function getUserById(id) {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      return user;
    }
    ```
- **Actualización**:
    ```javascript
    async function updateUser(id, data) {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: data,
      });
      return updatedUser;
    }
    ```
- **Eliminación**:
    ```javascript
    async function deleteUser(id) {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
    }
    ```

## Contribuyendo

¿Interesado en contribuir al Portalempregos? ¡Tu ayuda es muy bienvenida! Aquí hay algunas maneras de contribuir:

- **Reportando Errores**: ¿Encontraste un problema? Abre un issue detallando el error encontrado.
- **Sugerencias de Mejoras**: ¿Tienes ideas sobre cómo podemos mejorar el Portalempregos? Abre un issue con tus sugerencias.
- **Contribuyendo con Código**: ¿Quieres contribuir directamente con código? Haz un fork del repositorio, crea una rama para tu característica o corrección, y abre un Pull Request.

## Preguntas Frecuentes

**¿Cómo puedo cambiar mi información de registro?**
Para cambiar tu información, accede a la sección de perfil en el portal y realiza los cambios deseados.

**Olvidé mi contraseña, ¿qué debo hacer?**
En la página de inicio de sesión, haz clic en "Olvidé mi contraseña" y sigue las instrucciones para restablecerla.

**¿Cómo puedo contactar a la empresa de una oferta de interés?**
Después de postularte a una oferta, la empresa recibirá tu información y podrá contactarte. Asegúrate de mantener tu información de contacto actualizada.
