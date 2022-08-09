# Full-Stack Web Project
Desenvolvimento de uma landingpage completa, incluindo frontend com React e backend com NodeJS. 

## Principais linguagens e tecnologias utilizadas

<br>

### Frontend

- React (principal biblioteca para construção do site)
- ContextAPI (para gerenciamento de estados)
- Chakra-UI (biblioteca de UI)
- Formulários com validação (Yup)
- Responsividade e adaptação de aplicação web para front.

<br>

### Backend

- NodeJS
- Typescript
- Express (para integração do código através do protocolo HTTP)
- UUID (para geração de id)
- Jest (para testes automatizados)

<br>

## Escopo do projeto

A funcionalidade do projeto é bem simples, o sistema de cadastro de usuários envia para o banco de dados as informações coletadas no formulário, basta passar em todas as verificações.  

<br>

### Backend

- **1. Cadastro de usuário**

    O usuário tem de fornecer o nome, o email, data de nascimento e o número de celular. Faça as validações básicas e garanta que o número de celular tenha 11 caracteres. 

<br>

- **2. Ver usuários cadastrados**

    Esse endpoint deve retornar uma lista com todos os usuários cadastrados no banco.

<br><br>

### Instruções para uso local do Backend

    1. Clone o repositório
    2. Acesse a pasta **backend**
    3. Instale as dependências através do comando **yarn**
    4. Inicie a aplicação através do comando **yarn start**
    5. Por padrão, o servidor é executado na porta localhost:3333
    
<br><br>

### Frontend

A aplicação faz uma requisição do tipo GET, buscando a lista dos usuários cadastrados no banco e renderiza na seção **Lista de cadastro**. Através do método POST na seção **Cadastro**, por meio do cliente HTTP Axios, o formulário envia as informações inseridas no mesmo, se estiverem validadas, caso contrário, será emitido um erro abaixo do campo.  

<br>

### Instruções para uso local do Frontend
- **-------------------------------------**
    1. Clone o repositório
    2. Acesse a pasta **frontend**
    3. Instale as dependências através do comando **yarn**
    4. A aplicação por padrão, faz a requisição no servidor do Heroku, para rodar localmente, altere a **baseUrl** do arquivo **api.js** da pasta **services**, para localhost:3000 (deve ser diferente da porta 3333 do backend)
    5. Inicie o servidor local do backend
    6. Inicie a aplicação através do comando **yarn start**
    
<br><br>





## Canais de comunicação

**Felipy Santos**: *Desenvolvedor full-stack | Designer | 

- [Linkedin](https://www.linkedin.com/in/felipy-santos/)
- [Github](https://github.com/felipysantos)
- [Email](felipys23@gmail.com)