/* ========================================
   NVwebPortfolio | Premium JS
   ======================================== */

// 1. Wait for DOM to Load
document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------
    // LENIS SMOOTH SCROLL SETUP
    // -------------------------------------------------
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // -------------------------------------------------
    // CUSTOM CURSOR
    // -------------------------------------------------
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    gsap.to({}, {
        duration: 0.016,
        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            
            gsap.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });
            
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Hover effects for cursor
    const hoverables = document.querySelectorAll("a, button, .card, .feature-card");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, { scale: 3, backgroundColor: "#fff", opacity: 0.2, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", opacity: 1, duration: 0.2 });
        });
    });


    // -------------------------------------------------
    // HERO ANIMATIONS
    // -------------------------------------------------
    const tl = gsap.timeline();

    tl.from(".logo-loader", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.5
    });

    // Hero Reveal
    gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 2.5
    });
    gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 3
    });
    gsap.from(".hero-btns", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 3.2
    });
    gsap.from(".hero-bg", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        delay: 2
    });


    // -------------------------------------------------
    // NAVBAR SCROLL EFFECTS
    // -------------------------------------------------
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    // -------------------------------------------------
    // SCROLL REVEAL ANIMATIONS
    // -------------------------------------------------
    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
