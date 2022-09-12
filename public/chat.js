"use strict";

const socket = io("http://localhost:3000");
// const socket = io("https://stream-server-jennash.norwayeast.cloudapp.azure.com");

document
  .querySelector("#chat-message-input")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const inp = document.getElementById("message");
    console.log("emitting:", inp.value);
    socket.emit("chat message", inp.value);
    inp.value = "";
  });
document.querySelector("#join").addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("username");
  console.log("emitting:", inp.value);
  socket.emit("join", inp.value);

  inp.value = "";
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.classList.add(
    "py-2",
    "px-3",
    "bg-mm-medium-carmine",
    "rounded-lg",
    "text-white",
    "w-fit",
    "m-5"
  );
  item.innerHTML = msg;
  document.getElementById("messages").appendChild(item);
});
socket.on("response", (msg) => {
  console.log(msg);
});
