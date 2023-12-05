document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function (event) {
            event.preventDefault();
            const cartData = localStorage.getItem('cart');
            if (cartData) {
                const cartItems = document.getElementById('cart-items');
                if (cartItems) {
                    const itemsArray = JSON.parse(cartData);

                    cartItems.innerHTML = '';

                    itemsArray.forEach(item => {
                        const newItem = document.createElement('li');
                        newItem.textContent = item;
                    });
                }else {
                    console.log("Elemento com ID 'cart-items' ")
                }
            }
        })
    }
})