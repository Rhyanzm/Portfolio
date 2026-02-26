// --- DADOS DOS PROJETOS (Adicione novos projetos aqui) ---
const projectsData = [
   {
        title: "API Restful com Spring",
        description: "Projeto backend demonstrando CRUD completo, autenticação JWT e documentação Swagger. Focado em boas práticas de Engenharia de Software.",
        techs: ["Java 17", "Spring Security", "PostgreSQL"],
        pdfUrl: "assets/projeto-api.pdf" // Exemplo de PDF
    },
    {
        title: "Sistema Gestão Adler",
        description: "Aplicação full-stack para controle e gestão de documentos de funcionários. Otimizou processos internos reduzindo tempo de consulta em 80%.",
        techs: ["HTML", "CSS", "PHP", "JavaScript"],
        pdfUrl: "assets/projeto-adler.pdf" // Caminho do seu PDF
    },
    {
        title: "Grand Prix Inovação App",
        description: "Solução tecnológica industrial desenvolvida durante hackathon do SENAI. Foco em resolução de problemas práticos da indústria.",
        techs: ["Mobile", "React", "UX/UI", "Expo"],
        pdfUrl: "assets/projeto-grandprix.pdf"
    },
    
    // Para adicionar mais, basta copiar um bloco {}, colar e mudar os dados.
];

// --- CARREGAR PROJETOS ---
const projectsContainer = document.getElementById('projects-container');

function loadProjects() {
    projectsData.forEach((project, index) => {
        // Cria o elemento HTML do card
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        // Adiciona evento de clique para abrir o modal
        card.addEventListener('click', () => openModal(index));

        card.innerHTML = `
            <div class="project-header">
                <i class="fas fa-folder folder-icon"></i>
                <i class="fas fa-arrow-up-right-from-square external-icon"></i>
            </div>
            <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-techs">
                    ${project.techs.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(card);
    });
}

// --- LÓGICA DO MODAL ---
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const pdfFrame = document.getElementById('pdf-frame');
const pdfLink = document.getElementById('pdf-download-link');
const closeModal = document.querySelector('.close-modal');

function openModal(index) {
    const project = projectsData[index];
    
    modalTitle.innerText = project.title;
    
    // Define a fonte do PDF.
    // Dica: Se não tiver PDF ainda, coloque uma imagem ou url externa.
    pdfFrame.src = project.pdfUrl; 
    pdfLink.href = project.pdfUrl;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Impede rolagem do fundo
}

closeModal.onclick = function() {
    modal.style.display = "none";
    pdfFrame.src = ""; // Limpa o iframe para parar carregamento
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        pdfFrame.src = "";
        document.body.style.overflow = "auto";
    }
}

// Inicializar

document.addEventListener('DOMContentLoaded', loadProjects);
