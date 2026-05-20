// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);

});

// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// SCROLL REVEAL

ScrollReveal().reveal('.hero-content', {
    delay: 300,
    distance: '60px',
    duration: 1800,
    origin: 'bottom'
});

ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '40px',
    duration: 1200,
    interval: 150,
    origin: 'bottom'
});

ScrollReveal().reveal('.why-card', {
    delay: 200,
    distance: '40px',
    duration: 1200,
    interval: 150,
    origin: 'bottom'
});

ScrollReveal().reveal('.about-left', {
    origin: 'left',
    duration: 1500,
    distance: '60px'
});

ScrollReveal().reveal('.about-right', {
    origin: 'right',
    duration: 1500,
    distance: '60px'
});

// COUNTER

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 80;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}+`;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = `${target}+`;

        }

    };

    updateCounter();

});

// WHATSAPP FORM

document
.getElementById("whatsappForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let business = document.getElementById("business").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let text =
`🔥 New Website Booking

👤 Name: ${name}

🏢 Business: ${business}

📞 Phone: ${phone}

📝 Project Details:
${message}`;

    let whatsappURL =
`https://wa.me/918796493504?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

});
