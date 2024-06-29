# Portalempregos

[English Version](README_EN.md) | [Versión en Español](README_ES.md)

O Portalempregos é um projeto desenvolvido para facilitar a conexão entre empresas e candidatos a emprego. Através de uma plataforma intuitiva, permitimos que as empresas postem vagas de emprego e os candidatos apliquem para elas, simplificando o processo de contratação e busca por trabalho.

## Como Utilizar

Para utilizar o Portalempregos, siga os passos abaixo:

1. **Cadastro**: Tanto empresas quanto candidatos devem se cadastrar no portal. O cadastro é simples e requer apenas informações básicas.
2. **Postagem de Vagas**: Após o cadastro, as empresas podem postar vagas de emprego, detalhando requisitos, responsabilidades e benefícios.
3. **Busca por Vagas**: Os candidatos podem buscar vagas utilizando filtros como localização, área de atuação e tipo de contrato.
4. **Candidatura**: Encontrou uma vaga de interesse? Os candidatos podem se candidatar diretamente pelo portal, enviando seu currículo e demais informações solicitadas pela empresa.

## Configurando e Utilizando o Prisma

Para configurar o Prisma em seu projeto, siga os passos abaixo:

1. Instale o Prisma e suas dependências:
    ```bash
    npm install @prisma/client
    npm install prisma --save-dev
    ```
2. Inicialize o Prisma no seu projeto:
    ```bash
    npx prisma init
    ```
3. Configure o arquivo `.env` com a string de conexão do seu banco de dados.

Após configurar o Prisma, você pode começar a utilizá-lo para realizar operações de banco de dados. Aqui estão alguns exemplos de operações CRUD:

- **Criação**:
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
- **Leitura**:
    ```javascript
    async function getUserById(id) {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      return user;
    }
    ```
- **Atualização**:
    ```javascript
    async function updateUser(id, data) {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: data,
      });
      return updatedUser;
    }
    ```
- **Exclusão**:
    ```javascript
    async function deleteUser(id) {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
    }
    ```

## Contribuindo

Interessado em contribuir para o Portalempregos? Sua ajuda é muito bem-vinda! Aqui estão algumas maneiras de contribuir:

- **Reportando Bugs**: Encontrou um problema? Abra uma issue detalhando o bug encontrado.
- **Sugestões de Melhorias**: Tem ideias de como podemos melhorar o Portalempregos? Abra uma issue com suas sugestões.
- **Contribuindo com Código**: Quer contribuir diretamente com o código? Faça um fork do repositório, crie uma branch para sua feature ou correção e abra um Pull Request.

## FAQ

**Como posso alterar minhas informações de cadastro?**
Para alterar suas informações, acesse a seção de perfil no portal e faça as alterações desejadas.

**Esqueci minha senha, o que fazer?**
Na página de login, clique em "Esqueci minha senha" e siga as instruções para redefini-la.

**Como posso entrar em contato com a empresa de uma vaga de interesse?**
Após se candidatar para uma vaga, a empresa receberá suas informações e poderá entrar em contato com você. Certifique-se de manter suas informações de contato atualizadas.
