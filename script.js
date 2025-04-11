// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.8)';
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-card, .about-content, .about-image');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate-fadeInUp');
        }
    });
};

// Initial animation check
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Skills progress bar animation
const animateSkills = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
};

// Trigger skills animation when skills section is in view
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
}

// Add typing effect to hero section
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing effect
const heroText = document.querySelector('.hero-section h1');
if (heroText) {
    const text = heroText.textContent;
    typeWriter(heroText, text);
}

// Game-like interactions

// Add game-like hover sound effects
const addHoverSound = () => {
    const hoverSound = new Audio('assets/hover.mp3');
    hoverSound.volume = 0.2;
    
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => console.log('Audio play failed:', e));
        });
    });
};

// Add click sound effects
const addClickSound = () => {
    const clickSound = new Audio('assets/click.mp3');
    clickSound.volume = 0.3;
    
    const clickableElements = document.querySelectorAll('a, button, .btn');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => console.log('Audio play failed:', e));
        });
    });
};

// Add particle effects to hero section
const addParticleEffect = () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        heroSection.appendChild(particle);
    }
};

// Add game-like progress indicator
const addProgressIndicator = () => {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-indicator');
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Add Easter egg
const addEasterEgg = () => {
    let konami = '';
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    
    document.addEventListener('keydown', (e) => {
        konami += e.key;
        
        if (konamiCode.indexOf(konami) !== 0) {
            konami = '';
        }
        
        if (konami === konamiCode) {
            document.body.classList.add('easter-egg');
            setTimeout(() => {
                document.body.classList.remove('easter-egg');
            }, 5000);
            konami = '';
        }
    });
};

// Initialize game-like features
window.addEventListener('load', () => {
    // Only initialize sound effects if user has interacted with the page
    document.addEventListener('click', () => {
        addHoverSound();
        addClickSound();
    }, { once: true });
    
    addParticleEffect();
    addProgressIndicator();
    addEasterEgg();
}); 