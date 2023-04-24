# Comunication-CV

Este projeto visa se comunicar com a base de dados de nosso parceiro construtor de vendas
## Instalação

Usar o [NVM](https://github.com/nvm-sh/nvm) para controle de versão do Node.

Utilizar a versão 16.15.1 do nodejs


```bash
yarn

yarn dev:server
```

```bash
npm install

npm run dev:server
```

## Padrões de Projeto

Utilizar TDD, SOLID e DDD.

Testes deverão ser criados na pasta tests.

Criar as branches a partir da dev com o padrão:

- feature/(nome da task) 
- fix/(nome da task) para hotfix e bugfix

Para prod o processo será da dev para a main.

## Rotas

Criar as rotas com o prefixo V(número da versão)

## ENV

copiar o .env.example para o .env.development


## Build

```bash
yarn build
```

```bash
npm run build
```

## Requisições

Importar a collection dentro da pasta docs no insomnia/postman
