document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const productGrid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Cart state
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Products data
    const products = [
        {
            id: 1,
            title: '10 in one game',
            price: 150,
            image: 'products/img1.jpg',
            category: 'gifts'
        },
        {
            id: 2,
            title: 'Avengers 4',
            price: 220,
            image: 'products/img2.jpg',
            category: 'gifts'
        },
        {
            id: 3,
            title: 'Doll',
            price: 210,
            image: 'products/img3.jpg',
            category: 'gifts'
        },
        {
            id: 4,
            title: 'Doll',
            price: 210,
            image: 'products/img4.jpg',
            category: 'gifts'
        },
        {
            id: 5,
            title: 'Game of Marbles',
            price: 170,
            image: 'products/img5.jpg',
            category: 'office'
        }
        
    ];

    // Initialize the app
    function init() {
        renderProducts(products);
        updateCartCount();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Cart toggle
        cartBtn.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
        
        // Overlay click
        overlay.addEventListener('click', function() {
            toggleMobileMenu();
            toggleCart();
        });
        
        // Filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', filterProducts);
        });
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Toggle cart sidebar
    function toggleCart() {
        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        if (cartSidebar.classList.contains('active')) {
            renderCartItems();
        }
    }

    // Render products to the grid
    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';
        
        productsToRender.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card fade-in';
            productCard.style.animationDelay = `${index * 0.1}s`;
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <p class="product-title">${product.title}</p>
                    <p class="product-price">₹${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', addToCart);
        });
    }

    // Filter products by category
    function filterProducts(e) {
        const filter = e.target.dataset.filter;
        
        // Update active filter button
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        
        // Filter products
        let filteredProducts = [];
        if (filter === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === filter);
        }
        
        renderProducts(filteredProducts);
    }

    // Add item to cart
    function addToCart(e) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        
        // Check if item already exists in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Update cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartCount();
        
        // Show feedback
        showAddedToCartFeedback(e.target);
    }

    // Show feedback when item is added to cart
    function showAddedToCartFeedback(button) {
        button.textContent = 'Added!';
        button.style.backgroundColor = 'var(--success-color)';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = 'var(--primary-color)';
        }, 1500);
    }

    // Update cart count in header
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }

    // Render cart items in sidebar
    function renderCartItems() {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
            return;
        }
        
        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} (${item.quantity} x $${item.price.toFixed(2)})</p>
                    <button class="cart-item-remove" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', removeFromCart);
        });
        
        // Update total
        updateCartTotal();
    }

    // Remove item from cart
    function removeFromCart(e) {
        const productId = parseInt(e.target.dataset.id);
        cart = cart.filter(item => item.id !== productId);
        
        // Update cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartCount();
        renderCartItems();
    }

    // Update cart total
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }

    // Initialize the app
    init();

document.getElementById('checkoutButton').addEventListener('click', function () {
    const phone = document.getElementById('userPhone').value.trim();
    if (!phone) {
        alert('Please enter your phone number.');
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    let message = `📦 *New Order from PRS Gift Adda*%0A`;
    message += `📞 Phone: ${phone}%0A`;
    message += `🛒 *Cart Details:*%0A`;


    cart.forEach(item => {
    message += `• ${item.title} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}%0A`;
    message += `📷 View Image: ${encodeURIComponent(item.image)}%0A`;
});



    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `➕ Total: ₹${total.toFixed(2)}%0A`;

    // Replace the number below with your WhatsApp number (in international format, no + or dashes)
    const shopNumber = '919654066919';

    const whatsappUrl = `https://wa.me/${shopNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

    
});


