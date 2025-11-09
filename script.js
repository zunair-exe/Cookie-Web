const menuOpenbutton = document.querySelector("#menu-open-button");
const menuClosebutton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

// Open mobile menu
menuOpenbutton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close mobile menu
menuClosebutton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Smooth scroll to sections when clicking nav links
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Close mobile menu
        document.body.classList.remove("show-mobile-menu");
        
        // Get the section to scroll to
        const targetId = link.textContent.trim().toLowerCase();
        let targetSection;
        
        // Map nav link text to section class names
        if (targetId === "home") {
            targetSection = document.querySelector(".hero-section");
        } else if (targetId === "about") {
            targetSection = document.querySelector(".about-section");
        } else if (targetId === "menu") {
            targetSection = document.querySelector(".menu-section");
        } else if (targetId === "review") {
            targetSection = document.querySelector(".reviews-section");
        } else if (targetId === "contact") {
            targetSection = document.querySelector(".contact-section");
        }
        
        // Smooth scroll to the section
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Close menu when clicking on the backdrop (outside the menu)
document.addEventListener("click", (e) => {
    if (document.body.classList.contains("show-mobile-menu") && 
        !e.target.closest(".nav-menu") && 
        !e.target.closest("#menu-open-button")) {
        document.body.classList.remove("show-mobile-menu");
    }
});

// Swiper configuration
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});

// Contact form handler
function handleSubmit(e) {
    e.preventDefault();
    
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
}