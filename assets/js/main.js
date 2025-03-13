// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu functionality
    const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('.section');
    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if(mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a menu item
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if(window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if(window.innerWidth <= 768 && 
               !sidebar.contains(e.target) && 
               !mobileMenuToggle.contains(e.target) &&
               sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    // Função para destacar o item de menu ativo com base na posição de scroll
    function highlightMenuOnScroll() {
        let scrollPosition = window.scrollY;
        
        // Determinar qual seção está visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover classe ativa de todos os links
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Adicionar classe ativa ao link correspondente
                document.querySelector(`.menu a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    }
    
    // Adicionar evento de scroll para destacar o menu
    window.addEventListener('scroll', highlightMenuOnScroll);
    
    // Manter a funcionalidade de clique no menu para scroll suave
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open (for responsive design)
            if(window.innerWidth <= 768) {
                // Add mobile menu toggle functionality here if needed
            }
        });
    });
    
    // Portfolio filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', formValues);
            
            // Show success message (you can customize this)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Initialize the page with the first section active
    setActiveSection('#home');
    
    // Add scroll reveal animations (optional)
    // You can add a library like ScrollReveal for this
    
    // Typing effect for the home section (optional)
    // You can add a library like Typed.js for this
    
    // Add this to the end of your DOMContentLoaded function
    
    // Initialize ScrollReveal for animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    // Apply animations to different sections
    sr.reveal('.section-content h2', {});
    sr.reveal('.profile', { delay: 300 });
    sr.reveal('.about-text', { delay: 400 });
    sr.reveal('.skills', { delay: 500 });
    sr.reveal('.service-card', { interval: 200 });
    sr.reveal('.portfolio-item', { interval: 200 });
    sr.reveal('.contact-info', { delay: 300 });
    sr.reveal('.contact-form', { delay: 400 });
    
    // Add a typing effect to the home section
    if(document.querySelector('#home h2')) {
        const text = document.querySelector('#home h2').innerHTML;
        const typingSpeed = 100;
        let i = 0;
        
        document.querySelector('#home h2').innerHTML = '';
        
        function typeWriter() {
            if (i < text.length) {
                document.querySelector('#home h2').innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start the typing effect when home section is visible
        if(document.querySelector('#home').classList.contains('active')) {
            setTimeout(typeWriter, 500);
        }
        
        // Restart typing effect when home menu is clicked
        document.querySelector('a[href="#home"]').addEventListener('click', function() {
            i = 0;
            document.querySelector('#home h2').innerHTML = '';
            setTimeout(typeWriter, 500);
        });
    }
    
    // Add this to your DOMContentLoaded function
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if(backToTopButton) {
        window.addEventListener('scroll', function() {
            if(window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
});


// Add this to your existing JavaScript file

// Skill icons animation
document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Add animation class
            this.classList.add('animate');
            
            // Toggle active state
            this.classList.toggle('active');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('animate');
            }, 800);
            
            // If this icon is now active, deactivate others
            if (this.classList.contains('active')) {
                skillIcons.forEach(otherIcon => {
                    if (otherIcon !== this && otherIcon.classList.contains('active')) {
                        otherIcon.classList.remove('active');
                    }
                });
            }
        });
    });
});

// Portfolio carousel functionality
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const carousel = item.querySelector('.portfolio-carousel');
        if (!carousel) return;
        
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        const dots = carousel.querySelectorAll('.dot');
        
        let currentSlide = 0;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show the selected slide
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        // Event listeners for next and previous buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });
        
        // Auto-advance slides (optional)
        let slideInterval;
        
        function startSlideShow() {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 5000); // Change slide every 5 seconds
        }
        
        function stopSlideShow() {
            clearInterval(slideInterval);
        }
        
        // Start slideshow when hovering over the portfolio item
        item.addEventListener('mouseenter', stopSlideShow);
        item.addEventListener('mouseleave', startSlideShow);
        
        // Start the slideshow initially
        startSlideShow();
    });