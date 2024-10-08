
let cartItems = [];
let cartTotal = 0;

function addToCart(productId) {
    const product = document.querySelector(`.shop-product[data-id="${productId}"]`);

    if (product) {
        const productName = product.querySelector('h2').textContent;

        // Extract the price from the <p> element
        const priceText = product.querySelector('p').textContent;
        const productPrice = parseFloat(priceText.split('€')[1].replace(',', '.'));

        const existingItem = cartItems.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += productPrice;
        } else {
            cartItems.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1,
                totalPrice: productPrice
            });
        }

        updateCart();
    } else {
        console.error(`Product with ID ${productId} not found.`);
    }
}

function updateCart() {
    const cartList = document.getElementById('itemList');
    const totalSpan = document.getElementById('cartTotal');

    cartList.innerHTML = '';
    cartTotal = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity}x ${item.name} = €${item.totalPrice.toFixed(2)}`;
        li.style.display = 'block';
        cartList.appendChild(li);
        cartTotal += item.totalPrice;
    });

    totalSpan.textContent = `€${cartTotal.toFixed(2)}`;
}