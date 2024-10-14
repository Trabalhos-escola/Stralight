function mostrarDetalhes(nome, descricao, preco) {
    document.getElementById("nome-produto").innerText = nome;
    document.getElementById("descricao-produto").innerText = descricao;
    document.getElementById("preco-produto").innerText = preco;
}

document.getElementById("form-contato").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário para teste
    alert("Mensagem enviada!");
    this.reset(); // Limpa o formulário após o envio
};
