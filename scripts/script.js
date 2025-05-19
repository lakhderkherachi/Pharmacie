// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const hamburgerIcon = document.querySelector('.hamburger i');
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-times');
}

// Subscription Form Modal
function showSubscriptionForm(plan) {
    const modal = document.getElementById('subscription-modal');
    const selectedPlan = document.getElementById('selected-plan');
    selectedPlan.textContent = plan.charAt(0).toUpperCase() + plan.slice(1);
    document.getElementById('subscription-form').dataset.plan = plan;
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

function closeSubscriptionForm() {
    const modal = document.getElementById('subscription-modal');
    modal.classList.remove('fade-in');
    setTimeout(() => modal.style.display = 'none', 500);
}

async function handleSubscription(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const plan = document.getElementById('subscription-form').dataset.plan;

    try {
        const response = await fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, plan }),
        });
        const data = await response.json();
        if (response.ok) {
            const stripe = Stripe('your_stripe_publishable_key');
            await stripe.redirectToCheckout({ sessionId: data.id });
        } else {
            alert(data.message || 'Subscription failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Login Form
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            window.location.href = 'pricing.html';
        } else {
            alert(data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Sign Up Form
async function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const name = document.getElementById('signup-name').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, password }),
        });
        const data = await response.json();
        if (response.ok) {
            alert('Sign up successful! Please log in.');
            window.location.href = 'login.html';
        } else {
            alert(data.message || 'Sign up failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Animation Trigger on Load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in, .slide-up, .slide-up-delay, .slide-up-delay2, .slide-up-delay3').forEach(element => {
        element.style.opacity = '1';
    });
});
// Existing code (hamburger, subscription, login, signup) remains...

// FAQ Modal Functions
function showFAQModal() {
    const modal = document.getElementById('faq-modal');
    modal.style.display = 'block';
    modal.classList.add('fade-in');
    // Add click event to toggle FAQ answers
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    });
}

function closeFAQModal() {
    const modal = document.getElementById('faq-modal');
    modal.classList.remove('fade-in');
    setTimeout(() => modal.style.display = 'none', 500);
    // Remove event listeners to prevent duplicate bindings
    document.querySelectorAll('.faq-question').forEach(question => {
        question.replaceWith(question.cloneNode(true));
    });
}

// Animation Trigger on Load (existing code updated)
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in, .slide-up, .slide-up-delay, .slide-up-delay2, .slide-up-delay3').forEach(element => {
        element.style.opacity = '1';
    });
});
// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const hamburgerIcon = document.querySelector('.hamburger i');
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-times');
}

// FAQ Modal Functions
function showFAQModal() {
    const modal = document.getElementById('faq-modal');
    modal.style.display = 'block';
    modal.classList.add('fade-in');
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    });
}

function closeFAQModal() {
    const modal = document.getElementById('faq-modal');
    modal.classList.remove('fade-in');
    setTimeout(() => modal.style.display = 'none', 500);
    document.querySelectorAll('.faq-question').forEach(question => {
        question.replaceWith(question.cloneNode(true));
    });
}

// Terms of Service Modal Functions
function showTermsModal() {
    const modal = document.getElementById('terms-modal');
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    modal.classList.remove('fade-in');
    setTimeout(() => modal.style.display = 'none', 500);
}

// Privacy Policy Modal Functions
function showPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

function closePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    modal.classList.remove('fade-in');
    setTimeout(() => modal.style.display = 'none', 500);
}

// Animation Trigger on Load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in, .slide-up, .slide-up-delay, .slide-up-delay2, .slide-up-delay3').forEach(element => {
        element.style.opacity = '1';
    });
});
// Random Hints for Footer Links
const hints = {
    privacy: [
        "Learn how we protect your data!",
        "Your privacy matters to us!",
        "See our data handling policies!"
    ],
    terms: [
        "Understand our rules!",
        "Know your responsibilities!",
        "Check our service terms!"
    ],
    contact: [
        "Reach out to us!",
        "Have a question? Email us!",
        "We’re here to help!"
    ]
};

document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        let hintArray;
        if (this.textContent.includes('Privacy')) {
            hintArray = hints.privacy;
        } else if (this.textContent.includes('Terms')) {
            hintArray = hints.terms;
        } else {
            hintArray = hints.contact;
        }
        const randomHint = hintArray[Math.floor(Math.random() * hintArray.length)];
        this.setAttribute('data-tooltip', randomHint);
    });
});
// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
    // Store preference in localStorage to persist across page loads
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load Theme Preference on Page Load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    document.querySelectorAll('.fade-in, .slide-up, .slide-up-delay, .slide-up-delay2, .slide-up-delay3').forEach(element => {
        element.style.opacity = '1';
    });
});
window.addEventListener('load', () => {
    const dashboardData = {
        inventory: { items: 245, alerts: 5 },
        sales: { amount: 1250, transactions: 12 },
        orders: { pending: 3 }
    };
    const dashboard = document.getElementById('dashboard-data');
    if (dashboard) {
        dashboard.innerHTML = `
            <div>Inventory: ${dashboardData.inventory.items} items (${dashboardData.inventory.alerts} alerts)</div>
            <div>Sales: $${dashboardData.sales.amount} (${dashboardData.sales.transactions} transactions)</div>
            <div>Pending Orders: ${dashboardData.orders.pending}</div>
        `;
    }
    
});

document.querySelector('.logo-image').addEventListener('click', function() {
    console.log('Logo clicked!');
    // Add custom behavior, e.g., redirect to homepage
    // window.location.href = '/index.html';
});
// /js/index.js
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Download button clicked!');
    });
});

document.querySelectorAll('.nav-tabs a').forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(`Nav tab clicked: ${tab.textContent}`);
    });
});