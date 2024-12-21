const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const lpgp = document.getElementById('logo');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay')

burgerIcon.addEventListener('click', () => {
  navMenu.classList.add('active');
  burgerIcon.style.display = 'none'; // Sembunyikan ikon burger
  closeIcon.style.display = 'block'; // Tampilkan ikon close
  logo.style.display = 'block'; // Tampilkan ikon close
  overlay.style.display = 'block'
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.remove('active');
  burgerIcon.style.display = 'block'; // Tampilkan ikon burger kembali
  closeIcon.style.display = 'none'; // Sembunyikan ikon close
  logo.style.display = 'none'; // Sembunyikan ikon close
  overlay.style.display = 'none'
});

document.addEventListener('DOMContentLoaded', () => {
  const slideDownElements = document.querySelectorAll('.slide-down');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Berhenti mengamati setelah animasi
      }
    });
  }, { threshold: 0.5 }); // elemen dianggap terlihat jika 10% dari ukurannya terlihat

  slideDownElements.forEach(element => observer.observe(element));
});
