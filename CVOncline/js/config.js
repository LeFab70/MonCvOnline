// Configuration file for the CV website
const CONFIG = {
    // EmailJS Configuration (read from window.ENV when present)
    EMAILJS: {
        get SERVICE_ID() { return (window.ENV && window.ENV.EMAILJS_SERVICE_ID) || 'REQUIRED_IN_ENV'; },
        get TEMPLATE_ID() { return (window.ENV && window.ENV.EMAILJS_TEMPLATE_ID) || 'REQUIRED_IN_ENV'; },
        get PUBLIC_KEY() { return (window.ENV && window.ENV.EMAILJS_PUBLIC_KEY) || 'REQUIRED_IN_ENV'; }
    },
    
    // Animation Configuration
    ANIMATIONS: {
        DURATION: 800,
        EASING: 'ease-in-out',
        OFFSET: 100,
        ONCE: true
    },
    
    // Contact Information
    CONTACT: {
        EMAIL: 'kouonang2002@gmail.com',
        PHONE: '438 985-5417',
        LOCATION: 'Campbellton, Nouveau-Brunswick',
        SOCIAL: {
            LINKEDIN: '#',
            GITHUB: '#',
            TWITTER: '#'
        }
    },
    
    // Skills Configuration
    SKILLS: {
        FRONTEND: [
            { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: 'text-orange-500' },
            { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: 'text-blue-500' },
            { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', color: 'text-yellow-500' },
            { name: 'Angular', level: 75, icon: 'fab fa-angular', color: 'text-red-600' },
            { name: 'Tailwind CSS', level: 85, icon: 'fab fa-css3-alt', color: 'text-cyan-500' },
            { name: 'TypeScript', level: 80, icon: 'fas fa-code', color: 'text-blue-700' }
        ],
        BACKEND: [
            { name: 'C# / .NET', level: 75, icon: 'fas fa-code', color: 'text-indigo-600' },
            { name: 'C++', level: 70, icon: 'fas fa-code', color: 'text-gray-700' },
            { name: 'Node.js', level: 75, icon: 'fab fa-node-js', color: 'text-green-600' },
            { name: 'Spring Boot', level: 60, icon: 'fas fa-leaf', color: 'text-green-700' },
            { name: 'MySQL', level: 85, icon: 'fas fa-database', color: 'text-orange-500' },
            { name: 'PostgreSQL', level: 70, icon: 'fas fa-database', color: 'text-blue-500' },
            { name: 'MongoDB', level: 70, icon: 'fas fa-database', color: 'text-green-500' }
        ],
        MOBILE: [
            { name: 'Swift', level: 80, icon: 'fab fa-swift', color: 'text-orange-500' },
            { name: 'Android', level: 75, icon: 'fab fa-android', color: 'text-green-500' },
            { name: 'Flutter', level: 70, icon: 'fas fa-mobile-alt', color: 'text-blue-500' }
        ],
        TOOLS: [
            { name: 'Git', level: 85, icon: 'fab fa-git-alt', color: 'text-orange-500' },
            { name: 'Docker', level: 70, icon: 'fab fa-docker', color: 'text-blue-500' },
            { name: 'GitHub', level: 85, icon: 'fab fa-github-alt', color: 'text-gray-800' },
            { name: 'GitLab', level: 75, icon: 'fab fa-gitlab', color: 'text-orange-600' },
            { name: 'n8n (Automatisation)', level: 60, icon: 'fas fa-diagram-project', color: 'text-indigo-500' },
            { name: 'AWS', level: 65, icon: 'fab fa-aws', color: 'text-orange-500' },
            { name: 'Azure (préparation)', level: 50, icon: 'fab fa-microsoft', color: 'text-blue-600' }
        ]
    },
    
    // Experience Configuration
    EXPERIENCE: [
        {
            title: 'Développeur Full Stack Senior',
            company: 'TechCorp Solutions',
            period: '2022 - Présent',
            description: 'Développement d\'applications web complètes avec PHP, JavaScript et MySQL. Gestion d\'équipes de 5 développeurs et mise en place de bonnes pratiques DevOps.',
            technologies: ['PHP', 'JavaScript', 'MySQL', 'AWS'],
            color: 'blue'
        },
        {
            title: 'Développeur Mobile',
            company: 'MobileFirst Agency',
            period: '2020 - 2022',
            description: 'Développement d\'applications mobiles iOS avec Swift et Android avec Java. Collaboration étroite avec les équipes de design et intégration d\'APIs REST.',
            technologies: ['Swift', 'Java', 'Flutter', 'Figma'],
            color: 'purple'
        },
        {
            title: 'Développeur Junior',
            company: 'WebDev Startup',
            period: '2018 - 2020',
            description: 'Développement de fonctionnalités pour une plateforme e-commerce. Apprentissage des technologies modernes et participation aux sprints agiles.',
            technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
            color: 'green'
        }
    ]
};

// Export for use in other scripts
window.CONFIG = CONFIG;
