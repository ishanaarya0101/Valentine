const no = document.getElementById("no");
const yes = document.getElementById("yes");
const main = document.getElementById("main");
const love = document.getElementById("love");

/* NO button bhaagta rahega */
function moveNo() {
  no.style.left = Math.random() * 80 + "vw";
  no.style.top = Math.random() * 80 + "vh";
}

no.addEventListener("mouseover", moveNo);
no.addEventListener("touchstart", moveNo);

/* YES click */
yes.addEventListener("click", () => {
  main.style.display = "none";
  love.classList.remove("hidden");
});
