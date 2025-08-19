# Desafio Itaú
Teste de Front-end

# Informações
Esse projeto é feito usando Angular 20.

O objetivo da entrega é demonstrar a integração entre projetos atraves da arquitetura de micro-frontends utilizando a biblioteca Module Federation do angular.

O Projeto possui 3 aplicações, a primeira (Shell) é a base que vai orquestrar os micro-frontends, a segunda (mfeCadastro) responsável por cadastrar os usuários e salvar os dados em um back-end mockado utilizando json-server, e a terceira (mfeSucesso) que lê os dados salvos no back-end e os exibe em uma lista.<br />

Como os micro-frontends são carregados por rota e estão hospedados em portas diferentes, o Shell age como roteador principal e orquestrador de MFE.<br /> 
Toda a comunicação de dados é feita via json-server, ou seja, não há comunicação direta entre mfeCadastro e mfeSucesso.

# Como executar o projeto?
### Clone o repositório no link abaixo
`git clone https://github.com/eliasfjr/desafio_itau.git`<br />
`cd .\desafio_itau\`

### Instale os pacotes NPM
Instale os pacotes npm das 3 aplicaçoes do projeto e verifique se funcinou:<br /><br />
`cd .\Shell\` e `npm install`<br />
`cd .\mfeCadastro\` e `npm install`<br />
`cd .\mfeSucesso\` e `npm install`

### Navegue até a aplicação Shell e execute o comando `npm start`
`cd .\Shell\`<br />
`npm start`

### O Comando `npm start` irá iniciar a aplicação da seguinte forma:
-Json-server na porta :3000<br />
-Shell (Aplicação Base) na porta :4200<br />
-mfeCadastro (mfe) na porta :4201<br />
-mfeSucesso (mfe) na porta :4202<br />

