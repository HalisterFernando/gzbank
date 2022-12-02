# GZBank :iphone:

Esta aplicação é uma carteira digital, onde o usuário pode realizar transações entre os usuários e conferir o 
histórico das mesmas.

# Tecnologias utilizadas :computer:

## Front-end

- React
- TypeScript
- TailwindCSS
- Axios
- Formik
- Yup

## Back-end

- TypeScript
- NodeJS
- Sequelize
- Express


## Instalando dependências e iniciando a aplicação :rocket:
Para rodar a aplicação é necessário ter o docker instalado, caso queira
rodar localmente, inicie um container com o postgres
```bash
 docker run --name some-postgres -p 3002:5432 -e POSTGRES_PASSWORD=123456 -d postgres
```
```bash
cd app/frontend npm install
npm start
cd app/backend npm install
npm start
```

Caso prefira rodar pelo docker
```bash
cd app
docker-compose up -d --build
```
Assim que os containers subirem acesse aplicação pelo endereço https://localhost:3000/ em seu navegador

Para encerrar os containers
```bash
cd app
docker-compose down
```

