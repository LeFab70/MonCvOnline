# Guide d'Installation - CV en ligne Fabrice Kouonang

## 📁 Structure du projet

```
CVOncline/
├── index.html          # Page principale
├── css/
│   └── styles.css      # Styles personnalisés
├── js/
│   ├── animations.js   # Animations et interactions
│   ├── email.js        # Gestion des emails
│   └── config.js       # Configuration
├── images/             # Dossier pour les images
├── README.md           # Documentation
└── INSTALLATION.md     # Ce guide
```

## 🚀 Installation rapide

### 1. Configuration EmailJS (Optionnel mais recommandé)

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Modifiez le fichier `js/config.js` :

```javascript
EMAILJS: {
    SERVICE_ID: 'votre_service_id',
    TEMPLATE_ID: 'votre_template_id',
    PUBLIC_KEY: 'votre_cle_publique'
}
```

### 2. Personnalisation du contenu

#### Informations personnelles
Modifiez dans `index.html` :
- Nom et titre dans la section Hero
- Informations de contact
- Expériences professionnelles
- Compétences techniques

#### Configuration avancée
Modifiez `js/config.js` pour :
- Ajuster les niveaux de compétences
- Modifier les expériences
- Changer les informations de contact

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `css/styles.css` :
```css
.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Animations
Ajustez les paramètres dans `js/animations.js` :
```javascript
ANIMATIONS: {
    DURATION: 800,
    EASING: 'ease-in-out',
    OFFSET: 100
}
```

### Compétences
Ajoutez/modifiez les compétences dans `js/config.js` :
```javascript
FRONTEND: [
    { name: 'Nouvelle Tech', level: 80, icon: 'fab fa-icon', color: 'text-blue-500' }
]
```

## 📱 Déploiement

### Option 1 : Hébergement statique
- **Netlify** : Glissez-déposez le dossier
- **Vercel** : Connectez votre repository
- **GitHub Pages** : Activez dans les paramètres

### Option 2 : Serveur local
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Option 3 : Serveur web
Uploadez tous les fichiers sur votre serveur web.

## 🔧 Configuration EmailJS détaillée

### 1. Créer un compte EmailJS
1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un service email
1. Dans le dashboard, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Suivez les instructions de configuration
5. Notez le Service ID

### 3. Créer un template
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}}

Bonjour Fabrice,

Vous avez reçu un nouveau message de {{from_name}} ({{from_email}}).

Sujet: {{subject}}

Message:
{{message}}

Cordialement,
Système de contact
```

4. Notez le Template ID

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez la "Public Key"

### 5. Mettre à jour la configuration
Modifiez `js/config.js` avec vos vraies valeurs.

## 🎯 Fonctionnalités

### ✅ Inclus
- [x] Design responsive
- [x] Animations fluides
- [x] Formulaire de contact fonctionnel
- [x] Navigation smooth scroll
- [x] Icônes des technologies
- [x] Barres de compétences animées
- [x] Timeline d'expérience
- [x] Effets de parallaxe
- [x] Menu mobile
- [x] Validation de formulaire

### 🔧 Personnalisable
- [x] Couleurs et thèmes
- [x] Contenu et informations
- [x] Compétences et technologies
- [x] Expériences professionnelles
- [x] Animations et transitions
- [x] Configuration email

## 🐛 Dépannage

### Le formulaire ne fonctionne pas
1. Vérifiez la configuration EmailJS
2. Vérifiez la console du navigateur pour les erreurs
3. Testez avec des données valides

### Les animations ne s'affichent pas
1. Vérifiez que les fichiers JS sont chargés
2. Vérifiez la console pour les erreurs
3. Testez sur un serveur local

### Problèmes de responsive
1. Vérifiez les classes TailwindCSS
2. Testez sur différentes tailles d'écran
3. Ajustez les breakpoints si nécessaire

## 📞 Support

Pour toute question ou problème :
- Vérifiez ce guide d'installation
- Consultez la documentation des technologies utilisées
- Contactez-moi via le formulaire du site

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

---

**Fabrice Kouonang** - Développeur Full Stack Passionné


