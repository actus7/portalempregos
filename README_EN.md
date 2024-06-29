# Job Portal

Job Portal is a project developed to facilitate the connection between companies and job candidates. Through an intuitive platform, we allow companies to post job vacancies and candidates to apply for them, simplifying the hiring process and job search.

## How to Use

To use Job Portal, follow the steps below:

1. **Registration**: Both companies and candidates must register on the portal. Registration is simple and requires only basic information.
2. **Posting Vacancies**: After registering, companies can post job vacancies, detailing requirements, responsibilities, and benefits.
3. **Searching for Vacancies**: Candidates can search for vacancies using filters such as location, field of work, and contract type.
4. **Application**: Found a vacancy of interest? Candidates can apply directly through the portal, sending their resume and other information requested by the company.

## Configuring and Using Prisma

To configure Prisma in your project, follow the steps below:

1. Install Prisma and its dependencies:
    ```bash
    npm install @prisma/client
    npm install prisma --save-dev
    ```
2. Initialize Prisma in your project:
    ```bash
    npx prisma init
    ```
3. Configure the `.env` file with your database connection string.

After setting up Prisma, you can start using it to perform database operations. Here are some examples of CRUD operations:

- **Creation**:
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
- **Reading**:
    ```javascript
    async function getUserById(id) {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      return user;
    }
    ```
- **Updating**:
    ```javascript
    async function updateUser(id, data) {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: data,
      });
      return updatedUser;
    }
    ```
- **Deletion**:
    ```javascript
    async function deleteUser(id) {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
    }
    ```

## Contributing

Interested in contributing to Job Portal? Your help is very welcome! Here are some ways to contribute:

- **Reporting Bugs**: Found a problem? Open an issue detailing the bug you found.
- **Improvement Suggestions**: Have ideas on how we can improve Job Portal? Open an issue with your suggestions.
- **Contributing Code**: Want to contribute directly with code? Fork the repository, create a branch for your feature or fix, and open a Pull Request.

## FAQ

**How can I change my registration information?**
To change your information, access the profile section on the portal and make the desired changes.

**I forgot my password, what should I do?**
On the login page, click on "Forgot my password" and follow the instructions to reset it.

**How can I contact the company of a vacancy of interest?**
After applying for a vacancy, the company will receive your information and may contact you. Make sure to keep your contact information updated.
