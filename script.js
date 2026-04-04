// Seleciona o botão "Entrar" no HTML
const botao = document.querySelector("button");

// Aguarda o clique no botão para executar a função de login
botao.addEventListener("click", function () {

    // Captura o valor digitado no campo de usuário
    const usuario = document.querySelector('input[type="text"]').value;

    // Captura o valor digitado no campo de senha
    const senha = document.querySelector('input[type="password"]').value;

    // Credenciais válidas para comparação (futuramente virão de um banco de dados)
    const userCorreto = "admin";
    const senhaCorreta = "1234";

    // Verifica se o usuário e a senha digitados estão corretos
    if (usuario === userCorreto && senha === senhaCorreta) {
        // Se correto, exibe mensagem de sucesso e redireciona para a página home
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    } else {
        // Se incorreto, exibe mensagem de erro
        alert("Usuário ou senha incorretos!");
    }

});
