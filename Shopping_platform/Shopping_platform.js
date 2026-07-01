import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBtGVfaEKbVXWCvTvA3t_XRZ6PK28pL5rc",
    authDomain: "omora-55e66.firebaseapp.com",
    projectId: "omora-55e66",
    storageBucket: "omora-55e66.firebasestorage.app",
    messagingSenderId: "860384804554",
    appId: "1:860384804554:web:d59b9e0732619814d1be33"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let currentUser = null;

// MONITOR DE SESIÓN
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        await syncProfileData();
    } else {
        window.location.href = "../Login/login.html";
    }
});

// SINCRONIZACIÓN Y CARGA
async function syncProfileData() {
    if (!currentUser) return;
    const userRef = doc(db, "usuarios", currentUser.uid);
    const snap = await getDoc(userRef);
    const data = snap.exists() ? snap.data() : {};

    const name = data.nombre || currentUser.displayName || "Usuario Omora";
    const photo = data.fotoPerfil || currentUser.photoURL || "";
    const address = data.direccion || "Sin dirección registrada";
    
    // Inyectar en Interfaz
    document.getElementById("headerGreeting").textContent = `Hola, ${name.split(' ')[0]} 👋`;
    document.getElementById("profileName").textContent = name;
    document.getElementById("profileEmail").textContent = currentUser.email;
    document.getElementById("profileAddress").textContent = address;
    
    if (photo) {
        document.getElementById("profileAvatar").innerHTML = `<img src="${photo}" alt="Avatar">`;
    }
}

// CAMBIO RÁPIDO DE FOTO (Al hacer clic en el avatar)
window.changePhotoDirectly = async () => {
    const newUrl = prompt("Pega el enlace (URL) de tu nueva foto de perfil:");
    if (newUrl && newUrl.trim() !== "") {
        await fastUpdate({ fotoPerfil: newUrl.trim() });
        showToast("¡Foto actualizada! 📸");
        syncProfileData();
    }
};

// GUARDADO DEL FORMULARIO (Corrección error setDoc)
window.saveUserProfile = async () => {
    const name = document.getElementById('editNameInput').value.trim();
    const addr = document.getElementById('editAddressInput').value.trim();
    const photo = document.getElementById('editPhotoInput').value.trim();

    if (!name) return alert("El nombre es obligatorio");

    const btn = document.getElementById('btnSaveProfile');
    btn.disabled = true;
    btn.textContent = "Guardando...";

    try {
        await fastUpdate({
            nombre: name,
            direccion: addr || "Sin dirección registrada",
            fotoPerfil: photo || ""
        });
        
        showToast("Perfil actualizado correctamente ✨");
        toggleEdit(false);
        syncProfileData();
    } catch (e) {
        console.error(e);
        alert("Error al guardar datos. Intenta de nuevo.");
    } finally {
        btn.disabled = false;
        btn.textContent = "Guardar Cambios";
    }
};

// FUNCIÓN MAESTRA DE ACTUALIZACIÓN
async function fastUpdate(dataObj) {
    const userRef = doc(db, "usuarios", currentUser.uid);
    // setDoc con merge:true asegura que el documento se cree si no existe
    await setDoc(userRef, dataObj, { merge: true });
}

// NAVEGACIÓN Y UI
window.toggleEdit = (show) => {
    document.getElementById('profileView').style.display = show ? 'none' : 'block';
    document.getElementById('profileEditForm').style.display = show ? 'block' : 'none';
    if(show) {
        document.getElementById('editNameInput').value = document.getElementById('profileName').textContent;
        document.getElementById('editAddressInput').value = document.getElementById('profileAddress').textContent;
        const img = document.querySelector('#profileAvatar img');
        document.getElementById('editPhotoInput').value = img ? img.src : "";
    }
};

window.showToast = (msg) => {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
};

window.handleLogout = () => signOut(auth);

// Event Listeners
document.getElementById('btnSaveProfile').addEventListener('click', window.saveUserProfile);
document.getElementById('btnLogout').addEventListener('click', window.handleLogout);