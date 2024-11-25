function proximoItem(){
    alert("vc clicou")
}


const carousel = document.querySelector('.carousel');

// Função para ir para o próximo item
function proximoItem() {
  const itens = carousel.children;
  const itemAtual = carousel.querySelector('.ativo');
  const proximo = itemAtual.nextElementSibling;
  
  if (proximo) {
    itemAtual.classList.remove('ativo');
    proximo.classList.add('ativo');
    carousel.scroll({
      left: proximo.offsetLeft,
      behavior: 'smooth'
    });
  }
}

// Função para ir para o item anterior
function itemAnterior() {
  const itens = carousel.children;
  const itemAtual = carousel.querySelector('.ativo');
  const anterior = itemAtual.previousElementSibling;
  
  if (anterior) {
    itemAtual.classList.remove('ativo');
    anterior.classList.add('ativo');
    carousel.scroll({
      left: anterior.offsetLeft,
      behavior: 'smooth'
    });
  }
}

// Adicione eventos de clique para navegação
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('proximo')) {
    proximoItem();
  } else if (e.target.classList.contains('anterior')) {
    itemAnterior();
  }
});


