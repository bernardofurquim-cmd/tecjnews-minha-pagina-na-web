// =============================================
// TechNews - Navegação Dinâmica
// =============================================

console.log("🚀 TechNews carregado com sucesso!");

// =============================================
// BANCO DE DADOS DOS CONTEÚDOS
// =============================================
const conteudos = {
    // ===== CONTEÚDO PARA "INÍCIO" =====
    inicio: {
        titulo: "📰 Últimas Notícias",
        cards: [
            {
                icone: "📱",
                data: "📅 23 de Junho, 2026",
                titulo: "Apple lança novo iPhone com chip revolucionário",
                resumo: "O novo processador promete ser 3x mais rápido que a geração anterior.",
                autor: "João Silva",
                conteudoCompleto: "A Apple anunciou hoje o lançamento do iPhone 17 Pro, equipado com o novo chip A18 Bionic. O processador, fabricado com tecnologia de 3nm, promete um ganho de performance de 300% em tarefas de IA e machine learning. A bateria também teve melhorias significativas, oferecendo até 48 horas de autonomia. O novo modelo chega ao Brasil em agosto com preços a partir de R$ 9.999."
            },
            {
                icone: "🤖",
                data: "📅 22 de Junho, 2026",
                titulo: "Google anuncia novas ferramentas de IA para desenvolvedores",
                resumo: "Novas APIs prometem facilitar a criação de aplicações inteligentes.",
                autor: "Maria Santos",
                conteudoCompleto: "O Google I/O 2026 trouxe novidades empolgantes para a comunidade de desenvolvedores. O Gemini Pro, nova versão do modelo de IA da Google, agora conta com APIs especializadas para visão computacional, processamento de linguagem natural e geração de código. Os desenvolvedores poderão integrar essas ferramentas em seus projetos com apenas algumas linhas de código. A previsão é que as APIs estejam disponíveis para todos a partir de agosto."
            },
            {
                icone: "🎮",
                data: "📅 21 de Junho, 2026",
                titulo: "PlayStation 6 pode chegar em 2027 com tecnologia inovadora",
                resumo: "Console promete gráficos em 8K e carregamento instantâneo.",
                autor: "Pedro Oliveira",
                conteudoCompleto: "De acordo com fontes da indústria, a Sony está desenvolvendo o PlayStation 6 com tecnologia de ponta. O novo console deve contar com um processador personalizado da AMD, capaz de renderizar gráficos em 8K a 120fps. Além disso, o sistema de armazenamento SSD de última geração promete carregamento instantâneo dos jogos. A Sony planeja lançar o PS6 no final de 2027, com preço estimado de US$ 599."
            }
        ]
    },

    // ===== CONTEÚDO PARA "HARDWARE" =====
    hardware: {
        titulo: "💻 Hardware - Últimas Novidades",
        cards: [
            {
                icone: "🖥️",
                data: "📅 23 de Junho, 2026",
                titulo: "Novo processador Intel revoluciona mercado de PCs",
                resumo: "Intel lança processador com 24 núcleos e tecnologia de 3nm.",
                autor: "Carlos Tech",
                conteudoCompleto: "A Intel anunciou hoje seu mais novo processador, o Core Ultra 9 299K, fabricado com tecnologia de 3nm. Com 24 núcleos e 32 threads, o chip promete performance 50% superior à geração anterior. O processador também conta com inteligência artificial integrada para otimização de tarefas em tempo real. O preço sugerido é de US$ 699 e já está disponível para pré-venda."
            },
            {
                icone: "💾",
                data: "📅 22 de Junho, 2026",
                titulo: "SSD de 4TB chega ao mercado com preço acessível",
                resumo: "Novo SSD NVMe promete velocidades de leitura de 10GB/s.",
                autor: "Ana Storage",
                conteudoCompleto: "A Western Digital lançou hoje o SSD SN850X de 4TB, com velocidades de leitura sequencial de até 10GB/s e gravação de 9GB/s. O novo modelo utiliza memórias 3D NAND de 232 camadas, oferecendo maior durabilidade e eficiência energética. O preço sugerido de R$ 2.499 torna o dispositivo uma opção acessível para gamers e profissionais."
            },
            {
                icone: "🎮",
                data: "📅 21 de Junho, 2026",
                titulo: "Placa de vídeo NVIDIA RTX 6090 é anunciada",
                resumo: "Nova GPU promete revolucionar o mundo dos games e IA.",
                autor: "Pedro GPU",
                conteudoCompleto: "A NVIDIA apresentou hoje a RTX 6090, sua placa de vídeo mais poderosa até agora. Com 24GB de memória GDDR7, a nova GPU é capaz de rodar jogos em 8K a 240fps e processar modelos de IA com eficiência 3x maior que a geração anterior. O preço sugerido é de US$ 1.999 e as vendas começam em setembro."
            }
        ]
    },

    // ===== CONTEÚDO PARA "MOBILE" =====
    mobile: {
        titulo: "📱 Mobile - Últimas Novidades",
        cards: [
            {
                icone: "📱",
                data: "📅 23 de Junho, 2026",
                titulo: "Apple lança novo iPhone com chip revolucionário",
                resumo: "O novo processador promete ser 3x mais rápido que a geração anterior.",
                autor: "João Silva",
                conteudoCompleto: "A Apple anunciou hoje o lançamento do iPhone 17 Pro, equipado com o novo chip A18 Bionic. O processador, fabricado com tecnologia de 3nm, promete um ganho de performance de 300% em tarefas de IA e machine learning. A bateria também teve melhorias significativas, oferecendo até 48 horas de autonomia. O novo modelo chega ao Brasil em agosto com preços a partir de R$ 9.999."
            },
            {
                icone: "📶",
                data: "📅 22 de Junho, 2026",
                titulo: "5G chega a novas cidades brasileiras",
                resumo: "Tecnologia promete revolucionar a conectividade no país.",
                autor: "Carlos Lima",
                conteudoCompleto: "A Anatel autorizou hoje a ativação do 5G em mais 50 cidades brasileiras. A tecnologia promete velocidades de download de até 10Gbps, latência de 1ms e capacidade para conectar até 1 milhão de dispositivos por km². As operadoras já estão realizando os testes finais e a previsão é que o serviço esteja disponível para a população em até 60 dias."
            },
            {
                icone: "📊",
                data: "📅 20 de Junho, 2026",
                titulo: "Samsung lança Galaxy S30 com câmera de 200MP",
                resumo: "Novo smartphone promete revolucionar a fotografia mobile.",
                autor: "Lucas Photo",
                conteudoCompleto: "A Samsung apresentou hoje o Galaxy S30 Ultra, com câmera principal de 200MP e zoom óptico de 100x. O aparelho também conta com tela AMOLED 2X de 6.9 polegadas e bateria de 6000mAh. O novo modelo utiliza o processador Exynos 2400, fabricado com tecnologia de 3nm, oferecendo performance excepcional. O preço sugerido é de R$ 8.999."
            }
        ]
    },

    // ===== CONTEÚDO PARA "GAMES" =====
    games: {
        titulo: "🎮 Games - Últimas Novidades",
        cards: [
            {
                icone: "🎮",
                data: "📅 23 de Junho, 2026",
                titulo: "PlayStation 6 chega com gráficos revolucionários",
                resumo: "Console promete gráficos em 8K e carregamento instantâneo.",
                autor: "Pedro Oliveira",
                conteudoCompleto: "A Sony anunciou hoje oficialmente o PlayStation 6. O novo console conta com processador personalizado da AMD de 5nm, 32GB de RAM GDDR7 e SSD de 2TB. Os gráficos chegam em resolução 8K a 120fps, com suporte a Ray Tracing em tempo real. A Sony também anunciou 12 novos jogos exclusivos para o lançamento. O preço sugerido é de US$ 599 e as vendas começam em novembro de 2027."
            },
            {
                icone: "🕹️",
                data: "📅 22 de Junho, 2026",
                titulo: "Xbox Series X 2.0 é anunciado pela Microsoft",
                resumo: "Novo console promete ser o mais poderoso do mercado.",
                autor: "João Gamer",
                conteudoCompleto: "A Microsoft revelou hoje o Xbox Series X 2.0, seu console mais poderoso até agora. Com processador Zen 5 da AMD, 36GB de RAM e GPU com 24 TFLOPS, o aparelho promete rodar jogos em 8K a 120fps. O sistema também conta com tecnologia de upscaling por IA, melhorando a qualidade dos jogos em tempo real. O lançamento está previsto para o final de 2027 com preço de US$ 549."
            },
            {
                icone: "🎯",
                data: "📅 21 de Junho, 2026",
                titulo: "Grand Theft Auto VI: data de lançamento confirmada",
                resumo: "Jogo mais aguardado da década finalmente tem data confirmada.",
                autor: "Marina Games",
                conteudoCompleto: "A Rockstar Games confirmou hoje que Grand Theft Auto VI será lançado em 15 de dezembro de 2026. O jogo se passa em Vice City e promete um mapa 3x maior que GTA V. A história seguirá dois protagonistas inspirados em Bonnie e Clyde. O jogo utilizará o motor RAGE 2.0, com gráficos realistas e física avançada. A pré-venda já está disponível por R$ 299."
            }
        ]
    },

    // ===== CONTEÚDO PARA "IA" =====
    ia: {
        titulo: "🤖 Inteligência Artificial - Últimas Novidades",
        cards: [
            {
                icone: "🤖",
                data: "📅 23 de Junho, 2026",
                titulo: "OpenAI lança GPT-5 com capacidades revolucionárias",
                resumo: "Nova versão do modelo promete raciocínio avançado e multimídia.",
                autor: "Ana Santos",
                conteudoCompleto: "A OpenAI anunciou hoje o lançamento do GPT-5, seu modelo de linguagem mais avançado até agora. Com 1 trilhão de parâmetros, o modelo é capaz de raciocinar, planejar e executar tarefas complexas com inteligência comparável à humana. O GPT-5 também suporta entrada e saída multimídia, incluindo imagens, áudio e vídeo. O acesso já está disponível para desenvolvedores e empresas parceiras."
            },
            {
                icone: "🏥",
                data: "📅 22 de Junho, 2026",
                titulo: "IA revoluciona diagnóstico médico com 99% de precisão",
                resumo: "Sistema de IA supera médicos em diagnósticos de câncer.",
                autor: "Dr. Roberto",
                conteudoCompleto: "Pesquisadores da Universidade de Stanford desenvolveram um sistema de IA capaz de diagnosticar câncer com 99,2% de precisão, superando a taxa de acerto de médicos especialistas (95%). A IA analisa imagens de ressonância magnética e biópsias em segundos, identificando padrões imperceptíveis ao olho humano. A tecnologia já está sendo testada em 50 hospitais nos Estados Unidos."
            },
            {
                icone: "🧠",
                data: "📅 21 de Junho, 2026",
                titulo: "Neuralink testa chip cerebral em humanos com sucesso",
                resumo: "Elon Musk anuncia primeiros testes bem-sucedidos com implante cerebral.",
                autor: "Alice Neuro",
                conteudoCompleto: "A Neuralink, empresa de Elon Musk, anunciou hoje que realizou os primeiros implantes cerebrais em humanos com sucesso. O chip N1, do tamanho de uma moeda, foi implantado em 3 pacientes com paralisia, permitindo que eles controlem dispositivos digitais apenas com o pensamento. A tecnologia utiliza milhares de eletrodos flexíveis que se conectam aos neurônios, lendo e estimulando a atividade cerebral. Os próximos passos incluem testes com mais pacientes e desenvolvimento de novas aplicações."
            }
        ]
    }
};

// =============================================
// FUNÇÃO PARA RENDERIZAR OS CARDS
// =============================================
function renderizarCards(categoria) {
    const container = document.getElementById('cards-container');
    const titulo = document.getElementById('titulo-categoria');
    
    // Limpa o container
    container.innerHTML = '';
    
    // Pega os dados da categoria
    const dados = conteudos[categoria];
    
    if (!dados) {
        container.innerHTML = '<p style="text-align:center; font-size:1.2rem; color:#999;">Nenhum conteúdo encontrado.</p>';
        return;
    }
    
    // Atualiza o título
    titulo.textContent = dados.titulo;
    
    // Cria os cards
    dados.cards.forEach(card => {
        const cardHTML = `
            <article class="card">
                <div class="card-icon">${card.icone}</div>
                <span class="card-date">${card.data}</span>
                <h3>${card.titulo}</h3>
                <p>${card.resumo}</p>
                <span class="card-author">Por <strong>${card.autor}</strong></span>
                <button class="btn-leia-mais" 
                        data-titulo="${card.titulo}" 
                        data-conteudo="${card.conteudoCompleto}">
                    📖 Leia mais
                </button>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
    
    // Adiciona eventos aos novos botões "Leia mais"
    document.querySelectorAll('.card .btn-leia-mais').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const titulo = this.getAttribute('data-titulo');
            const conteudo = this.getAttribute('data-conteudo');
            abrirModal(titulo, conteudo);
        });
    });
}

// =============================================
// FUNÇÃO PARA ABRIR O MODAL
// =============================================
function abrirModal(titulo, conteudo) {
    const modal = document.getElementById('modalLeiaMais');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalConteudo = document.getElementById('modal-conteudo');
    
    modalTitulo.textContent = titulo;
    modalConteudo.textContent = conteudo;
    modal.style.display = 'block';
    
    // Impede scroll da página
    document.body.style.overflow = 'hidden';
}

// =============================================
// FUNÇÃO PARA FECHAR O MODAL
// =============================================
function fecharModal() {
    const modal = document.getElementById('modalLeiaMais');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// =============================================
// EVENTOS DE NAVEGAÇÃO
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("📰 Bem-vindo ao TechNews!");
    
    // ===== 1. NAVEGAÇÃO DO MENU =====
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active de todos
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona active no clicado
            this.classList.add('active');
            
            // Pega a categoria
            const categoria = this.getAttribute('data-categoria');
            
            // Renderiza os cards da categoria
            renderizarCards(categoria);
            
            // Scroll suave até a seção de notícias
            const noticias = document.getElementById('conteudo-principal');
            noticias.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // ===== 2. CLICK NAS CATEGORIAS (lateral) =====
    document.querySelectorAll('.categorias li').forEach(item => {
        item.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            
            // Atualiza o menu
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-categoria') === categoria) {
                    link.classList.add('active');
                }
            });
            
            // Renderiza os cards
            renderizarCards(categoria);
            
            // Scroll suave
            const noticias = document.getElementById('conteudo-principal');
            noticias.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // ===== 3. BOTÃO "LEIA MAIS" DO HERO =====
    const btnHero = document.querySelector('.hero .btn-leia-mais');
    if (btnHero) {
        btnHero.addEventListener('click', function(e) {
            e.preventDefault();
            const titulo = this.getAttribute('data-titulo');
            const conteudo = this.getAttribute('data-conteudo');
            abrirModal(titulo, conteudo);
        });
    }
    
    // ===== 4. FECHAR MODAL =====
    // Botão fechar
    document.querySelector('.modal-fechar').addEventListener('click', fecharModal);
    
    // Clicar fora do modal
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('modalLeiaMais');
        if (e.target === modal) {
            fecharModal();
        }
    });
    
    // Tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });
    
    // ===== 5. NEWSLETTER =====
    const formNewsletter = document.getElementById('formNewsletter');
    const emailInput = document.getElementById('emailInput');
    
    if (formNewsletter) {
        formNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (email === '' || !email.includes('@') || !email.includes('.')) {
                alert('⚠️ Por favor, digite um e-mail válido!');
                return;
            }
            
            alert(`✅ Inscrição realizada com sucesso!\n📧 E-mail: ${email}\n\nObrigado por se inscrever no TechNews!`);
            emailInput.value = '';
        });
    }
    
    // ===== 6. CARREGA O CONTEÚDO INICIAL =====
    renderizarCards('inicio');
    
    console.log("✅ Todos os scripts inicializados!");
});
