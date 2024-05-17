# Projeto Frontend - FILE_SERVICE e MOCK

Este projeto contém a aplicação frontend para interagir com as APIs `FILE_SERVICE` e `MOCK`. O frontend é desenvolvido em React e fornece uma interface para observar e empregar as funções CRUD.

## Requisitos

- Node.js v18.20.2
- npm v10.5.0

## Verificando a Versão do Node.js
Se você não tiver a versão correta do Node.js, é recomendável usar o NVM (Node Version Manager) para gerenciar diferentes versões do Node.js. Aqui estão as instruções para instalar e usar o NVM:

### Instalando o NVM e Node
1. Baixe e instale o NVM executando o seguinte comando no terminal:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
2. Baixe e instale o Node.js na versão adequada
```
nvm install 18
```

3. Verifique se a versão adequada foi instalada
```
node -v # should print `v18.20.2`
```

5. Se não for `v18.20.2` a versão exibida execute:
```
nvm use 18
```

6. Verifique a versão do npm do seu ambiente:
```
npm -v # should print `10.5.0`
```
# Configuração do Projeto
## Passo 1: Clonar o Repositório
Clone este repositório em sua máquina local

```
git clone https://github.com/vichierro/Repo-CSV-Frontend.git
```
## Passo 2: Configurar e Iniciar o Backend
Antes de iniciar o frontend, é necessário configurar e iniciar o backend (em https://github.com/vichierro/Repo-CSV/tree/main) conforme descrito no README.md do backend.

## Passo 3: Configurar e Iniciar o Frontend
1. Navegue até a pasta frontend:
```
cd frontend

```
2. Instale as dependências:
```
npm install

```
2. Inicie o servidor de desenvolvimento:
```
npm start

```
# Utilizando a Aplicação
Após iniciar o servidor de desenvolvimento do React, acesse http://localhost:3000 no seu navegador. A partir desta interface, você pode:
- Observar os dados carregados das APIs `FILE_SERVICE` e `MOCK`.
- Realizar operações CRUD (Criar, Ler, Atualizar, Deletar) através dos formulários e botões disponíveis na interface.
- Fazer upload de arquivos CSV e visualizar o processamento e armazenamento dos dados.

# Fluxo de Dados
Depois de carregar e interagir com os dados na aplicação frontend, você pode acompanhar as alterações diretamente nos Prisma Studios configurados para `FILE_SERVICE` e `MOCK`:
- Acesse o Prisma Studio do FILE_SERVICE em http://localhost:5555 (ou a porta configurada).
- Acesse o Prisma Studio do MOCK em http://localhost:5556 (ou a porta configurada).
Verifique as tabelas e registros nos bancos de dados para observar as alterações resultantes das operações realizadas através da interface frontend.


