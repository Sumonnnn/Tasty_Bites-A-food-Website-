// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Tasty Bites Loaded Successfully!");

    // Initialize all functionalities
    highlightActiveNavLink();
    initializeMenuFilters();
    handleAuthForms();
    handleContactForm();
    initializeCart();
    handleMobileNavbar();
});

/* ===============================
   ✅ Highlight Active Navbar Link
================================== */
function highlightActiveNavLink() {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

/* ===============================
   ✅ Menu Filtering (Veg, Non-Veg, Both)
================================== */
function initializeMenuFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                let category = button.getAttribute("data-filter");

                menuItems.forEach(item => {
                    item.style.display = (category === "all" || item.classList.contains(category)) ? "block" : "none";
                });

                // Update Active Button Styling
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
            });
        });
    }
}

/* ===============================
   ✅ Sign In & Sign Up Form Validations
================================== */
function handleAuthForms() {
    const signInForm = document.querySelector("#signInForm");
    const signUpForm = document.querySelector("#signUpForm");

    if (signInForm) {
        signInForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let email = document.querySelector("#signin-email").value.trim();
            let password = document.querySelector("#signin-password").value.trim();

            if (!email || !password) {
                alert("Please fill in all fields!");
            } else {
                alert("Sign In Successful!");
                window.location.href = "index.html";
            }
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let username = document.querySelector("#signup-username").value.trim();
            let email = document.querySelector("#signup-email").value.trim();
            let password = document.querySelector("#signup-password").value.trim();

            if (!username || !email || !password) {
                alert("Please fill in all fields!");
            } else {
                alert("Sign Up Successful!");
                window.location.href = "signin.html";
            }
        });
    }
}

/* ===============================
   ✅ Contact Form Submission
================================== */
function handleContactForm() {
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let name = document.querySelector("#contact-name").value.trim();
            let email = document.querySelector("#contact-email").value.trim();
            let message = document.querySelector("#contact-message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields!");
            } else {
                alert("Message Sent Successfully! We will get back to you soon.");
                contactForm.reset();
            }
        });
    }
}

/* ===============================
   ✅ Cart & Wishlist Functionalities
================================== */
let cart = [];
let wishlist = [];

function initializeCart() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let itemName = button.getAttribute("data-name");
            let itemPrice = button.getAttribute("data-price");

            cart.push({ name: itemName, price: itemPrice });
            alert(`${itemName} added to cart!`);
            updateCartDisplay();
        });
    });

    document.querySelectorAll(".add-to-wishlist").forEach(button => {
        button.addEventListener("click", () => {
            let itemName = button.getAttribute("data-name");

            wishlist.push(itemName);
            alert(`${itemName} added to wishlist!`);
            updateWishlistDisplay();
        });
    });
}

// Function to Update Cart Display (For Future Implementation)
function updateCartDisplay() {
    console.log("Cart Updated: ", cart);
}

// Function to Update Wishlist Display (For Future Implementation)
function updateWishlistDisplay() {
    console.log("Wishlist Updated: ", wishlist);
}

/* ===============================
   ✅ Mobile Navbar Toggle
================================== */
function handleMobileNavbar() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close menu if clicked outside
        document.addEventListener("click", (event) => {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    }
}
