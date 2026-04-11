// Função de login conectada ao backend
async function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const res = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: senha })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('name', data.name);
      localStorage.setItem('role', data.role);
      window.location.href = 'pages/dashboard.html';
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert('Erro ao conectar com o servidor');
  }
}

// Abre e fecha o menu mobile ao clicar no botão hamburguer
// Usada em todas as páginas que têm navbar
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('aberto');
}