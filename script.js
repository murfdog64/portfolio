const siteCards = document.querySelectorAll(".site-card");
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

for (let i = 0; i < siteCards.length; i++) {
  siteCards[i].addEventListener("click", function(){
    if (siteCards[i].style.width !== "66vw") {
      siteCards[i].style.width = "66vw";
    } else {
      siteCards[i].style.width = "15vw";
    }
  });
}

document.getElementById('popup-close').onclick = function() {
  overlay.className = '';
  popup.className = '';
}

document.getElementById('contact-btn').onclick = function() {
  overlay.className = 'show';
  popup.className = 'show';
}

