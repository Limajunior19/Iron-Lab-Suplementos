let carrinhoCount = 0;
function adicionarAoCarrinho(produto) {
    carrinhoCount++;
atualizarCarrinho();
console.log(`Produto ${produto} adicionado ao carrinho. Total: ${carrinhoCount}`);

}

function atualizarCarrinho() {
    const carrinho = document.getElementById('carrinho');
    carrinho.innerText = `Carrinho (${carrinhoCount})`;
}
function removerDoCarrinho(produto) {
    if (carrinhoCount > 0) {
        carrinhoCount--;
        atualizarCarrinho();
        console.log(`Produto ${produto} removido do carrinho. Total: ${carrinhoCount}`);
    } else {
        console.log('Carrinho vazio!');
    }
}