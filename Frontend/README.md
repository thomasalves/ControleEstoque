# Controle de Estoque

  ## Este projeto foi desenvolvido utilizando um frameqork Angular, desenvolvido pela google,  como intuito de teste e aprendizado, nele foi pedido para desenvoler um pequeno sistema de controle de estoque, utilizando duas entidades: Produto e Movimento de Estoque.

## Para o proejetos temos o seguintes requisitos :
 ● Boas práticas de desenvolvimento e clean code;
● CRUD - (Create, Read, Update, Delete) de produtos;
  
 ● Efetuar entrada e saída dos produtos no estoque. É importante validar o saldo ao efetuar uma saída do produto, caso não haja quantidade suficiente, deve ser retornado uma mensagem específica;

 ● Consulta de produtos por tipo, com quantidade de saída e quantidade disponível;

 ● Consulta de lucro por produto, exibindo a quantidade total de saída, e total do lucro (valorde venda – valor do fornecedor).



# Backend

  Para simular as enditades e as movimentações da CRUD, foi desenvolvido um pequeno backend Fake, utlizando a biblioteca JsonServer, você pode ter acesso a mesma na pasta de backend neste retositorio

  Para iniciar o serviço basta seguir os seguintes comandos apos clonar o repositorio
      
   para baixar as dependencias:  

      yarn ou npm install

  Após basta iniciar o serviço

    yarn start


# FrontEnd

  O frontEnd deste projeto foi desenvolvido utlizando o Angular na versão 12, o mesmo está disponivel na pasta frontend.

  ## Para Subir o serviço:

  1.  Clona este repositório.
  2.  Baixar dependencias

          yarn ou npm install

  3. Subir o serviço utlizando a diretiva do angular:

          ng serve     
