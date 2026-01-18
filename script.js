// ==================== Navigation ====================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Animate hamburger
  const spans = hamburger.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(8px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// ==================== Active Navigation ====================
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // Navbar shadow on scroll
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  }
});

// ==================== Scroll Animations ====================
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
  ".menu-card, .benefit-card, .about-feature",
);
animatedElements.forEach((el) => observer.observe(el));

// ==================== Form Handlers ====================
const orderForm = document.getElementById("orderForm");
const franchiseForm = document.getElementById("franchiseForm");
const contactForm = document.getElementById("contactForm");

// Order Form
if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show success animation
    const button = orderForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = "✓ Order Placed!";
    button.style.background = "#2d2d2d";

    // Reset after 2 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
      orderForm.reset();
    }, 2000);

    // In real implementation, you would send this to your backend
    console.log("Order submitted");
  });
}

// Franchise Form
if (franchiseForm) {
  franchiseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = franchiseForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = "✓ Interest Submitted!";
    button.style.background = "#fff";
    button.style.color = "#000";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
      button.style.color = "";
      franchiseForm.reset();
    }, 2000);

    console.log("Franchise interest submitted");
  });
}

// Contact Form
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = "✓ Message Sent!";
    button.style.background = "#fff";
    button.style.color = "#000";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
      button.style.color = "";
      contactForm.reset();
    }, 2000);

    console.log("Contact form submitted");
  });
}

// ==================== Add to Cart Functionality ====================
const addToCartButtons = document.querySelectorAll(".menu-card button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".menu-card");
    const title = card.querySelector(".menu-card-title").textContent;
    const price = card.querySelector(".menu-card-price").textContent;

    // Add animation
    const originalText = this.textContent;
    this.textContent = "✓ Added!";
    this.style.transform = "scale(0.95)";

    setTimeout(() => {
      this.textContent = originalText;
      this.style.transform = "";
    }, 1500);

    // In real implementation, you would add this to a cart
    console.log(`Added to cart: ${title} - ${price}`);
  });
});

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ==================== Parallax Effect ====================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".floating-particle");

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ==================== Loading Animation ====================
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// ==================== Cursor Effect (Optional Premium Touch) ====================
const createCursorFollower = () => {
  const cursor = document.createElement("div");
  cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, background 0.2s ease;
        display: none;
    `;
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX - 10 + "px";
    cursor.style.top = cursorY - 10 + "px";
    requestAnimationFrame(animate);
  };

  animate();

  // Show cursor on desktop only
  if (window.innerWidth > 768) {
    cursor.style.display = "block";
  }

  // Hover effects
  const interactiveElements = document.querySelectorAll(
    "a, button, .menu-card",
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursor.style.background = "rgba(0, 0, 0, 0.05)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.background = "rgba(0, 0, 0, 0.1)";
    });
  });
};

// Initialize cursor effect
createCursorFollower();

// ==================== Counter Animation ====================
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + "+";
    }
  }, 16);
};

// Animate stats when visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number");
        statNumbers.forEach((stat) => {
          if (!stat.classList.contains("counted")) {
            stat.classList.add("counted");
            const targetText = stat.textContent;
            const target = parseInt(targetText.replace("+", ""));
            animateCounter(stat, target);
          }
        });
      }
    });
  },
  { threshold: 0.5 },
);

const aboutStats = document.querySelector(".about-stats");
if (aboutStats) {
  statsObserver.observe(aboutStats);
}

// ==================== Dynamic Greeting Based on Time ====================
const updateGreeting = () => {
  const hour = new Date().getHours();
  const heroDescription = document.querySelector(".hero-description");

  if (heroDescription) {
    let greeting = "";
    if (hour < 12) {
      greeting = "Good morning! ";
    } else if (hour < 17) {
      greeting = "Good afternoon! ";
    } else {
      greeting = "Good evening! ";
    }

    const originalText = heroDescription.textContent;
    if (!originalText.includes("Good")) {
      heroDescription.textContent = greeting + originalText;
    }
  }
};

updateGreeting();

console.log("OH MY BIRYANI - Landing page loaded successfully! 🍛");
