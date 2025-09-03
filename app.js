// Lista dos nomes de amigos inseridos no input
let nomeAmigos = [];
// Função para adicionar o nome na lista e verificar que esta sendo preenchido
function adicionarAmigo(){
  let nome = document.getElementById('amigo').value;
  // Validação do nome, caso esteja vazio emite um alerta e retorna apenas quando for válido
  if(nome === ""){
    alert('Por favor, digite um nome no campo para prosseguir!')
    return;
  }
  // Adiciona o nome a array e depois chama a função para mostrar a lista de nomes na tela após adiciona-las na array
  nomeAmigos.push(nome);
  criarListaVisivel();
  // Limpa o campo para o próximo nome
  document.getElementById('amigo').value = "";
}



// Cria uma lista visivel dentro ul do HTML
function criarListaVisivel(){
  // pega o elemento ul do HTML e Limpa a lista para nao repetir os nomes
  let listaNomes = document.getElementById('listaAmigos');
  listaNomes.innerHTML = "";
  // Cria um loop de 0 até o ultimo indice de nomeAmigos para criar um <li> dentro do <ul> com cada nome adicionado na array
  for ( let i = 0; i < nomeAmigos.length; i++){
    let nome = nomeAmigos[i];
    listaNomes.innerHTML += "<li>" + nome + "</li>";
  }
}
