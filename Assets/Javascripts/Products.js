
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart');
let cart = 0;
let cartSection = document.querySelector('.cart-items'); // Container for cart items
let cartBtn = document.querySelector('#cart-button');

cartSection.style.display = 'none';
cartSection.style.flexDirection = 'row';
cartSection.style.gap = '10px';

// Add item to cart
const addToCartButtons = document.querySelectorAll('#addCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        cart++;
        button.disabled = true;
        button.textContent = 'Added';
        cartCount.textContent = cart;

        // Get the details of the product (image, title, price)
        const index = Array.from(addToCartButtons).indexOf(button);
        let image = document.querySelectorAll('#card-image')[index].src;
        let title = document.querySelectorAll('#card-title')[index].textContent;
        let price = document.querySelectorAll('#card-price')[index].textContent;

        // Create a new div for the cart item
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Add item details to the cart item div
        cartItem.innerHTML = `
            <div style="display: flex; flex-direction: column; justify-content:space-between">
                <div style="height: 300px; width: 200px; background-color: #fff; padding: 10px; text-align: center; margin-bottom: 10px;">
                    <p><img src="${image}" alt="Product Image" style="width: 80px; height: 100px; object-fit: contain;"></p>
                    <p style="padding: 5px;">${title}</p>
                    <p>${price}</p>
                    <p>
                        <button style="padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Buy
                        </button>
                    </p>
                </div>
            </div>
        `;

        // Add the buy button functionality
        const buyButton = cartItem.querySelector('button');
        buyButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'delivery.html';
        });

        // Append the item to the cart section
        cartSection.appendChild(cartItem);
    });
});

// Toggle cart visibility
cartBtn.addEventListener('click', () => {
    if (cartSection.style.display === 'none') {
        cartSection.style.display = 'flex';
    } else {
        cartSection.style.display = 'none';
    }
});
