// Daftar produk dengan gambar
const products = [
    { id: 1, name: 'ALAMI', price: 2000, img: 'alami.jpg' },
    { id: 2, name: 'KUSUKA', price: 3000, img: 'ks.jpg' },
    { id: 3, name: 'HAPPY TOS', price: 5000, img: 'hts.jpg' },
    { id: 4, name: 'ICITAN', price: 5000, img: 'minuman.jpg' },
    { id: 5, name: 'NESCAFE', price: 5000, img: 'nes.jpg' },
    { id: 6, name: 'PULPY', price: 5000, img: 'pp.jpg' },
];

// Keranjang belanja
let cart = [];

// Fungsi untuk menampilkan daftar produk
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.img}" width="100">
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Tambah ke Keranjang
            </button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Fungsi untuk menambah produk ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Fungsi untuk menampilkan isi keranjang
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');

        listItem.textContent =
            `${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;

        cartItemsContainer.appendChild(listItem);

        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

// Fungsi checkout
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang anda kosong.');
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const payment = prompt(
        `Total belanja anda Rp ${total}. Masukkan jumlah pembayaran:`
    );

    if (payment >= total) {
        alert(
            `Pembayaran berhasil. Kembalian anda: Rp ${payment - total}`
        );

        cart = [];
        updateCart();
    } else {
        alert('Uang anda tidak mencukupi.');
    }
}

// Event tombol checkout
document
    .getElementById('checkout-btn')
    .addEventListener('click', checkout);
