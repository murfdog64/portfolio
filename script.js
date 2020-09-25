const siteCards = document.querySelectorAll(".site-card");
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

for (let i = 0; i < siteCards.length; i++) {
  siteCards[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (siteCards[i].style.height !== "60vh") {
      siteCards[i].style.height = "60vh";
    } else {
      siteCards[i].style.height = "18vh";
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

