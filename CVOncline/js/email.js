// EmailJS Configuration and Functions
class EmailService {
    constructor() {
        const env = (typeof window !== 'undefined' && window.ENV) ? window.ENV : {};
        this.serviceId = env.EMAILJS_SERVICE_ID || 'REQUIRED_IN_ENV';
        this.templateId = env.EMAILJS_TEMPLATE_ID || 'REQUIRED_IN_ENV';
        this.publicKey = env.EMAILJS_PUBLIC_KEY || 'REQUIRED_IN_ENV';
        this.init();
    }

    init() {
        // Load EmailJS SDK
        this.loadEmailJSSDK();
        this.setupFormHandlers();
    }

    loadEmailJSSDK() {
        if (!window.emailjs) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            script.onload = () => {
                emailjs.init(this.publicKey);
            };
            document.head.appendChild(script);
        } else {
            emailjs.init(this.publicKey);
        }
    }

    setupFormHandlers() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(contactForm);
            });
        }
    }

    async handleFormSubmit(form) {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Envoi en cours...';
        submitButton.disabled = true;

        try {
            // Get form data
            const formData = new FormData(form);
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                reply_to: formData.get('email'), // widely supported param name
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_name: 'Fabrice Kouonang',
                to_email: 'kouonang2002@gmail.com'
            };

            // Send email
            const result = await emailjs.send(this.serviceId, this.templateId, templateParams);

            if (result.status === 200) {
                this.showNotification('Message envoyé avec succès !', 'success');
                form.reset();
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }

        } catch (error) {
            console.error('EmailJS Error:', error);
            this.showNotification('Erreur lors de l\'envoi du message. Veuillez réessayer.', 'error');
        } finally {
            // Reset button state
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Alternative method using fetch API (if EmailJS is not available)
    async sendEmailFallback(formData) {
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                })
            });

            if (response.ok) {
                this.showNotification('Message envoyé avec succès !', 'success');
                return true;
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (error) {
            console.error('Fallback Email Error:', error);
            this.showNotification('Erreur lors de l\'envoi du message.', 'error');
            return false;
        }
    }
}

// Form validation
class FormValidator {
    constructor() {
        this.init();
    }

    init() {
        this.setupValidation();
    }

    setupValidation() {
        const form = document.getElementById('contactForm');
        if (form) {
            const inputs = form.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('input', () => {
                    this.clearFieldError(input);
                });
            });
        }
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        let isValid = true;
        let errorMessage = '';

        // Clear previous errors
        this.clearFieldError(field);

        // Validation rules
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Le nom doit contenir au moins 2 caractères';
                }
                break;
            
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Veuillez entrer une adresse email valide';
                }
                break;
            
            case 'subject':
                if (value.length < 5) {
                    isValid = false;
                    errorMessage = 'Le sujet doit contenir au moins 5 caractères';
                }
                break;
            
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Le message doit contenir au moins 10 caractères';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('border-red-500');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error text-red-400 text-sm mt-1';
        errorElement.textContent = message;
        
        field.parentElement.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.classList.remove('border-red-500');
        
        const errorElement = field.parentElement.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }
}

// Initialize services when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EmailService();
    new FormValidator();
});

// Export for use in other scripts
window.EmailService = EmailService;
window.FormValidator = FormValidator;
