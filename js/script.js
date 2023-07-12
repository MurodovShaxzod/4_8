let mainAllDiv = document.querySelectorAll(".main div");
for(let i = 0; i < mainAllDiv.length; i++) {
  mainAllDiv[i].addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if(i == 0) {
      document.querySelector(".my-click div").classList.add("qaychi-win");
      document.querySelector(".my-click div").classList.remove("qogoz-win");
      document.querySelector(".my-click div").classList.remove("tosh-win");
    } else if(i == 1) {
      document.querySelector(".my-click div").classList.add("qogoz-win");
      document.querySelector(".my-click div").classList.remove("qaychi-win");
      document.querySelector(".my-click div").classList.remove("tosh-win");
    } else if(i == 2) {
      document.querySelector(".my-click div").classList.add("tosh-win");
      document.querySelector(".my-click div").classList.remove("qaychi-win");
      document.querySelector(".my-click div").classList.remove("qogoz-win");
    }
    if(randomNumber == 1) {
      document.querySelector(".random-click div").classList.add("qaychi-win");
      document.querySelector(".random-click div").classList.remove("qogoz-win");
      document.querySelector(".random-click div").classList.remove("tosh-win");
    } else if(randomNumber == 2) {
      document.querySelector(".random-click div").classList.add("qogoz-win");
      document.querySelector(".random-click div").classList.remove("qaychi-win");
      document.querySelector(".random-click div").classList.remove("tosh-win");
    } else if(randomNumber == 3) {
      document.querySelector(".random-click div").classList.add("tosh-win");
      document.querySelector(".random-click div").classList.remove("qaychi-win");
      document.querySelector(".random-click div").classList.remove("qogoz-win");
    }
    if(i == 0 && randomNumber == 2 || i == 1 && randomNumber == 3 || i == 2 && randomNumber == 1) {
      document.querySelector("h1").textContent = "YOU WIN";
    } else if (i == 0 && randomNumber == 3 || i == 1 && randomNumber == 1 || i == 2 && randomNumber == 2) {
      document.querySelector("h1").textContent = "YOU LOSE";
    } else {
      document.querySelector("h1").textContent = "IT'S A DRAW"
    }
    document.querySelector(".main").style.display = "none";
    document.querySelector(".win-main").style.display = "flex";
  });
}

document.querySelector(".play-again").addEventListener("click", () => {
  document.querySelector(".main").style.display = "block";
  document.querySelector(".win-main").style.display = "none";
});

document.querySelector(".rulesBtn").addEventListener("click", () => {
  document.querySelector(".modal-img").style.display = "block";
  document.querySelector(".game").style.filter = "blur(10px)";
});

document.querySelector(".modal-img").addEventListener("click", () => {
  document.querySelector(".modal-img").style.display = "none";
  document.querySelector(".game").style.filter = "blur(0px)";
})