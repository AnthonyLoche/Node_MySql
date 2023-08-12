# NodeMySql


_*Esse conteudo foi produzido com base no video[Como conectar Node.js com MySQL e cadastrar no banco de dados](https://www.youtube.com/watch?v=_OeuPAb9bhU)_

Esse tutorial foi feito por um iniciante em desenvolvimento, inclusive em database e node.js.
Porém espero que sirva para um começo.
A principal função seria de como inserir dados em uma database em MySql.

Primeiro eu te mostrarei como preparar totalmente todo o ambiente.

Para mexer com todos os códigos eu utilizei o Visual Studio Code, e recomendo que se estiver seguindo o tutorial utilize o mesmo editor.
[Link para baixar o Visual Studio Code](https://code.visualstudio.com/download).
Isso gerará um arquivo .exe, e basta executa-lo

Para isso também é necessario instalar o Node.Js.
Que pode ser instalado por aqui
[Link para baixar o Visual Studio Code](https://nodejs.org/pt-br/download).
Isso gerará um arquivo .exe, e basta executa-lo

Como usará o MySql como database precisará instalar o mesmo, você pode usar tanto o workbench quanto o cmd do MySql.
[Link para baixar o MySql](https://dev.mysql.com/downloads/installer/).
Neste site terá duas opções, escolha a que tem maior tamanho de armazenamento, no caso a segunda opção.
Após isso você executa o arquivo .exe que vc baixou e será instalado o "MySql Installer - Commuinity", um "gerenciador", onde você pode instalar o workbench e também o mysql server, é importante definir uma senha ao instalar o mysql server, e caso queira manipular o database por cmd terá de instalar o mysql shell também.


Após isso podemos dar inicio, crie uma pasta em algum lugar em seu computador e abra a mesma pasta no VsCode.

Agora com a pasta aberta no VsCode abra um terminal.
```
Ctrl + Shift + '
```

e digite o seguinte comando.

```
npm init
```

Após isso deverá ser iniciado um donwload, e haverá algumas perguntas como nome, descrição e etc sobre o projeto, você pode dar enter em todas as perguntas, após isso deve ser gerado uma pasta chamada `node_modules` onde haverá alguns modulos e um arquivo chamado package.json.

após isso crie um arquivo chamado main.js, que será teu arquivo principal, onde estará a base para o seu site.

Agora instalaremos as dependencias para que nosso programa funcione, o express, o sequelize, o nodemon e o mysql2.

Digite este código :
```
npm install --save express
```
Espere, e digite: 
```
npm install --save nodemon
```
Espere, e digite: 
```
npm install --save sequelize
```
E por ultimo digite:
```
npm install --save mysql2
```

Apenas confira que seu package.json está assim:
![Ambiente](Ambiente.png)


Pronto, seu ambiente está pronto e agora iremos começar nosso programa