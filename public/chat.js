"use strict";

const socket = io("http://localhost:3000");
// const socket = io("https://stream-server-jennash.norwayeast.cloudapp.azure.com");

const joinForm = document.querySelector("#join");
const roomDiv = document.querySelector("#roomDiv");
const writeMsg = document.querySelector("#msg-input");
const leaveBtn = document.querySelector("#leaveBtn");
const roomNumber = document.querySelector("#roomNumber");
const messages = document.getElementById("messages");

joinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username");
  const room = document.querySelector('input[name="room"]:checked').value;
  socket.emit("join", username.value, room);
  username.value = "";
  joinForm.style.display = "none";
  roomDiv.style.display = "block";
  writeMsg.style.display = "block";
  leaveBtn.style.display = "block";
  roomNumber.style.display = "block";
  roomNumber.innerHTML = "You are in room no.1 " + room;
});

leaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("leave");
  joinForm.style.display = "block";
  roomDiv.style.display = "none";
  writeMsg.style.display = "none";
  leaveBtn.style.display = "none";
  roomNumber.style.display = "none";
  messages.innerHTML = "";
});

writeMsg.addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("message");
  console.log("emitting", inp.value);
  socket.emit("write message", inp.value);
  inp.value = "";
});

socket.on("new message", (msg, username) => {
  const item = document.createElement("li");
  item.innerHTML = `<i> ${username} says: </i>` + msg;
  item.classList.add(
    "py-2",
    "px-3",
    "bg-mm-medium-carmine",
    "rounded-lg",
    "text-white",
    "w-fit",
    "m-5"
  );
  messages.appendChild(item);
});

socket.on("response", (msg) => {
  console.log(msg);
});

socket.on("leaveResponse", (msg) => {
  console.log(msg);
});
