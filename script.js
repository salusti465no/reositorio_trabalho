// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
});

function initializeWebsite() {
    // Add smooth scrolling to all links
    addSmoothScrolling();
    
    // Add click handler to CTA button
    setupCTAButton();
    
    // Add mobile menu functionality (if needed in future)
    setupMobileMenu();
    
    // Add animation to feature cards
    setupCardAnimations();
}

// Smooth scrolling for navigation links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// CTA Button functionality
function setupCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Show alert for now - can be enhanced later
            alert('Obrigado pelo interesse! Entre em contato conosco para mais informações.');
            
            // Could redirect to contact page or show a modal
            // window.location.href = 'contato.html';
        });
    }
}

// Mobile menu setup (placeholder for future enhancement)
function setupMobileMenu() {
    // This can be enhanced later for mobile hamburger menu
    console.log('Mobile menu setup ready');
}

// Feature card animations
function setupCardAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    
    // Add intersection observer for animations when cards come into view
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
}

// Utility function to show notifications (can be used later)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}