
let cart = [];
let cartCount = 0;

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    cartCount++;
    updateCartButton();
}

function updateCartButton() {
    document.getElementById('cart-btn').innerText = `Cart (${cartCount})`;
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');

    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    cartModal.style.display = 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

document.getElementById('cart-btn').addEventListener('click', showCart);
