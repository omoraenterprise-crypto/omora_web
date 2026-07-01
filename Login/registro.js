import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const db = getFirestore(app);

// ── CARRUSEL ──────────────────────────────────────────────
const slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() => {
    if (slides.length > 0) {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }
}, 5000);

// ── LÓGICA DE ROLES ───────────────────────────────────────
const roleBtns = document.querySelectorAll('.role-btn');
const rolInput = document.getElementById('rolSelected');
const roleError = document.getElementById('roleError');

roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quita selección anterior
        roleBtns.forEach(b => b.classList.remove('selected'));
        // Marca el botón pulsado
        btn.classList.add('selected');
        // Guarda el valor en el input oculto
        rolInput.value = btn.dataset.rol;
        // Oculta el mensaje de error si estaba visible
        roleError.style.display = 'none';
    });
});

// ── LÓGICA DE REGISTRO ────────────────────────────────────
const form = document.getElementById('registerForm');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username  = document.getElementById('username').value.trim();
        const email     = document.getElementById('email').value.trim();
        const fullName  = document.getElementById('fullName').value.trim();
        const phone     = document.getElementById('phone').value.trim();
        const address   = document.getElementById('address').value.trim();
        const password  = document.getElementById('password').value;
        const confirm   = document.getElementById('confirmPassword').value;
        const birthDate = document.getElementById('birthDate').value;
        const rol       = rolInput.value;

        // Validar rol
        if (!rol) {
            roleError.style.display = 'block';
            return;
        }

        // Validar contraseñas
        if (password !== confirm) {
            alert('Las contraseñas no coinciden 🐾');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        try {
            // 1. Crear usuario en Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. Guardar documento en colección "usuarios" (incluye campo "rol")
            await setDoc(doc(db, "usuarios", user.uid), {
                uid:            user.uid,
                username:       username,
                nombre:         fullName,
                email:          email,
                telefono:       phone,
                direccion:      address,
                fechaNacimiento: birthDate,
                rol:            rol,          // ← campo que usa ShoppingScreen y el resto de la app
                fotoPerfil:     "",
                omoraPoints:    0,
                historialCompras: [],
                fechaRegistro:  new Date()
            });

            alert(`¡Registro exitoso en Omora! 🐾\nRol asignado: ${rol.toUpperCase()}`);
            window.location.href = './login.html';

        } catch (error) {
            console.error('Error en registro:', error);
            if (error.code === 'auth/email-already-in-use') {
                alert('Este correo ya está registrado. Prueba iniciar sesión.');
            } else {
                alert('Error: ' + error.message);
            }
        }
    });
}