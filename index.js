// Seleciona o botão de alternar modo e o corpo da página
const toggleModeBtn = document.getElementById('toggle-mode');
const body = document.body;
// Seleciona o ícone dentro do botão
const icon = toggleModeBtn.querySelector('i');

toggleModeBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');

    // Verifica se o dark mode está ativo para trocar o ícone
    if (body.classList.contains('dark-mode')) {
        // Se estiver no dark mode, mostra o ícone de lua (ou o que preferir)
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        // Se estiver no light mode, mostra o ícone de sol
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});