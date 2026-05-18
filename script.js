window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 150 + "px";
  cursor.style.top = e.clientY - 150 + "px";
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 100;

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 20);
    } else{
      counter.innerText = target;
    }

  };

  updateCounter();

});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {

  btn.addEventListener("click", () => {

    const answer = btn.nextElementSibling;

    answer.style.display =
      answer.style.display === "block"
      ? "none"
      : "block";

  });

});

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const business = document.getElementById("business").value;
  const phone = document.getElementById("phone").value;
  const website = document.getElementById("website").value;
  const budget = document.getElementById("budget").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
`Hello NVwebPortfolio,

Name: ${name}
Business Name: ${business}
Phone: ${phone}
Website Type: ${website}
Budget: ${budget}
Message: ${message}`;

  const url =
`https://wa.me/918796493504?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank");

});