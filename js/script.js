// Função para adicionar o produto ao carrinho
function addToCart(productId) {
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = `Produto ${productId}`;
    cartItems.appendChild(newItem);
    console.log(`Produto ${productId} adicionado ao carrinho.`);
}

// Tornando o carrinho visível e redirecionando para 'carrinho.html'
document.addEventListener('DOMContentLoaded', function () {
    var cartIcon = document.getElementById('cart-icon');

    cartIcon.addEventListener('click', function () {
        // Redirecionar para a página 'carrinho.html'
        window.location.href = 'carrinho.html';
    });
});

