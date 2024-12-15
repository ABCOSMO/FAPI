function verMensagem(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}
verMensagem('h3', 'Desenvolvido pelos CDIPs');

let openButtons = document.querySelectorAll('.open-modal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        let modalId = button.getAttribute('data-modal');
        let modal = document.getElementById(modalId);

        modal.showModal();
    });
});

let closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        let modalId = button.getAttribute('data-modal');
        let modal = document.getElementById(modalId);

        modal.close();
    });
});

function mascaraMatricula(matricula) {
    // Remove todos os caracteres não numéricos
    matricula = matricula.replace(/\D/g, "");

    // Verifica se o Mátricula tem 8 dígitos
    if (matricula.length !== 8) {
        return matricula; // Retorna o Matrícula sem formatação
    }

    // Insere os pontos e hífen na posição correta
    matricula = matricula.replace(/(\d{1})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");

    return matricula;
}

// Exemplo de uso:
let inputMatricula = document.getElementById('inputMatricula');

inputMatricula.addEventListener('input', () => {
    inputMatricula.value = mascaraMatricula(inputMatricula.value);
});
