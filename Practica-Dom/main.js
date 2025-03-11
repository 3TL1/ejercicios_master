const products = [
    {
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
        name: 'Lenovo IdeaPad 3',
        price: 749,
        stars: 4.5,
        reviews: 120,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1051/10516134/1321-lenovo-ideapad-3-15itl6-intel-core-i7-1165g7-16gb-512gb-ssd-156.jpg'
    },
    {
        name: 'ASUS VivoBook Pro',
        price: 949,
        stars: 4.2,
        reviews: 300,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1062/10621155/1655-asus-vivobook-pro-15-oled-m6500qc-l110w-amd-ryzen-7-5800h-16gb-512gb-ssd-rtx-3050-156.jpg'
    }
];

function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('article');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: <strong>${product.price}€</strong></p>
            <p>Valoración: ⭐ ${product.stars} (${product.reviews} opiniones)</p>
            <p>Vendedor: ${product.seller}</p>
        `;

        container.appendChild(productCard);
    });
}

function applyFilter() {
    const maxPrice = document.getElementById('price-filter').value;
    if (!maxPrice) {
        renderProducts();
        return;
    }

    const filteredProducts = products.filter(product => product.price <= maxPrice);
    
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('article');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: <strong>${product.price}€</strong></p>
            <p>Valoración: ⭐ ${product.stars} (${product.reviews} opiniones)</p>
            <p>Vendedor: ${product.seller}</p>
        `;

        container.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
