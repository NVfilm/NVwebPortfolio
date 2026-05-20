/* =========================
FILE: script.js
========================= */

// LENIS SMOOTH SCROLL

const lenis = new Lenis()

function raf(time) {

  lenis.raf(time)

  requestAnimationFrame(raf)

}

requestAnimationFrame(raf)

// LOADER

window.addEventListener("load", () => {

  gsap.to(".loader", {

    opacity:0,

    duration:1.2,

    delay:1.4,

    pointerEvents:"none"

  })

})

// CURSOR

const cursor = document.querySelector(".cursor")

window.addEventListener("mousemove",(e)=>{

  gsap.to(cursor,{

    x:e.clientX,

    y:e.clientY,

    duration:0.2

  })

})

// HERO ANIMATION

gsap.from(".hero-tag",{

  y:80,

  opacity:0,

  duration:1.2,

  delay:1.8

})

gsap.from(".hero h1",{

  y:120,

  opacity:0,

  duration:1.5,

  delay:2

})

gsap.from(".hero-desc",{

  y:80,

  opacity:0,

  duration:1.3,

  delay:2.3

})

gsap.from(".hero-buttons",{

  y:80,

  opacity:0,

  duration:1.3,

  delay:2.5

})

// PORTFOLIO SCROLL ANIMATION

gsap.utils.toArray(".project-card").forEach((card)=>{

  gsap.from(card,{

    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    },

    y:120,

    opacity:0,

    duration:1.2

  })

})

// WHY CARD ANIMATION

gsap.utils.toArray(".why-card").forEach((card)=>{

  gsap.from(card,{

    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    },

    y:80,

    opacity:0,

    duration:1

  })

})

// ABOUT ANIMATION

gsap.from(".about-left",{

  scrollTrigger:{
    trigger:".about",
    start:"top 75%"
  },

  x:-120,

  opacity:0,

  duration:1.5

})

gsap.from(".about-right",{

  scrollTrigger:{
    trigger:".about",
    start:"top 75%"
  },

  x:120,

  opacity:0,

  duration:1.5

})

// CONTACT FORM

document
.getElementById("whatsappForm")
.addEventListener("submit",function(e){

  e.preventDefault()

  let name =
  document.getElementById("name").value

  let business =
  document.getElementById("business").value

  let phone =
  document.getElementById("phone").value

  let message =
  document.getElementById("message").value

  let text =
`🔥 NEW WEBSITE BOOKING

👤 Name: ${name}

🏢 Business: ${business}

📞 Phone: ${phone}

📝 Project Details:
${message}`

  let url =
`https://wa.me/918796493504?text=${encodeURIComponent(text)}`

  window.open(url,"_blank")

})
