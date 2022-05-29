const caixaDeTexto = document.getElementById('texto-tarefa');
const buttonAdicona = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

// Função que adiciona as tarefas na lista
function adicionaTarefas() {
  const li = document.createElement('li');
  li.innerText = caixaDeTexto.value;
  listaDeTarefas.appendChild(li);
  caixaDeTexto.value = '';
  const itensLista = document.getElementsByTagName('li');
  for (let index = 0; index < itensLista.length; index += 1) {
    // eslint-disable-next-line no-use-before-define
    itensLista[index].addEventListener('click', mudarCorItem);
    itensLista[index].addEventListener('dblclick', riscarItem);
  }
}

buttonAdicona.addEventListener('click', adicionaTarefas);

// Função que muda cor do item ao clicar
function mudarCorItem(event) {
  const evento = event;
  const elemento = document.getElementById('color');
  if (elemento === null) {
    evento.target.id = 'color';
  } else {
    elemento.removeAttribute('id');
    evento.target.id = 'color';
  }
}

// função que risca ao clicar duas vezes no item

function riscarItem(event) {
  const evento = event;
  if (evento.target.className === 'completed') {
    evento.target.className = '';
  } else {
    evento.target.className = 'completed';
  }
}
