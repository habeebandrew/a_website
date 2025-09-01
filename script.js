// --- Table of Contents ---
// 1. Sticky Header
// 2. Fade-in on Scroll Animation
// 3. Smooth Scrolling for Nav Links (handled by CSS `scroll-behavior`)
// 4. Contact Form Submission (Placeholder)
// --------------------------

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Fade-in on Scroll Animation
    const sections = document.querySelectorAll('.container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 4. Contact Form Submission (Placeholder)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        
        // You can add your form submission logic here (e.g., using Formspree, Netlify Forms, or a backend service)
        alert('Thank you for your message! This is a demo form.');
        
        contactForm.reset(); // Clear the form
    });

});