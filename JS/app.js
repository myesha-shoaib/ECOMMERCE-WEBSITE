const seed = [
    { id: 1, name: 'Nova Smart Watch', category: 'Electronics', price: 12999, stock: 14, rating: 4.8, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', description: 'AMOLED display, fitness tracking and 7-day battery.' },
    { id: 2, name: 'Studio Pro Headphones', category: 'Electronics', price: 8999, stock: 9, rating: 4.7, badge: 'Trending', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80', description: 'Wireless headphones with deep bass and clear calls.' },
    { id: 3, name: 'Velocity Sneakers', category: 'Fashion', price: 5999, stock: 20, rating: 4.9, badge: 'Popular', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', description: 'Lightweight sneakers with premium grip and comfort.' },
    { id: 4, name: 'Urban Laptop Backpack', category: 'Bags', price: 4499, stock: 17, rating: 4.6, badge: 'New', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80', description: 'Water resistant backpack with padded laptop section.' },
    { id: 5, name: 'Signature Perfume', category: 'Beauty', price: 7499, stock: 8, rating: 4.8, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80', description: 'Long lasting fragrance with premium notes.' },
    { id: 6, name: 'Minimal Desk Lamp', category: 'Home', price: 3299, stock: 11, rating: 4.5, badge: 'Home', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80', description: 'Warm adjustable light for study and work.' },
    { id: 7, name: 'Classic Leather Wallet', category: 'Accessories', price: 1999, stock: 25, rating: 4.5, badge: 'Classic', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80', description: 'Slim leather wallet with multiple card slots.' },
    { id: 8, name: 'Bluetooth Speaker X', category: 'Electronics', price: 6499, stock: 7, rating: 4.7, badge: 'Hot', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80', description: 'Portable speaker with punchy bass and 12-hour battery.' },
    { id: 9, name: 'Premium Hand Bag', category: 'Bags', price: 9999, stock: 6, rating: 4.9, badge: 'Premium', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80', description: 'Elegant design with spacious compartments.' },
    { id: 10, name: 'Essential T-Shirt', category: 'Fashion', price: 2299, stock: 30, rating: 4.4, badge: 'Everyday', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', description: 'Soft cotton tee with clean modern fit.' },
    { id: 11, name: 'Mechanical Keyboard', category: 'Electronics', price: 10999, stock: 5, rating: 4.8, badge: 'Gaming', image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=80', description: 'Mechanical switches with RGB backlighting.' },
    { id: 12, name: 'Skin Care Essentials', category: 'Beauty', price: 5499, stock: 12, rating: 4.6, badge: 'Care', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80', description: 'Daily skin care bundle for cleansing and hydration.' }
];
const LS = { get: (k, f) => JSON.parse(localStorage.getItem(k) || JSON.stringify(f)), set: (k, v) => localStorage.setItem(k, JSON.stringify(v)) };
function init() {
    if (!localStorage.getItem('products')) {
        LS.set('products', seed);
    }

    injectShell();
    initMobileMenu();
    updateBadges();
}
function injectShell() {
    const headerShell = document.querySelector('[data-shell="header"]');
    const footerShell = document.querySelector('[data-shell="footer"]');

    if (headerShell) {
        headerShell.innerHTML = `
            <header class="header">
                <div class="container nav">

                    <a class="brand" href="index.html">
                        Nexa<span>Mart</span>
                    </a>

                    <button
                        class="menu-toggle"
                        id="menu-toggle"
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded="false"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav class="links" id="main-nav">
                        <a href="index.html">Home</a>         
                        <a href="wishlist.html">Wishlist</a>
                        <a href="account.html">Account</a>
                        <a href="track.html">Track</a>
                        <a href="faq.html">FAQ</a>
                        <a href="contact.html">Contact</a>
                        <a href="admin.html">Admin</a>
                    </nav>

                    <div class="actions">
                        <button
                            class="icon theme-button"
                            type="button"
                            onclick="toggleTheme()"
                            aria-label="Change theme"
                        >
                            ◐
                        </button>

                        <a
                            class="icon wishlist-button"
                            href="wishlist.html"
                            aria-label="Wishlist"
                        >
                            ♥
                            <span class="badge" id="wishCount">0</span>
                        </a>

                        <a
                            class="icon cart-button"
                            href="cart.html"
                            aria-label="Shopping cart"
                        >
                            Cart
                            <span class="badge" id="cartCount">0</span>
                        </a>
                    </div>

                </div>
            </header>
        `;
    }

    if (footerShell) {
        footerShell.innerHTML = `
            <footer class="footer">
                <div class="container row">
                    <div>
                        <strong>NexaMart</strong>
                        <div>
                            Real-world frontend demo using HTML, CSS and JavaScript.
                        </div>
                    </div>

                    <div>© 2026</div>
                </div>
            </footer>
        `;
    }

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
}
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();

        const isOpen = mainNav.classList.toggle('open');

        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    document.addEventListener('click', function (event) {
        const clickedInsideMenu = mainNav.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMobileMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 899) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}
function toggleTheme() { document.body.classList.toggle('dark'); localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light') }
function money(v) { return 'Rs. ' + Number(v).toLocaleString('en-PK') }
function toast(m) { let t = document.querySelector('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t) } t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 1800) }
function products() { return LS.get('products', seed) } function cart() { return LS.get('cart', []) } function wishes() { return LS.get('wishlist', []) } function user() { return LS.get('currentUser', null) } function orders() { return LS.get('orders', []) }
function updateBadges() { const c = document.getElementById('cartCount'), w = document.getElementById('wishCount'); if (c) c.textContent = cart().reduce((s, i) => s + i.qty, 0); if (w) w.textContent = wishes().length }
function card(p) { const wished = wishes().includes(p.id); return `<article class="card product"><img src="${p.image}" alt="${p.name}"><div class="product-body"><div class="row"><span class="pill">${p.badge}</span><button class="icon" onclick="toggleWish(${p.id})">${wished ? '♥' : '♡'}</button></div><h3>${p.name}</h3><div class="muted">${p.category} · ★ ${p.rating}</div><p class="muted">${p.description}</p><div class="row"><div class="price">${money(p.price)}</div><span class="pill">${p.stock} in stock</span></div><div class="product-actions"><a class="btn secondary" href="product.html?id=${p.id}">View</a><button class="btn" onclick="addCart(${p.id})">Add</button></div></div></article>` }
function renderFeatured() { const el = document.getElementById('featured'); if (el) el.innerHTML = products().slice(0, 8).map(card).join('') }
function addCart(id) { const p = products().find(x => x.id === id); let c = cart(); const ex = c.find(x => x.id === id); if (ex) ex.qty++; else c.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 }); LS.set('cart', c); updateBadges(); toast('Added to cart') }
function renderWishlist() { const list = products().filter(p => wishes().includes(p.id)); document.getElementById('wishGrid').innerHTML = list.length ? list.map(card).join('') : '<div class="card empty">Wishlist is empty.</div>' }
function renderProduct() { const id = Number(new URLSearchParams(location.search).get('id')); const p = products().find(x => x.id === id) || products()[0]; document.getElementById('productView').innerHTML = `<div class="card" style="padding:20px"><div class="hero" style="padding:0"><div class="hero-card"><img src="${p.image}" alt="${p.name}"></div><div><span class="eyebrow">${p.category}</span><h1 style="font-size:54px">${p.name}</h1><div class="price">${money(p.price)}</div><p>${p.description}</p><div class="field"><label>Size</label><select id="size"><option>Standard</option><option>Small</option><option>Medium</option><option>Large</option></select></div><div class="field"><label>Color</label><select id="color"><option>Black</option><option>White</option><option>Blue</option></select></div><div style="display:flex;gap:10px;margin-top:18px"><button class="btn" onclick="addCart(${p.id})">Add to Cart</button><button class="btn secondary" onclick="toggleWish(${p.id})">Wishlist</button></div></div></div></div>` }
function renderCart() { const c = cart(); const box = document.getElementById('cartItems'); if (!c.length) { box.innerHTML = '<div class="empty">Your cart is empty.</div>'; updateSummary(); return } box.innerHTML = c.map(i => `<div class="cart-item"><img src="${i.image}"><div><strong>${i.name}</strong><div class="muted">${money(i.price)}</div><div class="qty"><button onclick="qty(${i.id},-1)">−</button><b>${i.qty}</b><button onclick="qty(${i.id},1)">+</button></div></div><button class="btn danger" onclick="removeCart(${i.id})">Remove</button></div>`).join(''); updateSummary() }
function qty(id, d) { let c = cart(); const i = c.find(x => x.id === id); i.qty += d; if (i.qty <= 0) c = c.filter(x => x.id !== id); LS.set('cart', c); renderCart(); updateBadges() }
function removeCart(id) { LS.set('cart', cart().filter(x => x.id !== id)); renderCart(); updateBadges() }
function updateSummary() { const sub = cart().reduce((s, i) => s + i.price * i.qty, 0), delivery = sub >= 10000 || sub === 0 ? 0 : 250, total = sub + delivery;['sub', 'delivery', 'total'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = money(id === 'sub' ? sub : id === 'delivery' ? delivery : total) }) }
function goCheckout() { if (!cart().length) return toast('Cart is empty'); location.href = 'checkout.html' }
function register(e) { e.preventDefault(); LS.set('registeredUser', { name: regName.value, email: regEmail.value, password: regPass.value }); toast('Account created'); showLogin() }
function login(e) { e.preventDefault(); const r = LS.get('registeredUser', null); if (!r || r.email !== logEmail.value || r.password !== logPass.value) return toast('Invalid login'); LS.set('currentUser', { name: r.name, email: r.email }); toast('Login successful'); setTimeout(() => location.href = 'account.html', 500) }
function logout() { localStorage.removeItem('currentUser'); location.reload() }
function renderAccount() { const u = user(); document.getElementById('accountBox').innerHTML = u ? `<div class="card auth"><span class="eyebrow">My Account</span><h2>${u.name}</h2><p class="muted">${u.email}</p><div class="notice">You are logged in and can place orders.</div><button class="btn danger full" style="margin-top:14px" onclick="logout()">Logout</button></div>` : `<div class="card auth"><h2>Please login</h2><p class="muted">Login is required before placing an order.</p><a class="btn full" href="login.html">Go to Login</a></div>` }
function placeOrder(e) { e.preventDefault(); if (!user()) { alert('Please login first before placing your order.'); location.href = 'login.html'; return } if (!cart().length) return toast('Cart is empty'); const sub = cart().reduce((s, i) => s + i.price * i.qty, 0), delivery = sub >= 10000 ? 0 : 250; const order = { id: 'ORD-' + Date.now(), date: new Date().toLocaleString(), status: 'Processing', total: sub + delivery, items: cart(), customer: user(), address: address.value, phone: phone.value }; LS.set('orders', [order, ...orders()]); LS.set('cart', []); location.href = 'account.html' }
function renderOrders() { const el = document.getElementById('orders'); if (!el) return; const list = orders(); el.innerHTML = list.length ? list.map(o => `<div class="card tool"><div class="row"><strong>${o.id}</strong><span class="pill">${o.status}</span></div><div class="muted">${o.date}</div><h3>${money(o.total)}</h3><button class="btn secondary" onclick="printOrder('${o.id}')">Print Invoice</button></div>`).join('') : '<div class="card empty">No orders yet.</div>' }
function printOrder(id) { const o = orders().find(x => x.id === id); const w = open('', '', 'width=700,height=800'); w.document.write(`<h1>NexaMart Invoice</h1><p>${o.id}</p><p>${o.date}</p><hr>${o.items.map(i => `<p>${i.name} × ${i.qty} — ${money(i.price * i.qty)}</p>`).join('')}<hr><h2>Total: ${money(o.total)}</h2>`); w.print() }
function renderAdmin() { const box = document.getElementById('adminList'); box.innerHTML = products().map(p => `<div class="admin-row"><img src="${p.image}"><div><strong>${p.name}</strong><div class="muted">${p.category} · ${money(p.price)} · Stock ${p.stock}</div></div><div><button class="btn secondary" onclick="editAdmin(${p.id})">Edit</button> <button class="btn danger" onclick="deleteAdmin(${p.id})">Delete</button></div></div>`).join('') }
function saveAdmin(e) { e.preventDefault(); let list = products(); const id = Number(adminId.value) || Date.now(); const p = { id, name: adminName.value, category: adminCategory.value, price: Number(adminPrice.value), stock: Number(adminStock.value), rating: Number(adminRating.value), badge: adminBadge.value, image: adminImage.value, description: adminDescription.value }; const i = list.findIndex(x => x.id === id); if (i >= 0) list[i] = p; else list.unshift(p); LS.set('products', list); e.target.reset(); adminId.value = ''; renderAdmin(); toast('Product saved') }
function editAdmin(id) { const p = products().find(x => x.id === id); adminId.value = p.id; adminName.value = p.name; adminCategory.value = p.category; adminPrice.value = p.price; adminStock.value = p.stock; adminRating.value = p.rating; adminBadge.value = p.badge; adminImage.value = p.image; adminDescription.value = p.description; scrollTo({ top: 0, behavior: 'smooth' }) }
function deleteAdmin(id) { if (!confirm('Delete product?')) return; LS.set('products', products().filter(x => x.id !== id)); renderAdmin() }
function showLogin() { document.getElementById('loginForm').hidden = false; document.getElementById('registerForm').hidden = true; document.querySelectorAll('.tabs button')[0].classList.add('active'); document.querySelectorAll('.tabs button')[1].classList.remove('active') }
function showRegister() { document.getElementById('loginForm').hidden = true; document.getElementById('registerForm').hidden = false; document.querySelectorAll('.tabs button')[1].classList.add('active'); document.querySelectorAll('.tabs button')[0].classList.remove('active') }
document.addEventListener('DOMContentLoaded', init);

/* ===== Extended real-world modules ===== */
function reviews() { return LS.get('reviews', {}) }
function addresses() { return LS.get('addresses', []) }
function subscriptions() { return LS.get('subscriptions', []) }
function contacts() { return LS.get('contacts', []) }

function renderDashboardMetrics() {
    const el = document.getElementById('dashboardMetrics'); if (!el) return; const os = orders(), spent = os.filter(o => o.status !== 'Cancelled').reduce((s, o) => s + o.total, 0); el.innerHTML = `
<div class="card metric"><span>Total Orders</span><strong>${os.length}</strong></div>
<div class="card metric"><span>Total Spent</span><strong>${money(spent)}</strong></div>
<div class="card metric"><span>Wishlist</span><strong>${wishes().length}</strong></div>
<div class="card metric"><span>Saved Addresses</span><strong>${addresses().length}</strong></div>`
}

function renderProduct() {
    const id = Number(new URLSearchParams(location.search).get('id')); const p = products().find(x => x.id === id) || products()[0]; rememberRecent(p.id); const list = reviews()[p.id] || []; document.getElementById('productView').innerHTML = `
<div class="card" style="padding:20px"><div class="hero" style="padding:0"><div class="hero-card"><img src="${p.image}" alt="${p.name}"></div><div><span class="eyebrow">${p.category}</span><h1 style="font-size:54px">${p.name}</h1><div class="price">${money(p.price)}</div><p>${p.description}</p><p class="muted">★ ${p.rating} · ${p.stock} units available · 7-day return</p><div class="field"><label>Size</label><select id="size"><option>Standard</option><option>Small</option><option>Medium</option><option>Large</option></select></div><div class="field"><label>Color</label><select id="color"><option>Black</option><option>White</option><option>Blue</option></select></div><div style="display:flex;gap:10px;margin-top:18px"><button class="btn" onclick="addCart(${p.id})">Add to Cart</button><button class="btn secondary" onclick="toggleWish(${p.id})">Wishlist</button></div></div></div></div>
<section class="section"><div class="section-head"><div><span class="eyebrow">Customer feedback</span><h2>Reviews</h2></div><p>${list.length} verified-style review(s)</p></div><div class="card">${list.length ? list.map(r => `<div class="review"><div class="row"><strong>${r.name}</strong><span class="stars">${'★'.repeat(r.rating)}</span></div><p class="muted">${r.comment}</p><small>${r.date}</small></div>`).join('') : '<div class="empty">No reviews yet.</div>'}</div><form class="card review-form" onsubmit="addReview(event,${p.id})"><h3>Write a review</h3><div class="field"><label>Rating</label><select id="reviewRating"><option value="5">5 Stars</option><option value="4">4 Stars</option><option value="3">3 Stars</option><option value="2">2 Stars</option><option value="1">1 Star</option></select></div><div class="field"><label>Comment</label><textarea id="reviewComment" required placeholder="Share your experience"></textarea></div><button class="btn">Submit review</button></form></section>`
}

function addReview(e, id) { e.preventDefault(); const u = user(); if (!u) { alert('Please login first to submit a review.'); location.href = 'login.html'; return } const all = reviews(); all[id] = all[id] || []; all[id].unshift({ name: u.name, rating: Number(reviewRating.value), comment: reviewComment.value, date: new Date().toLocaleDateString() }); LS.set('reviews', all); toast('Review submitted'); renderProduct() }
function rememberRecent(id) { let r = LS.get('recent', []).filter(x => x !== id); r.unshift(id); LS.set('recent', r.slice(0, 6)) }
function renderRecent() { const el = document.getElementById('recentGrid'); if (!el) return; const ids = LS.get('recent', []); const list = ids.map(id => products().find(p => p.id === id)).filter(Boolean); el.innerHTML = list.length ? list.map(card).join('') : '<div class="card empty">No recently viewed products.</div>' }

function renderAccount() { const u = user(); document.getElementById('accountBox').innerHTML = u ? `<div class="card auth"><span class="eyebrow">My Account</span><h2>${u.name}</h2><p class="muted">${u.email}</p><div class="notice">You are logged in and can place orders.</div><button class="btn danger full" style="margin-top:14px" onclick="logout()">Logout</button></div>` : `<div class="card auth"><h2>Please login</h2><p class="muted">Login is required before placing an order.</p><a class="btn full" href="login.html">Go to Login</a></div>`; renderDashboardMetrics(); renderAddresses() }
function saveAddress(e) { e.preventDefault(); const item = { id: Date.now(), title: addrTitle.value, name: addrName.value, phone: addrPhone.value, city: addrCity.value, address: addrText.value }; LS.set('addresses', [item, ...addresses()]); e.target.reset(); renderAddresses(); renderDashboardMetrics(); toast('Address saved') }
function renderAddresses() { const el = document.getElementById('addressGrid'); if (!el) return; const list = addresses(); el.innerHTML = list.length ? list.map(a => `<div class="card address-card"><div class="row"><strong>${a.title}</strong><button class="icon" onclick="deleteAddress(${a.id})">×</button></div><p>${a.name} · ${a.phone}</p><p class="muted">${a.address}, ${a.city}</p></div>`).join('') : '<div class="card empty">No saved addresses.</div>' }
function deleteAddress(id) { LS.set('addresses', addresses().filter(a => a.id !== id)); renderAddresses(); renderDashboardMetrics() }

function renderOrders() { const el = document.getElementById('orders'); if (!el) return; const list = orders(); el.innerHTML = list.length ? list.map(o => `<div class="card tool ${o.status === 'Cancelled' ? 'cancelled' : ''}"><div class="row"><strong>${o.id}</strong><span class="pill">${o.status}</span></div><div class="muted">${o.date}</div><h3>${money(o.total)}</h3><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn secondary" onclick="printOrder('${o.id}')">Print Invoice</button><a class="btn secondary" href="track.html?id=${o.id}">Track</a>${o.status === 'Processing' ? `<button class="btn danger" onclick="cancelOrder('${o.id}')">Cancel</button>` : ''}</div></div>`).join('') : '<div class="card empty">No orders yet.</div>'; renderDashboardMetrics() }
function cancelOrder(id) { if (!confirm('Cancel this order?')) return; const list = orders(); const o = list.find(x => x.id === id); if (o) o.status = 'Cancelled'; LS.set('orders', list); renderOrders(); toast('Order cancelled') }
function renderTracking() { const id = new URLSearchParams(location.search).get('id'); const o = orders().find(x => x.id === id); const el = document.getElementById('trackingBox'); if (!o) { el.innerHTML = '<div class="card empty">Order not found.</div>'; return } const steps = ['Processing', 'Packed', 'Shipped', 'Delivered']; const active = o.status === 'Cancelled' ? -1 : steps.indexOf(o.status); el.innerHTML = `<div class="card auth"><span class="eyebrow">Order tracking</span><h2>${o.id}</h2><p>${o.date} · ${money(o.total)}</p>${o.status === 'Cancelled' ? '<div class="notice danger-text">This order was cancelled.</div>' : `<div class="tracker">${steps.map((s, i) => `<div class="track-step ${i <= active ? 'active' : ''}"><strong>${s}</strong></div>`).join('')}</div>`}</div>` }

function subscribeNewsletter(e) { e.preventDefault(); const email = newsEmail.value.trim(); const list = subscriptions(); if (!list.includes(email)) list.push(email); LS.set('subscriptions', list); e.target.reset(); toast('Subscribed successfully') }
function submitContact(e) { e.preventDefault(); LS.set('contacts', [{ id: Date.now(), name: contactName.value, email: contactEmail.value, subject: contactSubject.value, message: contactMessage.value, status: 'New' }, ...contacts()]); e.target.reset(); toast('Message sent successfully') }
function renderAdminStats() { const el = document.getElementById('adminStats'); if (!el) return; el.innerHTML = `<div class="card metric"><span>Products</span><strong>${products().length}</strong></div><div class="card metric"><span>Orders</span><strong>${orders().length}</strong></div><div class="card metric"><span>Subscribers</span><strong>${subscriptions().length}</strong></div><div class="card metric"><span>Messages</span><strong>${contacts().length}</strong></div>` }
function renderAdmin() { const box = document.getElementById('adminList'); box.innerHTML = products().map(p => `<div class="admin-row"><img src="${p.image}"><div><strong>${p.name}</strong><div class="muted">${p.category} · ${money(p.price)} · Stock ${p.stock}</div></div><div><button class="btn secondary" onclick="editAdmin(${p.id})">Edit</button> <button class="btn danger" onclick="deleteAdmin(${p.id})">Delete</button></div></div>`).join(''); renderAdminStats() }
