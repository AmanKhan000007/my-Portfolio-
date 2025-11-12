document.addEventListener("DOMContentLoaded", () => {
  // ===== Page Loader =====
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 1200);
    }
  });

  // ===== Scroll Reveal Effect =====
  window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  });

  // ===== Active Navbar Highlight =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ===== Theme Toggle (Light/Dark) =====
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (themeToggle) {
    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
      }
    });
  }

  // ===== Scroll to Top Button =====
  const scrollBtn = document.getElementById("scrollToTop");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ===== Navbar & Hero Entrance Animation =====
  window.addEventListener("load", () => {
    const navbar = document.querySelector("nav");
    const hero = document.querySelector(".home-text");

    if (navbar) {
      navbar.style.opacity = "0";
      navbar.style.transform = "translateY(-30px)";
      setTimeout(() => {
        navbar.style.transition = "all 0.8s ease";
        navbar.style.opacity = "1";
        navbar.style.transform = "translateY(0)";
      }, 200);
    }

    if (hero) {
      hero.style.opacity = "0";
      hero.style.transform = "translateY(30px)";
      setTimeout(() => {
        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
      }, 600);
    }
  });

  // ===== Floating Particles Effect =====
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray;

    function initParticles() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particlesArray = [];
      const numParticles = 70;

      for (let i = 0; i < numParticles; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: (Math.random() - 0.5) * 0.6,
        });
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-color")
        .trim();

      particlesArray.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", initParticles);
    initParticles();
    animateParticles();
  }

  // ===== Scroll Progress Bar =====
  window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });

  // ===== Dashboard Fade-Out Effect =====
  window.addEventListener("load", () => {
    const dashboard = document.querySelector(".dashboard");
    if (dashboard) {
      setTimeout(() => {
        dashboard.classList.add("fade-out");
      }, 3000);
    }
  });

  // ===== Home Section Fade-In Animation =====
  window.addEventListener("load", () => {
    const homeText = document.querySelector(".home-text");
    const homeImage = document.querySelector(".home-image");
    if (homeText) {
      homeText.style.opacity = "0";
      homeText.style.transition = "opacity 1.5s ease";
      setTimeout(() => {
        homeText.style.opacity = "1";
      }, 600);
    }
    if (homeImage) {
      homeImage.style.opacity = "0";
      homeImage.style.transition = "opacity 1.5s ease";
      setTimeout(() => {
        homeImage.style.opacity = "1";
      }, 800);
    }
  });

  // ===== Parallax Motion for Dashboard =====
  document.addEventListener("mousemove", (e) => {
    const dashboard = document.querySelector(".dashboard");
    const bgText = document.querySelector(".dashboard-background-text");
    const shapes = document.querySelectorAll(".floating-shapes .shape");

    if (!dashboard || !bgText || shapes.length === 0) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    bgText.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 10;
      shape.style.transform = `translate(${x * -speed}px, ${y * -speed}px)`;
    });
  });
});
// ===== Certificate Popup (Lightbox) =====
function openCertificate(imgElement) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

function closeCertificate() {
  document.getElementById("certificateModal").style.display = "none";
}
// ===== Floating Particles for About Section =====
const canvasAbout = document.getElementById("particle-canvas-about");
if (canvasAbout) {
  const ctxAbout = canvasAbout.getContext("2d");
  let particlesArrayAbout = [];

  function initParticlesAbout() {
    canvasAbout.width = window.innerWidth;
    canvasAbout.height = canvasAbout.offsetHeight;
    particlesArrayAbout = [];

    const numParticles = 60; // adjust for density
    for (let i = 0; i < numParticles; i++) {
      particlesArrayAbout.push({
        x: Math.random() * canvasAbout.width,
        y: Math.random() * canvasAbout.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
      });
    }
  }

  function animateParticlesAbout() {
    ctxAbout.clearRect(0, 0, canvasAbout.width, canvasAbout.height);
    ctxAbout.fillStyle = "rgba(59,130,246,0.5)"; // blue particle color

    particlesArrayAbout.forEach((p) => {
      ctxAbout.beginPath();
      ctxAbout.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctxAbout.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvasAbout.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvasAbout.height) p.speedY *= -1;
    });

    requestAnimationFrame(animateParticlesAbout);
  }

  initParticlesAbout();
  animateParticlesAbout();

  window.addEventListener("resize", initParticlesAbout);
}


// ===== Blue Network Particle Animation for About Section =====
// ===== Blue Network Particle Animation for About Section =====
document.addEventListener("DOMContentLoaded", () => {
  const canvasAbout = document.getElementById("particle-canvas-about");

  if (!canvasAbout) return; // stop if canvas not found

  const ctxAbout = canvasAbout.getContext("2d");
  let particlesArrayAbout = [];

  // Initialize Particles
  function initParticlesAbout() {
    canvasAbout.width = canvasAbout.offsetWidth;
    canvasAbout.height = canvasAbout.offsetHeight;
    particlesArrayAbout = [];

    const numParticles = 70;
    for (let i = 0; i < numParticles; i++) {
      particlesArrayAbout.push({
        x: Math.random() * canvasAbout.width,
        y: Math.random() * canvasAbout.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
      });
    }
  }

  // Animate Particles
  function animateParticlesAbout() {
    ctxAbout.clearRect(0, 0, canvasAbout.width, canvasAbout.height);

    // Draw Dots
    ctxAbout.fillStyle = "rgba(59,130,246,0.8)";
    particlesArrayAbout.forEach((p) => {
      ctxAbout.beginPath();
      ctxAbout.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctxAbout.fill();
    });

    // Draw Connecting Lines
    for (let a = 0; a < particlesArrayAbout.length; a++) {
      for (let b = a + 1; b < particlesArrayAbout.length; b++) {
        const dx = particlesArrayAbout[a].x - particlesArrayAbout[b].x;
        const dy = particlesArrayAbout[a].y - particlesArrayAbout[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 130) {
          ctxAbout.beginPath();
          ctxAbout.strokeStyle = `rgba(59,130,246,${1 - distance / 130})`;
          ctxAbout.lineWidth = 0.6;
          ctxAbout.moveTo(particlesArrayAbout[a].x, particlesArrayAbout[a].y);
          ctxAbout.lineTo(particlesArrayAbout[b].x, particlesArrayAbout[b].y);
          ctxAbout.stroke();
        }
      }
    }

    // Update Position
    particlesArrayAbout.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvasAbout.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvasAbout.height) p.speedY *= -1;
    });

    requestAnimationFrame(animateParticlesAbout);
  }

  // Initialize + Animate
  initParticlesAbout();
  animateParticlesAbout();
  window.addEventListener("resize", initParticlesAbout);
});
// ===== About Section Particle Background =====
document.addEventListener("DOMContentLoaded", () => {
  const canvasAbout = document.getElementById("particle-about");
  if (!canvasAbout) return;
  const ctx = canvasAbout.getContext("2d");

  let particles = [];
  const numParticles = 60;
  const maxDistance = 100;

  function resizeCanvas() {
    canvasAbout.width = canvasAbout.offsetWidth;
    canvasAbout.height = canvasAbout.offsetHeight;
    particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvasAbout.width,
        y: Math.random() * canvasAbout.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvasAbout.width, canvasAbout.height);
    ctx.fillStyle = "rgba(37, 99, 235, 0.9)";

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvasAbout.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvasAbout.height) p.vy *= -1;
    });

    // Connect particles
    ctx.strokeStyle = "rgba(37, 99, 235, 0.2)";
    particles.forEach((a, i) => {
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  resizeCanvas();
  animate();
  window.addEventListener("resize", resizeCanvas);
});
// ===== Scroll Reveal Animation =====
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// ===== Certificate Popup (Lightbox) =====
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".zoomable").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
