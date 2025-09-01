// --- Table of Contents ---
// 1. Sticky Header
// 2. Fade-in on Scroll Animation
// 3. WhatsApp Integration
// 4. Contact Form Submission (Placeholder)
// --------------------------

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Fade-in on Scroll Animation
    const sections = document.querySelectorAll('.container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));


});

// 3. WhatsApp Integration
function sendToWhatsApp(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Format the message with line breaks and formatting
    const formattedMessage = `*New Travel Inquiry*%0A%0A` +
                           `*Name:* ${name}%0A` +
                           `*Service Needed:* ${service}%0A` +
                           `*Message:*%0A${message}`;
    
    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/96170445873?text=${formattedMessage}`, '_blank');
    
    // Reset the form
    form.reset();
}