// Lista dos nomes de amigos inseridos no input
let nomeAmigos = [];
// Função para adicionar o nome na lista e verificar que esta sendo preenchido
function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
  console.log(nome);
  // Validação do nome, caso esteja vazio emite um alerta e retorna apenas quando for válido
  if(nome === ""){
    alert('Por favor, digite um nome no campo para prosseguir!')
    return;
  }
  // Adiciona o nome a array
  nomeAmigos.push(nome);
  // Limpa o campo para o próximo nome
  document.getElementById('amigo').value = "";
}


