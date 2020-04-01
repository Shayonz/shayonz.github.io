const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "imgs/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
  newImage.onclick = function(x) {
    //https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    displayedImage.src = x.target.src;
  };
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  const btnColor = btn.getAttribute("class");

  if (btnColor == "dark") {
    btn.setAttribute("class", "light");
    btn.innerText = "lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.innerText = "darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
};
