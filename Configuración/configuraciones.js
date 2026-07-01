const themeToggle = document.getElementById('themeToggle');
const fontSizeSelect = document.getElementById('fontSize');
const animationsToggle = document.getElementById('animationsToggle');

/* TEMA */
if (localStorage.getItem('theme') === 'dark') {
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

/* TAMAÑO TEXTO */
fontSizeSelect.addEventListener('change', () => {
  document.documentElement.setAttribute('data-font', fontSizeSelect.value);
  localStorage.setItem('font', fontSizeSelect.value);
});

/* ANIMACIONES */
animationsToggle.addEventListener('change', () => {
  document.body.classList.toggle('no-animations', !animationsToggle.checked);
  localStorage.setItem('animations', animationsToggle.checked);
});
