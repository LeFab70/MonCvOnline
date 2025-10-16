# CV en ligne - Fabrice Kouonang

## 🚀 Description

CV en ligne moderne et interactif créé avec HTML5, TailwindCSS, JavaScript et des animations avancées. Ce CV présente un design responsive avec de nombreuses animations et effets visuels pour créer une expérience utilisateur exceptionnelle.

## ✨ Fonctionnalités

### 🎨 Design & Animations
- **Design moderne** avec dégradés et effets de verre
- **Animations fluides** avec GSAP (GreenSock)
- **Effets de parallaxe** et éléments flottants
- **Transitions CSS** avancées avec cubic-bezier
- **Design responsive** pour tous les appareils

### 🛠️ Technologies utilisées
- **HTML5** - Structure sémantique
- **TailwindCSS** - Framework CSS utilitaire
- **JavaScript (ES6+)** - Interactivité et animations
- **Alpine.js** - Framework JavaScript léger
- **GSAP** - Bibliothèque d'animations professionnelles
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographie Inter

### 📱 Sections du CV
1. **Hero Section** - Présentation avec animations de frappe
2. **À propos** - Profil personnel avec effets visuels
3. **Compétences** - Barres de progression animées
4. **Expérience** - Timeline interactive
5. **Contact** - Formulaire et informations de contact

## 🚀 Installation et utilisation

### Méthode 1 : Ouverture directe
1. Ouvrez le fichier `index.html` dans votre navigateur web
2. Le CV est prêt à être visualisé !

### Méthode 2 : Serveur local (recommandé)
```bash
# Dans le dossier CVOncline
python -m http.server 8000
# ou
npx serve .
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 🔐 Configuration des variables d'environnement

Les clés EmailJS ne doivent pas être commitées. Elles sont chargées via `window.ENV`.

1) Copiez le fichier d'exemple et remplissez vos vraies clés (en local) :
```bash
cp js/env.example.js js/env.js
# éditez js/env.js et remplacez par vos valeurs EmailJS
```

2) `js/env.js` est ignoré par git (voir `.gitignore`). En production (Render), vous n'avez pas besoin de ce fichier : définissez les variables d'environnement côté hébergeur.

Variables attendues par l'app (exposées via `window.ENV` ou via Render):
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`

## ☁️ Déploiement sur Render (Static Site)

1) Poussez le projet sur GitHub
2) Sur Render, créez un "Static Site" depuis le repo
3) Répertoire racine: `CVOncline`
4) Build command: (vide)
5) Publish directory: `CVOncline`
6) Ajoutez les Variables d'environnement:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

L'app charge `js/env.js` si présent, sinon lit `window.ENV` fourni via Render.

## 🧭 Git: initialisation et push

Depuis la racine du projet `emploiFab` :
```bash
cd /Users/fabricekouonang/Documents/emploiFab
git init
git remote add origin https://github.com/LeFab70/MonCvOnline.git
git add CVOncline
git commit -m "feat: CV en ligne + env externalisé EmailJS"
git push -u origin main
```

Si `main` n'existe pas encore :
```bash
git branch -M main
git push -u origin main
```

## 🎯 Personnalisation

### Modifier les informations personnelles
Éditez les sections suivantes dans `index.html` :
- Nom et titre dans la section Hero
- Informations de contact dans la section Contact
- Expériences professionnelles
- Compétences techniques

### Changer les couleurs
Modifiez les classes TailwindCSS :
- `gradient-bg` pour le dégradé principal
- `text-gradient` pour les textes en dégradé
- Couleurs des icônes et éléments

### Ajouter des animations
Utilisez GSAP pour créer de nouvelles animations :
```javascript
gsap.from('.element', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power2.out'
});
```

## 📱 Responsive Design

Le CV s'adapte automatiquement à :
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🌟 Animations incluses

- **Typing animation** - Effet de frappe pour le nom
- **Floating elements** - Éléments flottants
- **Card hover effects** - Effets au survol des cartes
- **Scroll-triggered animations** - Animations au défilement
- **Skill bar animations** - Barres de compétences animées
- **Timeline animations** - Animations de la timeline d'expérience

## 🔧 Optimisations

- **Performance** - Chargement optimisé des ressources
- **SEO** - Balises meta et structure sémantique
- **Accessibilité** - Navigation au clavier et lecteurs d'écran
- **Cross-browser** - Compatible avec tous les navigateurs modernes

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

## 🤝 Support

Pour toute question ou suggestion d'amélioration, n'hésitez pas à me contacter !

---

**Fabrice Kouonang** - Développeur Full Stack Passionné
