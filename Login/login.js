import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

// --- CARRUSEL (Mantenemos tu lógica que está bien) ---
const slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() => {
    if(slides.length > 0) {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }
}, 5000);

// --- LÓGICA DE LOGIN CORREGIDA ---
const loginBtn = document.querySelector('.login-btn');

if (loginBtn) {
    loginBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // Usamos los IDs para estar seguros de qué dato tomamos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(!email || !password) {
            alert("Por favor, completa todos los campos 🐾");
            return;
        }

        loginBtn.innerText = "Verificando... ⏳";
        loginBtn.disabled = true;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('omora_uid', userCredential.user.uid);
            
            console.log("Login exitoso");
            window.location.href = '../PantallaCarga/pantalla_carga_funcional.html';
        } catch (error) {
            console.error("Error Firebase:", error.code);
            alert('Usuario o contraseña incorrectos 🐶');
        } finally {
            loginBtn.innerText = "Ingresar";
            loginBtn.disabled = false;
        }
    });
}