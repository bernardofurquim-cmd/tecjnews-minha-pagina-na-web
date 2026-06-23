// =============================================
// ===== MENU HAMBURGUER (Mobile) =====
// =============================================

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('aberto');
    }
}

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navLinks');
        if (nav && window.innerWidth <= 768) {
            nav.classList.remove('aberto');
        }
    });
});

// =============================================
// ===== TOAST (Notificações) =====
// =============================================

function mostrarToast(mensagem) {
    const toast = document.getElementById('toast');
    const toastMensagem = document.getElementById('toastMensagem');
    
    if (!toast || !toastMensagem) return;
    
    toastMensagem.textContent = mensagem;
    toast.classList.add('mostrar');
    
    // Fecha automaticamente após 4 segundos
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
        fecharToast();
    }, 4000);
}

function fecharToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.remove('mostrar');
    }
}

// =============================================
// ===== ABRIR NOTÍCIA =====
// =============================================

function abrirNoticia(titulo) {
    mostrarToast(`📰 Abrindo: ${titulo}`);
    console.log(`📰 Notícia aberta: ${titulo}`);
    
    // Aqui você pode redirecionar para uma página de detalhes
    // window.location.href = `noticia.html?titulo=${encodeURIComponent(titulo)}`;
}

// =============================================
// ===== NEWSLETTER =====
// =============================================

function inscreverNewsletter(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('emailNews');
    const feedback = document.getElementById('feedbackNews');
    
    if (!emailInput || !feedback) return;
    
    const email = emailInput.value.trim();
    
    // Validação básica de e-mail
    if (!email || !email.includes('@') || !email.includes('.')) {
        feedback.innerHTML = '⚠️ Por favor, digite um e-mail válido!';
        feedback.style.color = '#ff6b6b';
        return;
    }
    
    feedback.innerHTML = `✅ Inscrição confirmada para ${email}! Você receberá nossas notícias.`;
    feedback.style.color = '#00d4ff';
    
    emailInput.value = '';
    
    console.log('📨 Novo inscrito:', email);
    
    // Limpa a mensagem após 5 segundos
    setTimeout(() => {
        feedback.innerHTML = '';
    }, 5000);
}

// =============================================
// ===== CONTADOR DE CLIQUES =====
// =============================================

let contadorCliques = 0;

function contarClique() {
    contadorCliques++;
    const contadorElement = document.getElementById('contadorCliques');
    if (contadorElement) {
        contadorElement.textContent = contadorCliques;
    }
    console.log(`🔢 Cliques: ${contadorCliques}`);
}

// =============================================
// ===== RELÓGIO EM TEMPO REAL =====
// =============================================

function atualizarRelogio() {
    const relogio = document.getElementById('relogio');
    if (!relogio) return;
    
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// =============================================
// ===== DATA ATUAL =====
// =============================================

function mostrarDataAtual() {
    const dataElement = document.getElementById('dataAtual');
    if (!dataElement) return;
    
    const agora = new Date();
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
    
    dataElement.textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

// =============================================
// ===== BUSCAR NOTÍCIAS (Simulação) =====
// =============================================

function buscarNoticias(categoria) {
    mostrarToast(`🔍 Buscando notícias de ${categoria}...`);
    console.log(`🔍 Buscando categoria: ${categoria}`);
    
    // Simulação de carregamento
    const noticias = document.querySelectorAll('.card-noticia');
    noticias.forEach((card, index) => {
        card.style.opacity = '0.3';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 200 + (index * 100));
    });
}

// =============================================
// ===== FILTRAR NOTÍCIAS POR CATEGORIA =====
// =============================================

function filtrarPorCategoria(categoria) {
    mostrarToast(`📂 Filtrando: ${categoria}`);
    console.log(`📂 Categoria selecionada: ${categoria}`);
    
    // Aqui você pode implementar a lógica de filtro
    const cards = document.querySelectorAll('.card-noticia');
    cards.forEach(card => {
        const tag = card.querySelector('.card-tag');
        if (tag) {
            const tagTexto = tag.textContent;
            if (tagTexto === categoria || categoria === 'Todos') {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// =============================================
// ===== DARK MODE (Tema Escuro) =====
// =============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    mostrarToast(isDark ? '🌙 Modo escuro ativado' : '☀️ Modo claro ativado');
    console.log(`🌓 Dark mode: ${isDark}`);
}

// Verifica preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// =============================================
// ===== SCROLL TO TOP =====
// =============================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/esconder botão de voltar ao topo
window.addEventListener('scroll', () => {
    const btnTop = document.getElementById('btnTopo');
    if (!btnTop) return;
    
    if (window.scrollY > 500) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
});

// =============================================
// ===== ANIMAÇÃO DE CARREGAMENTO =====
// =============================================

function mostrarCarregando() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'block';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 2000);
    }
}

// =============================================
// ===== COMPARTILHAR NOTÍCIA =====
// =============================================

function compartilharNoticia(titulo, url) {
    if (navigator.share) {
        navigator.share({
            title: titulo,
            text: `📰 ${titulo} - TechNews`,
            url: url || window.location.href
        }).then(() => {
            console.log('✅ Compartilhado com sucesso!');
        }).catch((error) => {
            console.log('❌ Erro ao compartilhar:', error);
        });
    } else {
        // Fallback para navegadores sem Web Share API
        mostrarToast('📋 Copie o link para compartilhar!');
        navigator.clipboard.writeText(url || window.location.href).then(() => {
            mostrarToast('✅ Link copiado para a área de transferência!');
        });
    }
}

// =============================================
// ===== TEMPO DE CARREGAMENTO DA PÁGINA =====
// =============================================

function medirTempoCarregamento() {
    const tempo = performance.now();
    console.log(`⏱️ Tempo de carregamento: ${Math.round(tempo)}ms`);
}

// =============================================
// ===== INICIALIZAÇÃO =====
// =============================================

window.onload = function() {
    console.log('🚀 TechNews carregado com sucesso!');
    console.log('📰 Fique por dentro das últimas notícias de tecnologia!');
    
    // Mostra data atual
    mostrarDataAtual();
    
    // Mede tempo de carregamento
    medirTempoCarregamento();
    
    // Mostra toast de boas-vindas
    setTimeout(() => {
        mostrarToast('👋 Bem-vindo ao TechNews! Fique por dentro das novidades.');
    }, 1000);
    
    // Verifica se tem Dark Mode salvo
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};

// =============================================
// ===== EVENTO DE TECLADO (Atalhos) =====
// =============================================

document.addEventListener('keydown', function(e) {
    // Ctrl + D = Dark Mode
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        toggleDarkMode();
    }
    
    // Ctrl + T = Voltar ao topo
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        scrollToTop();
    }
    
    // Esc = Fechar Toast
    if (e.key === 'Escape') {
        fecharToast();
    }
});

// =============================================
// ===== CONEXÃO COM INTERNET =====
// =============================================

window.addEventListener('online', function() {
    mostrarToast('✅ Conexão restaurada!');
    console.log('🌐 Online');
});

window.addEventListener('offline', function() {
    mostrarToast('⚠️ Você está offline!');
    console.log('🌐 Offline');
});

// =============================================
// ===== SALVAR DADOS LOCALMENTE =====
// =============================================

function salvarPreferencia(chave, valor) {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
        console.log(`💾 Preferência salva: ${chave} = ${valor}`);
    } catch (error) {
        console.error('❌ Erro ao salvar:', error);
    }
}

function carregarPreferencia(chave) {
    try {
        const valor = localStorage.getItem(chave);
        return valor ? JSON.parse(valor) : null;
    } catch (error) {
        console.error('❌ Erro ao carregar:', error);
        return null;
    }
}

// =============================================
// ===== EXPORTAR FUNÇÕES (para uso global) =====
// =============================================

// Tornando funções acessíveis globalmente
window.toggleMenu = toggleMenu;
window.mostrarToast = mostrarToast;
window.fecharToast = fecharToast;
window.abrirNoticia = abrirNoticia;
window.inscreverNewsletter = inscreverNewsletter;
window.contarClique = contarClique;
window.toggleDarkMode = toggleDarkMode;
window.scrollToTop = scrollToTop;
window.buscarNoticias = buscarNoticias;
window.filtrarPorCategoria = filtrarPorCategoria;
window.compartilharNoticia = compartilharNoticia;
