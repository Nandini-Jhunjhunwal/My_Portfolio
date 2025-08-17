// MENU TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// THEME TOGGLE (with slider switch)
const themeSwitch = document.getElementById('mode-toggle'); // checkbox input
const body = document.body;

// Function to update text and link colors
function updateTextColor() {
  // Normal text
  const normalText = document.querySelectorAll('body *:not(a):not(button)');
  normalText.forEach(el => {
    el.style.color = body.classList.contains('light-theme') ? 'black' : 'white';
  });

  // Buttons
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(btn => {
    const bgColor = window.getComputedStyle(btn).backgroundColor;
    btn.style.color = isDark(bgColor) ? 'white' : 'black';
  });

  // Contact/social links
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks.forEach(link => {
    link.style.color = body.classList.contains('light-theme') ? 'black' : 'white';
  });
}

// Utility to detect if a color is dark
function isDark(rgb) {
  const result = rgb.match(/\d+/g);
  if (!result) return false;
  const r = parseInt(result[0]);
  const g = parseInt(result[1]);
  const b = parseInt(result[2]);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128;
}

// Apply saved theme on load
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeSwitch.checked = true; // switch ON
} else {
  themeSwitch.checked = false; // switch OFF (dark mode)
}
updateTextColor();

// Listen for slider change
themeSwitch.addEventListener('change', () => {
  body.classList.toggle('light-theme', themeSwitch.checked);

  if (themeSwitch.checked) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  updateTextColor();
});
