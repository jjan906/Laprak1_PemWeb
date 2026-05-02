document.getElementById("formLaporan").addEventListener("submit", e => {
  e.preventDefault();
  const nim = document.querySelectorAll(".form-input")[1].value.trim();
  if (!/^[0-9]{9}$/.test(nim)) return alert("NIM harus 9 digit!");
  window.open("success.html", "_blank");
});