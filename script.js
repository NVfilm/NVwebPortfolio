/* =========================================
   NVwebPortfolio - Ultra Premium JS
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    /* =========================================
       Loader Animation
    ========================================= */
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2500);

    /* =========================================
       Custom Cursor
    ========================================= */
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursor2.style.left = e.clientX - 15 + 'px';
            cursor2.style.top = e.clientY - 15 + 'px';
        }, 100);
    });

    /* Hover effects for cursor */
    const hoverElements = document.querySelectorAll('a, button, input, textarea, select');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor2.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor2.style.transform = 'scale(1)';
        });
    });

    /* =========================================
       Navbar Scroll Effect
    ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    /* =========================================
       Mobile Menu Toggle
    ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    /* =========================================
       Scroll Reveal Animation
    ========================================= */
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    /* =========================================
       Statistics Counter Animation
    ========================================= */
    const counters = document.querySelectorAll('.counter');
    let statsStarted = false;
    
    const statsSection = document.querySelector('.stats-section');
    
    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 100;
            
            const updateCounter = () => {
                const current = +counter.innerText;
                
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
    };
    
    const handleStatsScroll = () => {
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 200 && !statsStarted) {
            statsStarted = true;
            startCounters();
        }
    };
    
    window.addEventListener('scroll', handleStatsScroll);

    /* =========================================
       FAQ Accordion
    ========================================= */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });

    /* =========================================
       Contact Form & WhatsApp Integration
    ========================================= */
    const inquiryForm = document.getElementById('inquiryForm');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const businessName = document.getElementById('businessName').value;
            const phone = document.getElementById('phone').value;
            const websiteType = document.getElementById('websiteType').value;
            const budget = document.getElementById('budget').value;
            const message = document.getElementById('message').value;
            
            // Format WhatsApp message
            const waMessage = `*NVwebPortfolio Inquiry*\n\n` +
                `*Name:* ${name}\n` +
                `*Business Name:* ${businessName}\n` +
                `*Phone:* ${phone}\n` +
                `*Website Type:* ${websiteType}\n` +
                `*Budget:* ${budget}\n` +
                `*Message:* ${message}`;
            
            // Encode message for WhatsApp
            const encodedMessage = encodeURIComponent(waMessage);
            
            // WhatsApp number
            const phoneNumber = '918796493504';
            
            // Open WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        });
    }

    /* =========================================
       Smooth Scroll for Nav Links
    ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    /* =========================================
       Floating WhatsApp Button Click
    ========================================= */
    const floatingWa = document.querySelector('.floating-whatsapp');
    
    floatingWa.addEventListener('click', function(e) {
        e.preventDefault();
        
        const waMessage = `Hi NVwebPortfolio! I'm interested in your premium web design services. Please share more details.`;
        const encodedMessage = encodeURIComponent(waMessage);
        const phoneNumber = '918796493504';
        
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });

    /* =========================================
       Active Nav Link on Scroll
    ========================================= */
    const sections = document.querySelectorAll('section');
    
    const highlightNav = () => {
        let scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});
/* WHATSAPP BOOKING FORM */

document
.getElementById("whatsappForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const business =
    document.getElementById("business").value;

    const phone =
    document.getElementById("phone").value;

    const website =
    document.getElementById("website").value;

    const budget =
    document.getElementById("budget").value;

    const message =
    document.getElementById("message").value;

    const whatsappMessage =
`🔥 NEW WEBSITE BOOKING 🔥

👤 Name: ${name}

🏢 Business: ${business}

📞 Phone: ${phone}

🌐 Website Type: ${website}

💰 Budget: ${budget}

📝 Project Details:
${message}`;

    const url =
`https://wa.me/918796493504?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

});
