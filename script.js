const caixaDeTexto = document.getElementById('texto-tarefa');
const buttonAdicona = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

// Função que adiciona as tarefas na lista
function adicionaTarefas() {
  const li = document.createElement('li');
  li.innerText = caixaDeTexto.value;
  listaDeTarefas.appendChild(li);
  caixaDeTexto.value = '';
}

buttonAdicona.addEventListener('click', adicionaTarefas);
