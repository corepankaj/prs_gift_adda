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
    // Products data
    const products = [
        {
            id: 1,
            title: '10 in one game',
            price: 150,
            image: 'https://www.prsgiftadda.shop/products/img1.jpg',
            category: 'gifts'
        },
        {
            id: 2,
            title: 'Avengers 4',
            price: 220,
            image: 'https://www.prsgiftadda.shop/products/img2.jpg',
            category: 'gifts'
        },
        {
            id: 3,
            title: 'Doll',
            price: 210,
            image: 'https://www.prsgiftadda.shop/products/img3.jpg',
            category: 'gifts'
        },
        {
            id: 4,
            title: 'Doll',
            price: 210,
            image: 'https://www.prsgiftadda.shop/products/img4.jpg',
            category: 'gifts'
        },
        {
            id: 5,
            title: 'Game of Marbles',
            price: 170,
            image: 'https://www.prsgiftadda.shop/products/img5.jpg',
            category: 'office'
        },
        {
            id: 6,
            title: 'Water magic book',
            price: 75,
            image: 'https://www.prsgiftadda.shop/products/img6.jpg',
            category: 'gifts'
        },
        {
            id: 7,
            title: 'Roll Ball Tower',
            price: 345,
            image: 'https://www.prsgiftadda.shop/products/img7.jpg',
            category: 'gifts'
        },
        {
            id: 8,
            title: 'Water magic book',
            price: 75,
            image: 'https://www.prsgiftadda.shop/products/img8.jpg',
            category: 'gifts'
        },
        {
            id: 9,
            title: 'Water magic book',
            price: 75,
            image: 'https://www.prsgiftadda.shop/products/img9.jpg',
            category: 'gifts'
        },
        {
            id: 10,
            title: 'Peppa Pig Puzzle',
            price: 150,
            image: 'https://www.prsgiftadda.shop/products/img10.jpg',
            category: 'gifts'
        },
        {
            id: 11,
            title: 'Doraemon Puzzle',
            price: 150,
            image: 'https://www.prsgiftadda.shop/products/img11.jpg',
            category: 'gifts'
        },
        {
            id: 12,
            title: 'Doll',
            price: 210,
            image: 'https://www.prsgiftadda.shop/products/img12.jpg',
            category: 'gifts'
        },
        {
            id: 13,
            title: 'Barbie Puzzle',
            price: 150,
            image: 'https://www.prsgiftadda.shop/products/img13.jpg',
            category: 'gifts'
        },
        {
            id: 14,
            title: 'Ramp Racing',
            price: 400,
            image: 'https://www.prsgiftadda.shop/products/img14.jpg',
            category: 'gifts'
        },
        {
            id: 15,
            title: 'Avengers Puzzle',
            price: 150,
            image: 'https://www.prsgiftadda.shop/products/img15.jpg',
            category: 'gifts'
        },
        {
            id: 16,
            title: 'Avengers Puzzle',
            price: 150,
            image: 'https://www.prsgiftadda.shop/products/img16.jpg',
            category: 'gifts'
        },
        {
            id: 17,
            title: 'Pencil Box Case',
            price: 220,
            image: 'products/Stationery/IMG_1550.JPG',
            category: 'gifts'
        },
        {
            id: 18,
            title: 'Pencil Box Case',
            price: 220,
            image: 'products/Stationery/IMG_1551.JPG',
            category: 'gifts'
        },
        {
            id: 19,
            title: 'Pencil Box Case',
            price: 220,
            image: 'products/Stationery/IMG_1553.JPG',
            category: 'gifts'
        },
        {
            id: 20,
            title: 'Pencil Box Case',
            price: 220,
            image: 'products/Stationery/IMG_1555.JPG',
            category: 'gifts'
        },
        {
            id: 20,
            title: 'Pencil Box Case',
            price: 220,
            image: 'products/Stationery/IMG_1556.JPG',
            category: 'gifts'
        },
        {
            id: 20,
            title: 'Pencil Box Case',
            price: 220,
            image: 'products/Stationery/IMG_1557.JPG',
            category: 'gifts'
        },
        {
            id: 21,
            title: 'Tube Slime',
            price: 40,
            image: 'products/Stationery/IMG_E1518.JPG',
            category: 'stationery'
        },
        {
            id: 22,
            title: '',
            price: 40,
            image: 'products/Stationery/IMG_1525.JPG',
            category: 'stationery'
        },
        {
            id: 23,
            title: 'Pen',
            price: 40,
            image: 'products/Stationery/IMG_1532.JPG',
            category: 'stationery'
        },
        {
            id: 24,
            title: 'Pen',
            price: 20,
            image: 'products/Stationery/IMG_1531.JPG',
            category: 'stationery'
        },
        {
            id: 25,
            title: 'Pen 1 pice',
            price: 20,
            image: 'products/Stationery/IMG_1535.JPG',
            category: 'stationery'
        },
        {
            id: 26,
            title: 'Pen 1 pice',
            price: 20,
            image: 'products/Stationery/IMG_1536.JPG',
            category: 'stationery'
        },
        {
            id: 27,
            title: 'Pen 1 pice',
            price: 20,
            image: 'products/Stationery/IMG_1537.JPG',
            category: 'stationery'
        },
        {
            id: 28,
            title: 'Pen 1 pice',
            price: 20,
            image: 'products/Stationery/IMG_1542.JPG',
            category: 'stationery'
        },
        {
            id: 29,
            title: 'Eraser 1 pice',
            price: 20,
            image: 'products/Stationery/IMG_1543.JPG',
            category: 'stationery'
        },
        {
            id: 30,
            title: 'Clay 1 pice',
            price: 40,
            image: 'products/Stationery/IMG_1547.JPG',
            category: 'stationery'
        },
        {
            id: 30,
            title: 'Box 1 pice',
            price: 80,
            image: 'products/Stationery/IMG_1549.JPG',
            category: 'stationery'
        },
        {
            id: 31,
            title: 'Box',
            price: 90,
            image: 'products/Stationery/IMG_1562.JPG',
            category: 'stationery'
        },
        {
            id: 32,
            title: 'Box',
            price: 90,
            image: 'products/Stationery/IMG_1563.JPG',
            category: 'stationery'
        },
        {
            id: 33,
            title: 'Box',
            price: 90,
            image: 'products/Stationery/IMG_1564.JPG',
            category: 'stationery'
        },
        {
            id: 34,
            title: 'Box',
            price: 90,
            image: 'products/Stationery/IMG_1565.JPG',
            category: 'stationery'
        },
        {
            id: 35,
            title: 'Box',
            price: 90,
            image: 'products/Stationery/IMG_1566.JPG',
            category: 'stationery'
        },
        {
            id: 36,
            title: '',
            price: 80,
            image: 'products/Stationery/IMG_1572.JPG',
            category: 'stationery'
        },
        {
            id: 37,
            title: '',
            price: 80,
            image: 'products/Stationery/IMG_1573.JPG',
            category: 'stationery'
        },
        {
            id: 38,
            title: '',
            price: 80,
            image: 'products/Stationery/IMG_1574.JPG',
            category: 'stationery'
        },
        {
            id: 39,
            title: 'Bubble Stick',
            price: 20,
            image: 'products/Stationery/IMG_1576.JPG',
            category: 'stationery'
        },
        {
            id: 40,
            title: 'Slime 1 pice',
            price: 10,
            image: 'products/Stationery/IMG_1577.JPG',
            category: 'stationery'
        },
        {
            id: 41,
            title: 'Slime 1 pice',
            price: 5,
            image: 'products/Stationery/IMG_1578.JPG',
            category: 'stationery'
        },
        {
            id: 42,
            title: 'Slime 1 pice',
            price: 20,
            image: 'products/Stationery/IMG_1579.JPG',
            category: 'stationery'
        },
        {
            id: 43,
            title: 'Eraser 1 pice',
            price: 10,
            image: 'products/Stationery/IMG_1583.JPG',
            category: 'stationery'
        },
        {
            id: 44,
            title: 'Eraser 1 pice',
            price: 10,
            image: 'products/Stationery/IMG_1584.JPG',
            category: 'stationery'
        },
        {
            id: 45,
            title: '',
            price: 35,
            image: 'products/Gift/IMG_1509.JPG',
            category: 'gifts'
        },
        {
            id: 46,
            title: '',
            price: 20,
            image: 'products/Gift/IMG_1510.JPG',
            category: 'gifts'
        },
        {
            id: 47,
            title: '',
            price: 20,
            image: 'products/Gift/IMG_1511.jpg',
            category: 'gifts'
        },
        {
            id: 48,
            title: '',
            price: 60,
            image: 'products/Gift/IMG_1512.jpg',
            category: 'gifts'
        },
        {
            id: 49,
            title: '',
            price: 80,
            image: 'products/Gift/IMG_1516.jpg',
            category: 'gifts'
        },
        {
            id: 50,
            title: '',
            price: 500,
            image: 'products/Gift/IMG_1515.JPG',
            category: 'gifts'
        },
        {
            id: 51,
            title: '',
            price: 30,
            image: 'products/Gift/IMG_1520.JPG',
            category: 'gifts'
        },
        {
            id: 52,
            title: '',
            price: 50,
            image: 'products/Gift/IMG_1522.JPG',
            category: 'gifts'
        },
        {
            id: 53,
            title: '',
            price: 50,
            image: 'products/Gift/IMG_1523.JPG',
            category: 'gifts'
        },
        {
            id: 54,
            title: 'Talking Cat',
            price: 220,
            image: 'products/Gift/IMG_1526.JPG',
            category: 'gifts'
        },
        {
            id: 55,
            title: '',
            price: 40,
            image: 'products/Gift/IMG_1527.JPG',
            category: 'gifts'
        },
        {
            id: 56,
            title: '',
            price: 200,
            image: 'products/Gift/IMG_1528.JPG',
            category: 'gifts'
        },
        {
            id: 57,
            title: 'Watch 1 pice',
            price: 40,
            image: 'products/Gift/IMG_1559.JPG',
            category: 'gifts'
        },
        {
            id: 58,
            title: 'Watch 1 pice',
            price: 60,
            image: 'products/Gift/IMG_1560.jpg',
            category: 'gifts'
        },
        {
            id: 59,
            title: 'Watch 1 pice',
            price: 100,
            image: 'products/Gift/IMG_1561.JPG',
            category: 'gifts'
        },
        {
            id: 60,
            title: '1 pice',
            price: 30,
            image: 'products/Gift/IMG_1567.JPG',
            category: 'gifts'
        },
        {
            id: 61,
            title: '',
            price: 170,
            image: 'products/Gift/IMG_1570.JPG',
            category: 'gifts'
        },
        {
            id: 62,
            title: '',
            price: 170,
            image: 'products/Gift/IMG_1600.JPG',
            category: 'gifts'
        },
        {
            id: 63,
            title: '',
            price: 45,
            image: 'products/Gift/IMG_1601.JPG',
            category: 'gifts'
        },
        {
            id: 64,
            title: '',
            price: 45,
            image: 'products/Gift/IMG_1602.JPG',
            category: 'gifts'
        },
        {
            id: 65,
            title: '',
            price: 170,
            image: 'products/Gift/IMG_1603.JPG',
            category: 'gifts'
        },
        {
            id: 66,
            title: '',
            price: 60,
            image: 'products/Gift/IMG_1605.JPG',
            category: 'gifts'
        },
        {
            id: 67,
            title: '',
            price: 60,
            image: 'products/Gift/IMG_1606.JPG',
            category: 'gifts'
        },
        {
            id: 68,
            title: '',
            price: 45,
            image: 'products/Gift/IMG_1607.JPG',
            category: 'gifts'
        },
        {
            id: 69,
            title: '',
            price: 40,
            image: 'products/Gift/IMG_E1538.JPG',
            category: 'gifts'
        },
        {
            id: 70,
            title: '',
            price: 460,
            image: 'products/Gift/IMG_E1541.JPG',
            category: 'gifts'
        },
        {
            id: 71,
            title: '',
            price: 400,
            image: 'products/Gift/IMG_E1546.JPG',
            category: 'gifts'
        },
        {
            id: 72,
            title: '',
            price: 320,
            image: 'products/Gift/IMG_E1545.JPG',
            category: 'gifts'
        },
        {
            id: 73,
            title: 'Box 1 pice',
            price: 80,
            image: 'products/Gift/IMG_E1549.JPG',
            category: 'gifts'
        },
        {
            id: 74,
            title: 'Birthday Gift',
            price: 160,
            image: 'products/brithday/IMG_1539.JPG',
            category: 'brithday'
        },
        {
            id: 75,
            title: 'Birthday Gift',
            price: 70,
            image: 'products/brithday/IMG_1580.JPG',
            category: 'brithday'
        },
        {
            id: 75,
            title: 'Birthday Gift',
            price: 160,
            image: 'products/brithday/IMG_E1539.JPG',
            category: 'brithday'
        },
        {
            id: 75,
            title: 'Birthday Gift',
            price: 30,
            image: 'products/brithday/IMG_1581.JPG',
            category: 'brithday'
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
                    <p class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)} (${item.quantity} x ₹${item.price.toFixed(2)})</p>
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
        document.querySelector('.total-price').textContent = `₹${total.toFixed(2)}`;
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


