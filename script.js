// COUNTER

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target');

const c = +counter.innerText;

const increment = target / 100;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});


// WHATSAPP FORM

const form = document.getElementById('form');

form.addEventListener('submit', function(e){

e.preventDefault();

let name = document.getElementById('name').value;

let business = document.getElementById('business').value;

let phone = document.getElementById('phone').value;

let message = document.getElementById('message').value;

let whatsappMessage =
`Hello NVservicehub!%0A%0A`
+ `Name: ${name}%0A`
+ `Business: ${business}%0A`
+ `Phone: ${phone}%0A`
+ `Message: ${message}`;

window.open(
`https://wa.me/918796493504?text=${whatsappMessage}`,
'_blank'
);

});


// CURSOR GLOW

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {

cursor.style.left = e.clientX + 'px';

cursor.style.top = e.clientY + 'px';

});


// SCROLL REVEAL

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', ()=>{

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.style.opacity = '1';

card.style.transform = 'translateY(0)';

}

});

});

cards.forEach(card => {

card.style.opacity = '0';

card.style.transform = 'translateY(80px)';

card.style.transition = '1s';

});
