# Tindev

Um 'tinder' para devs desenvolvido na SemanaOmnistack 8, conteúdo exclusico da Rocketseat, utilizand ReactJS, React Native e NodeJS.

Link do APP web (postado pelo Heroku): https://tindevrocketseat.herokuapp.com

# Iniciando o projeto

### Primeiramente foi construida a API REST da aplicação, utilizando NodeJS.

- Ferramentas utilizadas:

  - express: para criação de rotas da aplicação;

  - nodemon: para auxiliar na execução da aplicação em desenvolvimento;

  - insomnia: aplicação para teste da API;

  - mongoDB atlas: banco de dados não relacional (facilmente manuseável). Foi muito útil pois a aplicação trabalha apenas com relacionamentos simples e ele é facilmente configurado (o mongoose foi utilizado para facilitar o trabalho com o BD utilizando apenas sintaxe JS);

  - api do github: para buscar as informações dos usuários utilizando a API do github;

  - axios: forma de fazer requisição à API externa;

  - mongoDB compass comunity: para acessar de forma visual o banco de dados e verificar o que está dentro dele, etc.;

  - cors: permite que a aplicação seja acessada por qualquer endereço.

  - web socket (socket io): transição de mensagens entre frontend e backend em tempo real (no backend).

### Parte Web da aplicação:

- Ferramentas utilizadas:

  - create react-app: pré configura nossa aplicação (utilizando babel e web pack);

  - react-router-dom: sistemas de rotas p/ aplicação web

  - socket.io-client: transição de mensagens entre frontend e backend em tempo real (no frontend);

### Parte Mobile da aplicação:

- Ferramentas utilizadas:

  - npx react-native init 'nome': para iniciar nosso projeto;

  - react-navigation, react-native-gesture-handler, react-native-reanimated: basicamente para lidar com gestos de usuários;

  - axios: para acessarmos nossa API dentro do react-native;

  - @react-native-community/async-storage: para salvar os dados carregados na página;

  - socket.io-client: transição de mensagens entre frontend e backend em tempo real (no frontend);
  
### Observação

Infelizmente não consegui integrar o app versão mobile no deploy do Heroku, mas, durante a produção, onde eu testei localmente, funcionou perfeitamente.

Talvez em um futuro próximo eu arrume o servidor para que se possa testar cada um localmente, baixando ou clonando o repositório. Mas, de qualquer forma, deixarei o código do app mobile disponível.
