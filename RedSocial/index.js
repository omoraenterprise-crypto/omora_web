const chats = {
  dave: {
    name: "Dave 🔥",
    avatar: "https://i.pravatar.cc/40?img=12",
    messages: [
      { type: "text", content: "JAJAJAJAJ", side: "received" },
      { type: "text", content: "Salgo de la playa pa enterarme de esa mrd", side: "received" }
    ]
  },
  biker: {
    name: "Biker’s Zone",
    avatar: "https://i.pravatar.cc/40?img=32",
    messages: []
  },
  eileen: {
    name: "Eileen",
    avatar: "https://i.pravatar.cc/40?img=45",
    messages: []
  }
};

let currentChat = null;

/* ABRIR CHAT */
function openChat(chatId) {
  currentChat = chatId;

  document.getElementById("chatName").textContent = chats[chatId].name;
  document.getElementById("chatAvatar").src = chats[chatId].avatar;

  renderMessages();

  document.getElementById("chatWindow").classList.remove("hidden");

  if (window.innerWidth <= 768) {
    document.getElementById("sidebar").style.display = "none";
  }
}

/* RENDER MENSAJES */
function renderMessages() {
  const messages = document.getElementById("messages");
  messages.innerHTML = "";

  chats[currentChat].messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = `message ${msg.side}`;

    if (msg.type === "text") {
      div.textContent = msg.content;
    }

    if (msg.type === "image") {
      const img = document.createElement("img");
      img.src = msg.content;
      div.appendChild(img);
    }

    if (msg.type === "audio") {
      const audio = document.createElement("audio");
      audio.src = msg.content;
      audio.controls = true;
      div.appendChild(audio);
    }

    messages.appendChild(div);
  });

  messages.scrollTop = messages.scrollHeight;
}

/* ENVIAR TEXTO */
function sendMessage() {
  const input = document.getElementById("messageInput");
  if (!input.value.trim() || !currentChat) return;

  chats[currentChat].messages.push({
    type: "text",
    content: input.value,
    side: "sent"
  });

  input.value = "";
  renderMessages();
}

/* ENVIAR IMAGEN */
function sendImage(event) {
  if (!currentChat) return;

  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    chats[currentChat].messages.push({
      type: "image",
      content: reader.result,
      side: "sent"
    });
    renderMessages();
  };
  reader.readAsDataURL(file);
}

/* ENVIAR AUDIO */
function sendAudio(event) {
  if (!currentChat) return;

  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  chats[currentChat].messages.push({
    type: "audio",
    content: url,
    side: "sent"
  });

  renderMessages();
}

/* BUSCADOR */
function searchChats() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const chatsDom = document.querySelectorAll(".chat");

  chatsDom.forEach(chat => {
    chat.style.display = chat.innerText.toLowerCase().includes(value)
      ? "flex"
      : "none";
  });
}

/* VOLVER */
function goBack() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("chatWindow").classList.add("hidden");
}
