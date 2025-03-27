function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

function redirecionarParaCompra(produto) {
    // Substitua 'pagina-de-compra.html' pelo URL real da página de compra
    window.location.href = 'pagina-de-compra.html?produto=' + encodeURIComponent(produto);
}

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado pelo seu feedback, ' + document.getElementById('nome').value + '!');
    document.getElementById('feedbackForm').reset();
});
