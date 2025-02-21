document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
      } else {
        header.style.opacity = 0;
        header.style.transform = "translateY(-20px)";
      }
    });
  
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.05)";
        link.style.transition = "transform 0.3s ease";
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
      });
    });
  });
  