// ===== SCRIPT PRINCIPAL DO TechNews =====

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Botão "Leia mais" - mostra um alerta
    const botaoLeiaMais = document.getElementById('botaoLeiaMais');
    
    if (botaoLeiaMais) {
        botaoLeiaMais.addEventListener("click", function(event) {
            event.preventDefault(); // Impede de ir para #
            alert("📰 Em breve você poderá ler a notícia completa sobre Inteligência Artificial!");
        });
    } else {
        console.log("⚠️ Botão 'Leia mais' não encontrado. Verifique se o ID está correto.");
    }
    
    // 2. Botão da Newsletter - mostra mensagem de sucesso
    const formNewsletter = document.querySelector('form');
    if (formNewsletter) {
        formNewsletter.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede de enviar o formulário
            
            const email = document.querySelector('input[type="email"]');
            if (email && email.value) {
                alert("✅ Inscrição realizada com sucesso! Você receberá nossas novidades no e-mail: " + email.value);
                email.value = ""; // Limpa o campo
            } else {
                alert("⚠️ Por favor, digite um e-mail válido.");
            }
        });
    }
    
    // 3. Links do menu - mostra a categoria clicada
    const linksMenu = document.querySelectorAll('a[href="#"]');
    linksMenu.forEach(function(link) {
        // Ignora o botão "Leia mais" (já tem função própria)
        if (link.id !== 'botaoLeiaMais') {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const texto = link.textContent.trim();
                alert("📌 Você clicou em: " + texto + "\n\nEm breve esta seção estará disponível!");
            });
        }
    });
    
    console.log("🚀 TechNews carregado com sucesso!");
});
