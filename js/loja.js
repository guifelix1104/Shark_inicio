// Variáveis para guardar os dados do produto selecionado
let produtoAtual = { nome: '', tipo: '', preco: 0 };
let corSelecionada = '';
let tamanhoSelecionado = '';

// Abre o modal com as informações do produto clicado
function abrirModal(nome, tipo, preco) {
  produtoAtual = { nome, tipo, preco };
  document.getElementById('modalNome').textContent = nome;
  document.getElementById('modalPreco').textContent = `R$ ${preco.toFixed(2).replace('.', ',')}`;
  document.getElementById('modalOverlay').classList.add('aberto');
  
  // Limpa seleções anteriores
  corSelecionada = '';
  tamanhoSelecionado = '';
  document.getElementById('corSelecionada').textContent = 'Nenhuma cor selecionada';
  document.querySelectorAll('.cor').forEach(c => c.classList.remove('selecionada'));
  document.querySelectorAll('.tamanho').forEach(t => t.classList.remove('selecionado'));
  document.getElementById('observacao').value = '';
}

// Fecha o modal
function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('aberto');
}

// Seleciona a cor clicada
function selecionarCor(btn) {
  document.querySelectorAll('.cor').forEach(c => c.classList.remove('selecionada'));
  btn.classList.add('selecionada');
  corSelecionada = btn.dataset.cor;
  document.getElementById('corSelecionada').textContent = corSelecionada;
}

// Seleciona o tamanho clicado
function selecionarTamanho(btn) {
  document.querySelectorAll('.tamanho').forEach(t => t.classList.remove('selecionado'));
  btn.classList.add('selecionado');
  tamanhoSelecionado = btn.textContent;
}

// Filtra os produtos por tipo
function filtrar(tipo) {
  document.querySelectorAll('.filtro').forEach(f => f.classList.remove('ativo'));
  event.target.classList.add('ativo');

  document.querySelectorAll('.produto-card').forEach(card => {
    if (tipo === 'todos' || card.dataset.tipo === tipo) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Envia o pedido para o backend
async function fazerPedido() {
  if (!corSelecionada) return alert('Selecione uma cor!');
  if (!tamanhoSelecionado) return alert('Selecione um tamanho!');

  const token = localStorage.getItem('token');
  if (!token) return alert('Você precisa estar logado!');

  const observacao = document.getElementById('observacao').value;

  try {
    const res = await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        produto: produtoAtual.nome,
        tipo: produtoAtual.tipo,
        preco: produtoAtual.preco,
        cor: corSelecionada,
        tamanho: tamanhoSelecionado,
        observacao
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Pedido realizado com sucesso! O professor entrará em contato em breve.');
      fecharModal();
    } else {
      alert(data.error || 'Erro ao fazer pedido');
    }
  } catch (err) {
    alert('Erro ao conectar com o servidor');
  }
}