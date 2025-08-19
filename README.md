# desafio_itau
Teste de Front-end

Informações
Esse projeto é feito usando Angular 20.
O objetivo do projeto é demonstrar a ingtegração de 3 na arquitetura de micro-frontend utilizando a biblioteca Module Federation do angular.
O Projeto possui 3 aplcações na qual a primeira (Shell) é a base que vai orquestrar os micro-frontends, a segunda (mfeCadastro) responsável por cadastrar os usuários e salvar os dados em um back-end mockado utliziando json-server, e a terceira (mfeSucesso) que lê os dados salvos no back-end e os exibe em uma lista.

Como executar o projeto?
Clone o repositório no link abaixo
git clone https://github.com/eliasfjr/desafio_itau.git
cd desafio_itau

Instale os pacotes NPM
Instale os pacotes npm descritos no arquivo package.json e verifique se funciona:
npm install
npm start

O Comando start irá iniciar um json-server na porta :3000, e irá iniciar 3 aplicações:
-Shell (Aplicação Base) na porta 4200
-mfeCadastro (mfe) na porta 4201
-mfeSucesso (mfe) na porta 4202

