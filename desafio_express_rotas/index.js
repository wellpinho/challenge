const express = require('express');
const app = express();

//rotas .get(), .post(), .put(), .delete()
app.get('/', (req, res) => {
  /* toda rota precisa de uma resposta, caso contrario fica travado sem resposta 
  *  e só pode ter uma resposta, caso tenha mais vai dar um erro
  */
  res.send(`
    <h1>Bem vindo ao meu Portfolio</h1>
    <a href="http://localhost:3000/blog">Blog</a>
    <a href="http://localhost:3000/canal/youtube">Youtube</a>
  `);
});

app.get('/blog', (req, res) => {
  res.send(`
    <h1>Bem vindo ao meu Blog</h1>
    <a href="http://localhost:3000">Home</a>
    <a href="http://localhost:3000/canal/youtube">Youtube</a>
  `);
});

app.get('/canal/youtube', (req, res) => {
  res.send(`
    <h1>Bem vindo ao meu canal</h1>
    <a href="http://localhost:3000">Home</a>
    <a href="http://localhost:3000/blog">Blog</a>
  ` )
});

app.listen(3000, (erro) => {
  if(erro) console.log('Ocorreu erro na porta 3000')
  else console.log('Rodando na porta 3000');
});