const siteCards = document.querySelectorAll(".site-card");
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

for (let i = 0; i < siteCards.length; i++) {
  siteCards[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.classList.toggle("active");
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

