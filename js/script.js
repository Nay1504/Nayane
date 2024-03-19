
// descrição
document.querySelectorAll(".card-imagem").forEach(function(element) {
  element.addEventListener("click", function() {
    this.classList.toggle("Menu")
  });
});

var swiper = new Swiper(".slide-cont", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


// modo noturno/dia
const modoNoturnoBtn = document.getElementById("modo-noturno-btn");
const diaImg = document.getElementById("dia");
const noturnoImg = document.getElementById("noturno");
  
modoNoturnoBtn.addEventListener("click", function() {
    document.body.classList.toggle("modo-noturno");
    const isModoNoturno = document.body.classList.contains("modo-noturno");
    if (isModoNoturno) {
        diaImg.style.display = "none";
        noturnoImg.style.display = "block";
    } else {
        diaImg.style.display = "block";
        noturnoImg.style.display = "none";
    }
});

window.onload = function() {
  window.scrollTo(0, 0);
};

