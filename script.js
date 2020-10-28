const siteCards = document.querySelectorAll(".site-card");
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

for (let i = 0; i < siteCards.length; i++) {
  siteCards[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (siteCards[i].style.height !== "55vh") {
      siteCards[i].style.height = "55vh";
    } else {
      siteCards[i].style.height = "18vh";
    }
  });
}

document.getElementById('popup-close').onclick = function() {
  overlay.className = '';
  popup.className = '';
}

let contactBtns = document.querySelectorAll('.contact-btn');
for (let i = 0; i < contactBtns.length; i++) {
  contactBtns[i].onclick = function() {
    overlay.className = 'show';
    popup.className = 'show';
  }
}

