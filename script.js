// JavaScript para funcionalidades de pop-up
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const modalMessage = document.getElementById('modalMessage');
    const modalLink = document.getElementById('modalLink');

    // Função para abrir modal
    function openModal(message, link = null) {
        modalMessage.textContent = message;
        if (link) {
            modalLink.style.display = 'inline';
            modalLink.href = link;
        } else {
            modalLink.style.display = 'none';
        }
        modal.style.display = 'block';
    }

    // Fechar modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Evento quando tipo de usuário é selecionado
    const tipoUsuarios = document.getElementsByName('tipoUsuario');
    tipoUsuarios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'parte') {
                openModal('Por favor, instale o aplicativo JTE disponível para Android ou iPhone. Caso tenha dificuldades ou precise de mais informações, entre em contato com a unidade responsável pelo processo. Para mais detalhes, consulte o manual do JTE:', 'https://pje.csjt.jus.br/manual/index.php/JTe');
            } else if (this.value === 'servidor') {
                openModal('Por favor, registre um chamado no AssystNet, acessando o canal destinado a Usuário/Interno.', 'https://chatbot.trt15.jus.br/lhc/home.php');
            }
        });
    });

    // Evento quando assunto é selecionado
    const assuntoSelect = document.getElementById('assunto');
    assuntoSelect.addEventListener('change', function() {
        const selected = this.value;
        if (selected === 'cadastro_procurador') {
            openModal('Leia as instruções no link abaixo:', 'https://seusite.com/instrucoes-cadastro-procurador');
        } else if (selected === 'erro_visibilidade_documentos') {
            openModal('Entre em contato com a unidade onde se encontra o processo.');
        } else if (selected === 'duvidas_geral') {
            openModal('Consulte as dúvidas frequentes no link abaixo:', 'https://seusite.com/duvidas-frequentes');
        }
    });

    // Validação simples do CPF
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function() {
        // Máscara básica para CPF
        let value = this.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0,11);
        let formatted = value.replace(/(\d{3})(\d)/, '$1.$2');
        formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2');
        formatted = formatted.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        this.value = formatted;
    });

    // Evento de submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o email, por exemplo, usando AJAX
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});
