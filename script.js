function adicionarProjeto() {
    const lista = document.getElementById('portfolio-list');
    const nomeProjeto = prompt("Digite o nome do projeto:");
    const linkProjeto = prompt("Digite o link do projeto:");

    if (nomeProjeto && linkProjeto) {
        const novoProjeto = document.createElement('li');
        const link = document.createElement('a');
        link.href = linkProjeto;
        link.textContent = nomeProjeto;
        link.target = "_blank"; // Abre o link em uma nova aba
        novoProjeto.appendChild(link);
        lista.appendChild(novoProjeto);
    } else {
        alert("Por favor, insira um nome e um link válidos.");
    }
}
