// Efeito 3D/parallax na imagem do Spider-Man (apenas desktop)


  // Parallax removido, apenas animação de entrada permanece
}

// Parallax removido, nada a executar aqui
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
