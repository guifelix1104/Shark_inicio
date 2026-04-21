// Função responsável por fazer o login do usuário
// É chamada quando o botão "ENTRAR" é clicado no index.html
async function fazerLogin() {

  // Pega o valor digitado no campo de email
  const email = document.getElementById('email').value;

  // Pega o valor digitado no campo de senha
  const senha = document.getElementById('senha').value;

  try {
    // Faz uma requisição POST para o backend passando email e senha
    // fetch é a função nativa do navegador para fazer requisições HTTP
    const res = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Informa que estamos enviando JSON
      body: JSON.stringify({ email, password: senha })  // Converte os dados para JSON
    });

    // Converte a resposta do servidor para um objeto JavaScript
    const data = await res.json();

    // Se o login foi bem sucedido (status 200)
    if (res.ok) {
      // Salva o token no localStorage — ele será usado para autenticar as próximas requisições
      localStorage.setItem('token', data.token);

      // Salva o nome do usuário para exibir na interface
      localStorage.setItem('name', data.name);

      // Salva o papel do usuário (ex: admin, aluno) para controle de acesso
      localStorage.setItem('role', data.role);

      // Redireciona para o dashboard após o login bem sucedido
      window.location.href = 'pages/dashboard.html';

    } else {
      // Se o login falhou, exibe a mensagem de erro retornada pelo backend
      alert(data.error);
    }

  } catch (err) {
    // Se não conseguiu nem se conectar ao servidor (ex: backend offline)
    alert('Erro ao conectar com o servidor');
  }
}

// Abre e fecha o menu mobile ao clicar no botão hamburguer
// Usada em todas as páginas que têm navbar
function toggleMenu() {
    // Adiciona ou remove a classe "aberto" na lista de links da navbar
    // O CSS usa essa classe para mostrar ou esconder o menu no mobile
    document.querySelector('nav ul').classList.toggle('aberto');
}
