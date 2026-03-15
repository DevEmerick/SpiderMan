// Efeito 3D/parallax na imagem do Spider-Man (apenas desktop)
function isDesktop() {
  return window.innerWidth >= 1024;
}

function setupSpiderman3DEffect() {
  const spidermanImg = document.querySelector('.container-item-2 .spiderman');
  if (!spidermanImg) return;
  const parent = spidermanImg.parentElement;
  parent.style.perspective = '800px';
  parent.style.perspectiveOrigin = '50% 50%';
  parent.addEventListener('mousemove', (e) => {
    if (!isDesktop()) return;
    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    spidermanImg.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    spidermanImg.style.transition = 'transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)';
  });
  parent.addEventListener('mouseleave', () => {
    spidermanImg.style.transform = 'rotateX(0deg) rotateY(0deg)';
    spidermanImg.style.transition = 'transform 1.1s cubic-bezier(0.23, 1, 0.32, 1)';
  });
}

window.addEventListener('DOMContentLoaded', setupSpiderman3DEffect);
window.addEventListener('resize', setupSpiderman3DEffect);
// ...existing code...
// Mobile Menu Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Toggle menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close menu when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideNav = hamburger.contains(event.target) || mobileMenu.contains(event.target);
  
  if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});
