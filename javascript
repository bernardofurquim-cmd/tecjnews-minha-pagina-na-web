// ===== SCRIPT PRINCIPAL DO TechNews =====

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Botão "Leia mais"
    const botaoLeiaMais = document.getElementById('botaoLeiaMais');
    if (botaoLeiaMais) {
        botaoLeiaMais.addEventListener("click", function(event) {
            event.preventDefault();
            alert("📰 Em breve você poderá ler a notícia completa sobre Inteligência Artificial!");
        });
    }
    
    // 2. Links do menu
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const texto = link.textContent.trim();
            alert("📌 Você clicou em: " + texto + "\n\nEm breve esta seção estará disponível!");
        });
    });
    
    // 3. Newsletter
    const formNewsletter = document.getElementById('formNewsletter');
    if (formNewsletter) {
        formNewsletter.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById('emailInput');
            if (email && email.value) {
                alert("✅ Inscrição realizada com sucesso!\n\nE-mail: " + email.value);
                email.value = "";
            } else {
                alert("⚠️ Por favor, digite um e-mail válido.");
            }
        });
    }
    
    console.log("🚀 TechNews carregado com sucesso!");
});
