// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Validação e Simulação do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        // Impede o recarregamento da página (comportamento padrão do form)
        event.preventDefault();

        // Captura valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação Simples
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação de E-mail usando Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Simulação de Sucesso
        feedback.innerText = "Mensagem enviada com sucesso! (Simulação)";
        feedback.className = "success";
        feedback.classList.remove('hidden');

        // Limpa o formulário após o envio
        contactForm.reset();

        // Exibe um alerta conforme pedido no requisito
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");
    });

    // 2. Funcionalidade de Tema Claro/Escuro (Opcional/Interação)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Comentário: Salva a preferência ou apenas alterna classes CSS
        console.log("Tema alterado pelo usuário.");
    });
});