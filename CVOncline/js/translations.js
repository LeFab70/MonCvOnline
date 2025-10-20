// Translation system for CV website
const TRANSLATIONS = {
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            education: "Formation",
            experience: "Expérience",
            projects: "Projets",
            volunteer: "Bénévolat",
            contact: "Contact",
            french: "FR",
            english: "EN"
        },
        
        // Hero Section
        hero: {
            name: "Fabrice Kouonang",
            title: "Développeur Full Stack Passionné",
            subtitle: "Créateur d'expériences numériques exceptionnelles avec une expertise en développement web et mobile moderne",
            discover: "Découvrir mon profil",
            contact: "Me contacter"
        },
        
        // About Section
        about: {
            title: "À propos de moi",
            subtitle: "Passionné par l'innovation technologique",
            description1: "Développeur full-stack avec une passion pour créer des solutions numériques innovantes. Je combine créativité et expertise technique pour transformer des idées en applications web et mobile performantes et élégantes.",
            description2: "Mon approche se concentre sur l'expérience utilisateur, la performance et la maintenabilité du code. J'aime relever de nouveaux défis et apprendre continuellement les dernières technologies.",
            development: "Développement",
            developmentSub: "Web & Mobile",
            backend: "Backend",
            backendSub: "API & Services",
            innovation: "Innovation & Créativité"
        },
        
        // Skills Section
        skills: {
            title: "Compétences Techniques",
            frontend: "Frontend",
            backend: "Backend",
            mobile: "Mobile & Frameworks",
            tools: "Outils & Tech"
        },
        
        // Education Section
        education: {
            title: "Formation",
            diploma1: "Diplôme en programmation mobile et applications",
            diploma1School: "Collège communautaire du Nouveau-Brunswick • diplôme prévu en juin 2026",
            diploma2: "AEC en programmation des applications mobiles",
            diploma2School: "Collège Gérald-Godin • diplôme prévu en octobre 2025",
            master: "Master en informatique",
            masterSchool: "ISTDI/CS2I (Cameroun) • études incomplètes (2006 à 2008)",
            google: "Certificat professionnel en soutien TI – Google",
            googleDate: "Juillet 2023",
            aws: "AWS Certified Cloud Practitioner",
            awsDate: "Octobre 2022",
            azure: "Préparation – Microsoft Azure Developer Associate",
            azureDate: "Prévu en décembre 2025",
            technician: "Brevet de technicien en maintenance informatique",
            technicianSchool: "ISTDI/CS2I (Cameroun) • octobre 2004 à juillet 2006"
        },
        
        // Experience Section
        experience: {
            title: "Expérience Professionnelle",
            fac: "Forces armées canadiennes – Réserviste",
            facPeriod: "Depuis septembre 2025",
            facLocation: "Canada",
            guesthub: "Développeur – Projet GuestHub",
            guesthubPeriod: "Depuis septembre 2025",
            guesthubCompany: "Ultraspec",
            guesthubDesc: "Concevoir une application de gestion de visiteurs. Angular pour le tableau de bord, iOS (Swift) pour le mobile et Node.js/Express + PostgreSQL pour le backend.",
            tutor: "Tuteur",
            tutorPeriod: "Depuis septembre 2025",
            tutorCompany: "CCNB Bathurst",
            tutorDesc: "Offrir du soutien à l'apprentissage aux étudiants d'analyse de données.",
            tech: "Technicien TI",
            techPeriod: "Février 2024 - Juin 2024",
            techCompany: "CCNB Campbellton",
            techDesc1: "Maintenir l'inventaire des équipements et des logiciels.",
            techDesc2: "Apporter un soutien aux usagers du CCNB.",
            techDesc3: "Installer et configurer les salles Flex.",
            responsible: "Responsable TI",
            responsiblePeriod: "Octobre 2022 - Janvier 2023",
            responsibleCompany: "Blessing and Service, Cameroun",
            responsibleDesc1: "Installer, configurer, sécuriser et mettre à jour un parc de 20+ ordinateurs.",
            responsibleDesc2: "Diagnostiquer et résoudre les problèmes de connectivité, d'imprimantes et de périphériques réseau.",
            developer: "Développeur FullStack",
            developerPeriod: "Mai 2008 - Mai 2022",
            developerCompany: "Clear Solutions, Cameroun",
            developerDesc1: "Former le personnel à l'utilisation des solutions logicielles déployées.",
            developerDesc2: "Maintenir, mettre à jour et documenter les API REST et solutions logicielles.",
            developerDesc3: "Identifier les besoins des clients et recueillir leurs exigences."
        },
        
        // Projects Section
        projects: {
            title: "Projets Scolaires",
            subtitle: "Projets développés dans le cadre de mes études en programmation mobile et applications",
            mailbox: "MailBox",
            mailboxDesc: "Système de gestion de messagerie",
            mailboxDetail: "Développement d'un système web de gestion de messagerie avec backend Node.js/Express/MySQL et interface moderne en HTML/Tailwind CSS/JavaScript. API REST complète avec authentification JWT.",
            expense: "SwiftDataExpensesSave",
            expenseDesc: "Application iOS de gestion des dépenses",
            expenseDetail: "Application iOS développée en SwiftUI avec SwiftData, intégrant la gestion des images, la caméra et la géolocalisation, connectée à un backend Firebase/Firestore.",
            gym: "GymApp",
            gymDesc: "Application interactive de partage sportif",
            gymDetail: "Application iOS interactive favorisant le partage d'activités sportives entre utilisateurs, avec intégration de la reconnaissance d'images (MobileNetV2), des notifications push et du partage de scores en ligne.",
            githubButton: "Voir tous mes projets sur GitHub",
            githubLink: "Voir sur GitHub"
        },
        
        // Volunteer Section
        volunteer: {
            title: "Implication sociale",
            devVolunteer: "Développeur bénévole FullStack – Carrefour Parent Enfant, Montréal",
            devVolunteerPeriod: "Avril à décembre 2023",
            teacherVolunteer: "Enseignant bénévole de Français – Maison de l'Amitié, Montréal",
            teacherVolunteerPeriod: "Avril à décembre 2023",
            author: "Auteur d'un livret d'informatique (niveau 1 à 6)",
            authorDetail: "Utilisé dans plus de 30 écoles à Douala – Septembre 2020"
        },
        
        // Contact Section
        contact: {
            title: "Contactez-moi",
            subtitle: "Parlons de votre projet",
            description: "Je suis toujours intéressé par de nouveaux défis et opportunités. N'hésitez pas à me contacter pour discuter de votre projet !",
            email: "Email",
            phone: "Téléphone",
            location: "Localisation",
            name: "Nom",
            namePlaceholder: "Votre nom",
            emailPlaceholder: "votre@email.com",
            subject: "Sujet",
            subjectPlaceholder: "Sujet de votre message",
            message: "Message",
            messagePlaceholder: "Votre message...",
            sendButton: "Envoyer le message",
            successMessage: "Message envoyé avec succès !",
            errorMessage: "Erreur lors de l'envoi du message. Veuillez réessayer."
        },
        
        // Footer
        footer: {
            name: "Fabrice Orgrick Kouonang",
            subtitle: "Développeur Full Stack Passionné",
            copyright: "Tous droits réservés."
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            volunteer: "Volunteer",
            contact: "Contact",
            french: "FR",
            english: "EN"
        },
        
        // Hero Section
        hero: {
            name: "Fabrice Kouonang",
            title: "Passionate Full Stack Developer",
            subtitle: "Creator of exceptional digital experiences with expertise in modern web and mobile development",
            discover: "Discover my profile",
            contact: "Contact me"
        },
        
        // About Section
        about: {
            title: "About me",
            subtitle: "Passionate about technological innovation",
            description1: "Full-stack developer with a passion for creating innovative digital solutions. I combine creativity and technical expertise to transform ideas into high-performance and elegant web and mobile applications.",
            description2: "My approach focuses on user experience, performance and code maintainability. I love taking on new challenges and continuously learning the latest technologies.",
            development: "Development",
            developmentSub: "Web & Mobile",
            backend: "Backend",
            backendSub: "API & Services",
            innovation: "Innovation & Creativity"
        },
        
        // Skills Section
        skills: {
            title: "Technical Skills",
            frontend: "Frontend",
            backend: "Backend",
            mobile: "Mobile & Frameworks",
            tools: "Tools & Tech"
        },
        
        // Education Section
        education: {
            title: "Education",
            diploma1: "Diploma in mobile programming and applications",
            diploma1School: "New Brunswick Community College • degree expected June 2026",
            diploma2: "AEC in mobile application programming",
            diploma2School: "Gérald-Godin College • degree expected October 2025",
            master: "Master in Computer Science",
            masterSchool: "ISTDI/CS2I (Cameroon) • incomplete studies (2006 to 2008)",
            google: "Professional Certificate in IT Support – Google",
            googleDate: "July 2023",
            aws: "AWS Certified Cloud Practitioner",
            awsDate: "October 2022",
            azure: "Preparation – Microsoft Azure Developer Associate",
            azureDate: "Expected December 2025",
            technician: "Technical Certificate in Computer Maintenance",
            technicianSchool: "ISTDI/CS2I (Cameroon) • October 2004 to July 2006"
        },
        
        // Experience Section
        experience: {
            title: "Professional Experience",
            fac: "Canadian Armed Forces – Reservist",
            facPeriod: "Since September 2025",
            facLocation: "Canada",
            guesthub: "Developer – GuestHub Project",
            guesthubPeriod: "Since September 2025",
            guesthubCompany: "Ultraspec",
            guesthubDesc: "Design a visitor management application. Angular for the dashboard, iOS (Swift) for mobile and Node.js/Express + PostgreSQL for the backend.",
            tutor: "Tutor",
            tutorPeriod: "Since September 2025",
            tutorCompany: "CCNB Bathurst",
            tutorDesc: "Provide learning support to data analysis students.",
            tech: "IT Technician",
            techPeriod: "February 2024 - June 2024",
            techCompany: "CCNB Campbellton",
            techDesc1: "Maintain equipment and software inventory.",
            techDesc2: "Provide support to CCNB users.",
            techDesc3: "Install and configure Flex rooms.",
            responsible: "IT Manager",
            responsiblePeriod: "October 2022 - January 2023",
            responsibleCompany: "Blessing and Service, Cameroon",
            responsibleDesc1: "Install, configure, secure and update a fleet of 20+ computers.",
            responsibleDesc2: "Diagnose and resolve connectivity, printer and network device issues.",
            developer: "FullStack Developer",
            developerPeriod: "May 2008 - May 2022",
            developerCompany: "Clear Solutions, Cameroon",
            developerDesc1: "Train staff on the use of deployed software solutions.",
            developerDesc2: "Maintain, update and document REST APIs and software solutions.",
            developerDesc3: "Identify customer needs and gather their requirements."
        },
        
        // Projects Section
        projects: {
            title: "Academic Projects",
            subtitle: "Projects developed as part of my studies in mobile programming and applications",
            mailbox: "MailBox",
            mailboxDesc: "Email management system",
            mailboxDetail: "Development of a web email management system with Node.js/Express/MySQL backend and modern interface in HTML/Tailwind CSS/JavaScript. Complete REST API with JWT authentication.",
            expense: "SwiftDataExpensesSave",
            expenseDesc: "iOS expense management app",
            expenseDetail: "iOS application developed in SwiftUI with SwiftData, integrating image management, camera and geolocation, connected to a Firebase/Firestore backend.",
            gym: "GymApp",
            gymDesc: "Interactive sports sharing app",
            gymDetail: "Interactive iOS application promoting sports activity sharing between users, with image recognition integration (MobileNetV2), push notifications and online score sharing.",
            githubButton: "View all my projects on GitHub",
            githubLink: "View on GitHub"
        },
        
        // Volunteer Section
        volunteer: {
            title: "Social involvement",
            devVolunteer: "FullStack volunteer developer – Carrefour Parent Enfant, Montreal",
            devVolunteerPeriod: "April to December 2023",
            teacherVolunteer: "French volunteer teacher – Maison de l'Amitié, Montreal",
            teacherVolunteerPeriod: "April to December 2023",
            author: "Author of a computer science booklet (grades 1 to 6)",
            authorDetail: "Used in more than 30 schools in Douala – September 2020"
        },
        
        // Contact Section
        contact: {
            title: "Contact me",
            subtitle: "Let's talk about your project",
            description: "I'm always interested in new challenges and opportunities. Feel free to contact me to discuss your project!",
            email: "Email",
            phone: "Phone",
            location: "Location",
            name: "Name",
            namePlaceholder: "Your name",
            emailPlaceholder: "your@email.com",
            subject: "Subject",
            subjectPlaceholder: "Subject of your message",
            message: "Message",
            messagePlaceholder: "Your message...",
            sendButton: "Send message",
            successMessage: "Message sent successfully!",
            errorMessage: "Error sending message. Please try again."
        },
        
        // Footer
        footer: {
            name: "Fabrice Orgrick Kouonang",
            subtitle: "Passionate Full Stack Developer",
            copyright: "All rights reserved."
        }
    }
};

// Language management class
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('cv-language') || 'fr';
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLanguage);
        this.setupLanguageSwitchers();
    }
    
    updateLanguage(lang) {
        if (!TRANSLATIONS[lang]) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('cv-language', lang);
        
        const t = TRANSLATIONS[lang];
        
        // Update navigation
        this.updateText('[data-translate="nav.home"]', t.nav.home);
        this.updateText('[data-translate="nav.about"]', t.nav.about);
        this.updateText('[data-translate="nav.skills"]', t.nav.skills);
        this.updateText('[data-translate="nav.education"]', t.nav.education);
        this.updateText('[data-translate="nav.experience"]', t.nav.experience);
        this.updateText('[data-translate="nav.projects"]', t.nav.projects);
        this.updateText('[data-translate="nav.volunteer"]', t.nav.volunteer);
        this.updateText('[data-translate="nav.contact"]', t.nav.contact);
        
        // Update hero section
        this.updateText('[data-translate="hero.name"]', t.hero.name);
        this.updateText('[data-translate="hero.title"]', t.hero.title);
        this.updateText('[data-translate="hero.subtitle"]', t.hero.subtitle);
        this.updateText('[data-translate="hero.discover"]', t.hero.discover);
        this.updateText('[data-translate="hero.contact"]', t.hero.contact);
        
        // Update about section
        this.updateText('[data-translate="about.title"]', t.about.title);
        this.updateText('[data-translate="about.subtitle"]', t.about.subtitle);
        this.updateText('[data-translate="about.description1"]', t.about.description1);
        this.updateText('[data-translate="about.description2"]', t.about.description2);
        this.updateText('[data-translate="about.development"]', t.about.development);
        this.updateText('[data-translate="about.developmentSub"]', t.about.developmentSub);
        this.updateText('[data-translate="about.backend"]', t.about.backend);
        this.updateText('[data-translate="about.backendSub"]', t.about.backendSub);
        this.updateText('[data-translate="about.innovation"]', t.about.innovation);
        
        // Update skills section
        this.updateText('[data-translate="skills.title"]', t.skills.title);
        this.updateText('[data-translate="skills.frontend"]', t.skills.frontend);
        this.updateText('[data-translate="skills.backend"]', t.skills.backend);
        this.updateText('[data-translate="skills.mobile"]', t.skills.mobile);
        this.updateText('[data-translate="skills.tools"]', t.skills.tools);
        
        // Update education section
        this.updateText('[data-translate="education.title"]', t.education.title);
        this.updateText('[data-translate="education.diploma1"]', t.education.diploma1);
        this.updateText('[data-translate="education.diploma1School"]', t.education.diploma1School);
        this.updateText('[data-translate="education.diploma2"]', t.education.diploma2);
        this.updateText('[data-translate="education.diploma2School"]', t.education.diploma2School);
        this.updateText('[data-translate="education.master"]', t.education.master);
        this.updateText('[data-translate="education.masterSchool"]', t.education.masterSchool);
        this.updateText('[data-translate="education.google"]', t.education.google);
        this.updateText('[data-translate="education.googleDate"]', t.education.googleDate);
        this.updateText('[data-translate="education.aws"]', t.education.aws);
        this.updateText('[data-translate="education.awsDate"]', t.education.awsDate);
        this.updateText('[data-translate="education.azure"]', t.education.azure);
        this.updateText('[data-translate="education.azureDate"]', t.education.azureDate);
        this.updateText('[data-translate="education.technician"]', t.education.technician);
        this.updateText('[data-translate="education.technicianSchool"]', t.education.technicianSchool);
        
        // Update experience section
        this.updateText('[data-translate="experience.title"]', t.experience.title);
        this.updateText('[data-translate="experience.fac"]', t.experience.fac);
        this.updateText('[data-translate="experience.facPeriod"]', t.experience.facPeriod);
        this.updateText('[data-translate="experience.facLocation"]', t.experience.facLocation);
        this.updateText('[data-translate="experience.guesthub"]', t.experience.guesthub);
        this.updateText('[data-translate="experience.guesthubPeriod"]', t.experience.guesthubPeriod);
        this.updateText('[data-translate="experience.guesthubCompany"]', t.experience.guesthubCompany);
        this.updateText('[data-translate="experience.guesthubDesc"]', t.experience.guesthubDesc);
        this.updateText('[data-translate="experience.tutor"]', t.experience.tutor);
        this.updateText('[data-translate="experience.tutorPeriod"]', t.experience.tutorPeriod);
        this.updateText('[data-translate="experience.tutorCompany"]', t.experience.tutorCompany);
        this.updateText('[data-translate="experience.tutorDesc"]', t.experience.tutorDesc);
        this.updateText('[data-translate="experience.tech"]', t.experience.tech);
        this.updateText('[data-translate="experience.techPeriod"]', t.experience.techPeriod);
        this.updateText('[data-translate="experience.techCompany"]', t.experience.techCompany);
        this.updateText('[data-translate="experience.techDesc1"]', t.experience.techDesc1);
        this.updateText('[data-translate="experience.techDesc2"]', t.experience.techDesc2);
        this.updateText('[data-translate="experience.techDesc3"]', t.experience.techDesc3);
        this.updateText('[data-translate="experience.responsible"]', t.experience.responsible);
        this.updateText('[data-translate="experience.responsiblePeriod"]', t.experience.responsiblePeriod);
        this.updateText('[data-translate="experience.responsibleCompany"]', t.experience.responsibleCompany);
        this.updateText('[data-translate="experience.responsibleDesc1"]', t.experience.responsibleDesc1);
        this.updateText('[data-translate="experience.responsibleDesc2"]', t.experience.responsibleDesc2);
        this.updateText('[data-translate="experience.developer"]', t.experience.developer);
        this.updateText('[data-translate="experience.developerPeriod"]', t.experience.developerPeriod);
        this.updateText('[data-translate="experience.developerCompany"]', t.experience.developerCompany);
        this.updateText('[data-translate="experience.developerDesc1"]', t.experience.developerDesc1);
        this.updateText('[data-translate="experience.developerDesc2"]', t.experience.developerDesc2);
        this.updateText('[data-translate="experience.developerDesc3"]', t.experience.developerDesc3);
        
        // Update projects section
        this.updateText('[data-translate="projects.title"]', t.projects.title);
        this.updateText('[data-translate="projects.subtitle"]', t.projects.subtitle);
        this.updateText('[data-translate="projects.mailbox"]', t.projects.mailbox);
        this.updateText('[data-translate="projects.mailboxDesc"]', t.projects.mailboxDesc);
        this.updateText('[data-translate="projects.mailboxDetail"]', t.projects.mailboxDetail);
        this.updateText('[data-translate="projects.expense"]', t.projects.expense);
        this.updateText('[data-translate="projects.expenseDesc"]', t.projects.expenseDesc);
        this.updateText('[data-translate="projects.expenseDetail"]', t.projects.expenseDetail);
        this.updateText('[data-translate="projects.gym"]', t.projects.gym);
        this.updateText('[data-translate="projects.gymDesc"]', t.projects.gymDesc);
        this.updateText('[data-translate="projects.gymDetail"]', t.projects.gymDetail);
        this.updateText('[data-translate="projects.githubButton"]', t.projects.githubButton);
        this.updateText('[data-translate="projects.githubLink"]', t.projects.githubLink);
        
        // Update volunteer section
        this.updateText('[data-translate="volunteer.title"]', t.volunteer.title);
        this.updateText('[data-translate="volunteer.devVolunteer"]', t.volunteer.devVolunteer);
        this.updateText('[data-translate="volunteer.devVolunteerPeriod"]', t.volunteer.devVolunteerPeriod);
        this.updateText('[data-translate="volunteer.teacherVolunteer"]', t.volunteer.teacherVolunteer);
        this.updateText('[data-translate="volunteer.teacherVolunteerPeriod"]', t.volunteer.teacherVolunteerPeriod);
        this.updateText('[data-translate="volunteer.author"]', t.volunteer.author);
        this.updateText('[data-translate="volunteer.authorDetail"]', t.volunteer.authorDetail);
        
        // Update contact section
        this.updateText('[data-translate="contact.title"]', t.contact.title);
        this.updateText('[data-translate="contact.subtitle"]', t.contact.subtitle);
        this.updateText('[data-translate="contact.description"]', t.contact.description);
        this.updateText('[data-translate="contact.email"]', t.contact.email);
        this.updateText('[data-translate="contact.phone"]', t.contact.phone);
        this.updateText('[data-translate="contact.location"]', t.contact.location);
        this.updateText('[data-translate="contact.name"]', t.contact.name);
        this.updateText('[data-translate="contact.namePlaceholder"]', t.contact.namePlaceholder);
        this.updateText('[data-translate="contact.emailPlaceholder"]', t.contact.emailPlaceholder);
        this.updateText('[data-translate="contact.subject"]', t.contact.subject);
        this.updateText('[data-translate="contact.subjectPlaceholder"]', t.contact.subjectPlaceholder);
        this.updateText('[data-translate="contact.message"]', t.contact.message);
        this.updateText('[data-translate="contact.messagePlaceholder"]', t.contact.messagePlaceholder);
        this.updateText('[data-translate="contact.sendButton"]', t.contact.sendButton);
        
        // Update footer
        this.updateText('[data-translate="footer.name"]', t.footer.name);
        this.updateText('[data-translate="footer.subtitle"]', t.footer.subtitle);
        this.updateText('[data-translate="footer.copyright"]', t.footer.copyright);
        
        // Update document title
        document.title = `${t.hero.name} - ${t.hero.title}`;
        
        // Update language flags
        this.updateLanguageFlags();
        
        // Update form placeholders
        this.updatePlaceholders();
    }
    
    updateText(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.textContent = text;
        });
    }
    
    updatePlaceholders() {
        const t = TRANSLATIONS[this.currentLanguage];
        
        // Update placeholders
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const subjectInput = document.querySelector('input[name="subject"]');
        const messageTextarea = document.querySelector('textarea[name="message"]');
        
        if (nameInput) nameInput.placeholder = t.contact.namePlaceholder;
        if (emailInput) emailInput.placeholder = t.contact.emailPlaceholder;
        if (subjectInput) subjectInput.placeholder = t.contact.subjectPlaceholder;
        if (messageTextarea) messageTextarea.placeholder = t.contact.messagePlaceholder;
    }
    
    updateLanguageFlags() {
        const flags = document.querySelectorAll('.language-flag');
        flags.forEach(flag => {
            const isActive = flag.dataset.lang === this.currentLanguage;
            flag.classList.toggle('active', isActive);
        });
    }
    
    setupLanguageSwitchers() {
        const switchers = document.querySelectorAll('.language-switcher');
        switchers.forEach(switcher => {
            switcher.addEventListener('click', (e) => {
                const lang = e.target.closest('.language-switcher').dataset.lang;
                if (lang && TRANSLATIONS[lang]) {
                    this.updateLanguage(lang);
                }
            });
        });
    }
    
    switchLanguage(lang) {
        this.updateLanguage(lang);
    }
}

// Export for global use
window.LanguageManager = LanguageManager;
window.TRANSLATIONS = TRANSLATIONS;
