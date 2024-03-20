// Smooth scrolling for Learn More button
document.querySelector('.learn-more-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Modal popup for project details
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Display modal popup with project details
        // You can implement this using CSS or JavaScript as per your preference
    });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form validation here
    // If validation passes, display a thank you message
    // If validation fails, display error messages
});
