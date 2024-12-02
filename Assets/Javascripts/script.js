let cart = document.querySelector('#cart');
let addCart = document.querySelectorAll('#addCart');
let icon = document.querySelectorAll('#icon');
let toggle = document.querySelector('#toggle');
let anchor = document.querySelectorAll('a');
let cartSection = document.querySelector('#cart-items'); // Container for cart items
let itemCount = 0;
let cartBtn = document.querySelector('#cart-button');
let member = document.querySelector('#memberShip');
let cardClick = document.querySelector('#card_click');
let cardClick2 = document.querySelector('#card_click2');
let cardClick3 = document.querySelector('#card_click3');
let cardClick4 = document.querySelector('#card_click4');
let health1 = document.querySelector('#health1');
let health2 = document.querySelector('#health2');
let health3 = document.querySelector('#health3');
let health4 = document.querySelector('#health4');
let health5 = document.querySelector('#health5');
let catagories1 = document.querySelector('#catagory');
let catagories2 = document.querySelector('#catagories2');
let catagories3 = document.querySelector('#catagories3');
let catagories4 = document.querySelector('#catagories4');
let beauty = document.querySelector('#Beauty');

// Beauty Product

beauty.style.cursor = 'pointer';
beauty.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Beauty_page.html';
});

//Shop By Catagories
catagories1.style.cursor = 'pointer';
catagories2.style.cursor = 'pointer';
catagories3.style.cursor = 'pointer';
catagories4.style.cursor = 'pointer';

catagories1.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Beauty_page.html';
});
catagories2.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Dressing.html';
});
catagories3.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Femine.html';
});
catagories4.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Pain.html';
});

//health consultancy

health1.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'lung_dieases.html';
});
health2.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'overWeight.html';
});
health3.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'femalehygine.html';
});
health4.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'joint.html';
});
health5.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'Tempreture.html';
});

cardClick.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Medicine.html';
});

cardClick2.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Wellness.html';
});

cardClick3.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Beauty_page.html';
});

cardClick4.addEventListener('click',(e) => {
  e.preventDefault();
  window.location.href = 'Ayurvedic.html';
});
// Ensure the cartSection displays items in a column
cartSection.style.display = 'none';
cartSection.style.flexDirection = 'row';
cartSection.style.gap = '10px'; // Adds space between items

// Add event listener to each product icon
icon.forEach(function(i) {
  i.addEventListener('click', function() {
    i.style.color = '#e815d6'; // Change the icon color to pink
  });
});

// Add event listener to each add to cart button
addCart.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get the details of the product (image, title, price)
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

    // Increment item count
    itemCount++;
    cart.textContent = itemCount;

    // Disable the button and change its text
    button.disabled = true;
    button.textContent = 'Added';
  });
});

// Toggle cart visibility
cartBtn.addEventListener('click', (e) => {
  if (cartSection.style.display === 'none') {
    cartSection.style.display = 'flex';
  } else {
    cartSection.style.display = 'none';
  }
});

// Toggle dark mode
toggle.addEventListener('click', function(event) {
  document.body.classList.toggle('darkMode');

  if (document.body.classList.contains('darkMode')) {
    toggle.innerHTML = '<i class="ri-sun-line">Light Mode</i>';
    // toggle.textContent = 'Light Mode';
    toggle.style.cursor = 'pointer';
    anchor.forEach(a => a.style.color = 'white');
  } else {
    toggle.innerHTML = '<i class="ri-moon-line">Dark Mode</i>';
    // toggle.textContent = 'Dark Mode';
    toggle.style.cursor = 'pointer';
    anchor.forEach(a => a.style.color = 'white');
  }
});
//Membership

member.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'membership.html';
});