const messages = document.getElementById("messages");
const textInput = document.getElementById("textInput");
const sendBtn = document.getElementById("sendBtn");
const imageInput = document.getElementById("imageInput");
const voiceBtn = document.getElementById("voiceBtn");

sendBtn.onclick = sendText;
textInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendText();
});

function sendText() {
  if (!textInput.value.trim()) return;

  const msg = document.createElement("div");
  msg.className = "message sent";
  msg.textContent = textInput.value;
  messages.appendChild(msg);

  textInput.value = "";
  scrollBottom();
}

/* IMÁGENES */
imageInput.onchange = () => {
  const file = imageInput.files[0];
  if (!file) return;

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  const msg = document.createElement("div");
  msg.className = "message sent";
  msg.appendChild(img);

  messages.appendChild(msg);
  scrollBottom();
};

/* NOTAS DE VOZ */
let recorder, audioChunks = [];

voiceBtn.onclick = async () => {
  if (!recorder) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = e => audioChunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(audioChunks, { type: "audio/webm" });
      audioChunks = [];

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = URL.createObjectURL(blob);

      const msg = document.createElement("div");
      msg.className = "message sent";
      msg.appendChild(audio);

      messages.appendChild(msg);
      scrollBottom();
    };

    recorder.start();
    voiceBtn.textContent = "⏹️";
  } else {
    recorder.stop();
    recorder = null;
    voiceBtn.textContent = "🎤";
  }
};

function scrollBottom() {
  messages.scrollTop = messages.scrollHeight;
}
