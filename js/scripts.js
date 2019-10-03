const btn = document.getElementById("submit");

btn.addEventListener("click", e => {
  let username = document.getElementById("username").value;
  alert(`Bienvenido al sistema: ${username}`);
});
