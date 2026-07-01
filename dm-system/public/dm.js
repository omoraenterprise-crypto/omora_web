const socket = io();
const username = prompt("Tu nombre:");
socket.emit("join", username);

const messages = document.getElementById("messages");
const input = document.getElementById("textInput");
const typing = document.getElementById("typing");
const chatName = document.getElementById("chatName");

document.getElementById("sendBtn").onclick = send;

input.addEventListener("input", () => {
  socket.emit("typing", username);
});

socket.on("typing", user => {
  typing.textContent = `${user} está escribiendo…`;
  setTimeout(() => typing.textContent = "", 1500);
});

function send() {
  if (!input.value) return;

  const msg = document.createElement("div");
  msg.className = "message sent";
  msg.textContent = input.value;
  messages.appendChild(msg);

  socket.emit("message", input.value);
  input.value = "";
}

socket.on("message", text => {
  const msg = document.createElement("div");
  msg.className = "message received";
  msg.textContent = text;
  messages.appendChild(msg);
});

// CAMBIO DE CHAT (UI)
document.querySelectorAll(".dm-user").forEach(user => {
  user.onclick = () => {
    document.querySelector(".dm-user.active").classList.remove("active");
    user.classList.add("active");
    chatName.textContent = user.dataset.user;
    messages.innerHTML = "";
  };
});
