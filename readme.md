# Desafio backend Bis2bis(Integrado)

Desafio proposto pela empresa Bis2bis, para vaga de desenvolvedor backend.
O projeto possui duas partes.
A parte 1 consiste em buscar dados de universidades de paises especificos e popular
um banco de dados MongoDB com esses dados.
A parte 2 consiste em um crud, a partir dos dados do mesmo banco.

### 📋 Pré-requisitos

Você precisará de um banco de dados cridado de forma gratuita no mongodb atlas
https://cloud.mongodb.com/

E Você precisará de algumas tecnologias intaladas como:

```
NodeJS
Git
```

### 🔧 Instalação

Após ter preenchido com os pré requisitos, seguir o tutorial de instalação.

```
git clone https://github.com/wagner477/teste_backend_integrado_.git
```

Esse comando irá clonar o repositório principal da aplicação.

```
npm install
```

Esse comando irá instalar todas as bibliotecas necessárias para proseguirmos

```
No arquivo .env adicione sua URL de conexão com o banco. O deixe igual o exemplo abaixo
DATABASE_URL"mongodb+srv://username:password@link/database?retryWrites=true&w=majority"
```

```
npx prisma generate
```

Esse comando irá gerar a collection no banco de dados.

```
npm run upUniversities
```

Após esse comando os dados das universidades irá subir para o banco de dados.

```
npm run build
```

Esse comando erá buildar a aplicação

```
npm run start
```

Esse comando irá subir a aplicação na porta 3000.

### 🔩 Requisições

```
[GET] localhost:3000/universities - Irá retornar todas univesidades

[GET] localhost:3000/universities?country= - Irá retornar todas universidades de um país especifico

[GET] localhost:3000/universities/:id - Irá retornar os dados de uma universidade especifica.

[POST] localhost:3000/universities/
  irá receber no corpo da requisição:
    alpha_two_code: string - Sigla do país com 2 caracteres
    webpages: string[] - Lista com as URL's da univesidade
    name: string - Nome da universidade por extenso
    country: string - Nome do país por extenso
    domains: string[] - Lista de domínios da universidade
    state_province: string - Sigla do estado onde fica a universidade se houver

[PUT] localhost:3000/universities/:id
  irá recever no corpo da requisição:
    webpages: string[] - Lista com as URL's da univesidade
    name: string - Nome da universidade por extenso
    domains: string[] - Lista de domínios da universidade
  -Irá atualizar as infromações de uma universidade especifica

[DELETE] localhost:3000/universities:/id - Irá deletar uma universidade especifica

```

## 🛠️ Construído com

- [Nodejs](https://nodejs.org/en/) - Javascript runtime utilizado
- [Prisma](https://www.prisma.io/) - Orm utilizado
- [Mongo](https://www.mongodb.com/) - Banco de dados utilizado

---

Desenvolvido com ❤️ por [Wagner Oliveira](https://github.com/wagner477) 😊
