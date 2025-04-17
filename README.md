# Clone Deliveroo - Frontend

Ce projet est un clone de l'interface utilisateur de Deliveroo, développé avec React et Vite. Il reproduit l'expérience de commande de nourriture en ligne avec une interface similaire à celle de Deliveroo.

## 🚀 Fonctionnalités

- Affichage des restaurants et des menus
- Système de panier avec ajout/suppression d'articles
- Calcul automatique du sous-total
- Interface responsive similaire à Deliveroo

## 🛠️ Technologies utilisées

- React 19
- Vite
- Axios pour les requêtes API
- CSS pour le style

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🔧 Installation

1. Clonez ce dépôt

```
git clone <url-du-repo>
```

2. Installez les dépendances

```
yarn install
```

ou

```
npm install
```

3. Lancez le serveur de développement

```
yarn dev
```

ou

```
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## 🔄 API Backend

Ce frontend se connecte à une API backend hébergée à l'adresse :

```
https://site--deliveroo-backend--vphy6y45v8nk.code.run/
```

## 📦 Structure du projet

- `/src/components` : Composants React organisés par fonctionnalité
  - Header : Navigation et logo
  - Hero : Bannière principale
  - Categorie : Affichage des catégories de plats
  - Card : Gestion du panier

## 🚀 Déploiement

Pour construire l'application pour la production :

```
yarn build
```

ou

```
npm run build
```

## 📝 Licence

Ce projet est un exercice d'apprentissage et n'est pas affilié à Deliveroo.
