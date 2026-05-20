// Daftar produk dengan gambar 
const products = [
    { id: 1, name: 'ALAMI', price: 2000, img: 'c:\Users\LABTKJ01\Pictures\happy tos.htm' },
    { id: 2, name: 'KUSUKA', price: 3000, img: 'img/ks.jpg' },
    { id: 3, name: 'HAPPY TOS', price: 5000, img: 'img/hts.jpg' },
    { id: 4, name: 'icitan', price: 5000, img: 'img/minuman.jpg' },
    { id: 5, name: 'NESCAFE', price: 5000, img: 'img/nes.jpg' },
    { id: 6, name: 'PULPY', price: 5000, img: 'img/pp.jpg' },


];

// keranjang belanja
let cart = [];

// fungsi untuk menampilkan dartar produk
function displayproducts() {
    const poductscontainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `...
        `;
        productscontainer.appendchild(productDiv);
    });
}

// fungsi untuk menambah produk ke keranjang belanja
function addTonCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1});
    }
    updateCart();
}

// fungsi untuk menampilkan isi keranjang belanja
function updateCart() {
    const cartItemContainer = document.getElementById('catr-items');
    catrItemsContainer.innerHTML ='';

    let totalprice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent =`${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;
        
        totalprice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent =totalprice;
}

// fungsi untuk melakukan checkout
function checkout() {
    if (cart.length === 0) {
        alert('keranjang anda kosong.');
        return;
    }

    const total = cart.reduce((sum,item) => sum + item.price * item.quantity, 0);
    const payment = promt('total belanja anda Rp ${total}. masukan jumlah pembayaran:');

    if (payment >= total) {
        alert('pembayaran berhasil kembalian anda: Rp ${payment - total}`');
        updateCart();
    } else {
        alert('uang anda tidak mencukupi.');
    }
}

// Event listener untuk tombol checkout
document.getElementById('checkout-btn').addEventListener('click', checkout);

// tampilkan produk saat halaman dimuat
displayproducts();