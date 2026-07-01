import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtGVfaEKbVXWCvTvA3t_XRZ6PK28pL5rc",
  authDomain: "omora-55e66.firebaseapp.com",
  projectId: "omora-55e66",
  storageBucket: "omora-55e66.firebasestorage.app",
  messagingSenderId: "860384804554",
  appId: "1:860384804554:web:d59b9e0732619814d1be33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- CARRUSEL ---
const slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() => {
  if (slides.length > 0) {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }
}, 5000);

// --- RECUPERACIÓN ---
const recoverForm = document.getElementById('recoverForm');
const recoverEmail = document.getElementById('recoverEmail');
const recoverHint = document.getElementById('recoverHint');

if (recoverForm) {
  recoverForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!recoverEmail) return;

    const email = recoverEmail.value.trim();

    try {
      await sendPasswordResetEmail(auth, email);

      if (recoverHint) {
        recoverHint.style.display = 'block';
        recoverHint.textContent = 'Si el correo existe, recibirás instrucciones en unos minutos 🐾';
      } else {
        alert('Si el correo existe, recibirás instrucciones en unos minutos 🐾');
      }

      recoverForm.reset();
    } catch (error) {
      const msg = error?.message ? String(error.message) : String(error);
      alert('Error: ' + msg);
    }
  });
}

