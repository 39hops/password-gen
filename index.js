function generate() {
  let letters = "";
  if (document.getElementById("lowercase").checked) {
    letters += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (document.getElementById("uppercase").checked) {
    letters += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (document.getElementById("special").checked) {
    letters += "!@#$%^&*()_+-={}[]':<>";
  }
  const length = document.getElementById("range").value;
  if (length < 1 || letters.length === 0) {
    return;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * letters.length);
    password += letters[pos];
  }
  document.getElementById("password").value = password;
}
document.querySelectorAll("input[type=checkbox]").forEach((elem) => {
  elem.addEventListener("click", generate);
});
document.getElementById("generate").addEventListener("click", generate);
document.getElementById("range").addEventListener("input", (e) => {
  document.getElementById("rangespan").innerHTML = e.target.value;
  generate();
});
document.getElementById("copy").addEventListener("click", () => {
  const pass = document.getElementById("password").value;
  navigator.clipboard.writeText(pass).then(() => {
    document.getElementById("copy").innerHTML = "Copied!";
    setTimeout(() => {
      document.getElementById("copy").innerHTML = "Copy";
    }, 1000);
  });
});
generate();
