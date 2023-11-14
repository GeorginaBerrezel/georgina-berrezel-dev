# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Mon Portfolio

Bienvenue sur mon portfolio ! Ce projet a été créé avec React et utilise SCSS pour les styles.

## Installation

Suivez ces étapes pour installer et exécuter le projet localement :

1. **Clonez le projet :**

   ```bash
   git clone https://github.com/ton-utilisateur/mon-portfolio.git
   cd mon-portfolio
   

## Installez les dépendances :

    ``` bash
    npm install

2. **Compilez les fichiers SCSS :**

    ``` bash
    npm run compile-scss

## Lancez le serveur de développement :

    ``` bash
    npm start

Le projet sera accessible à l'adresse http://localhost:3000 dans votre navigateur.

## Problèmes Courants et Solutions
Erreur de Compilation avec node-sass
Si vous rencontrez des problèmes de compilation avec node-sass, essayez d'utiliser le package sass à la place :

    ``` bash
    npm uninstall node-sass
    npm install sass --save-dev

## Modifiez également vos scripts dans le fichier package.json pour utiliser sass :

    ``` bash
    "scripts": {
    // ...
    "compile-scss": "sass src/styles/App.scss src/styles/App.css"
    // ...
    }

Erreurs liées à 'jsxDEV'
Si vous rencontrez des erreurs liées à 'jsxDEV', assurez-vous que vous utilisez les dernières versions de React et react-scripts :

    ``` bash
    npm install react@latest react-dom@latest react-scripts@latest

## N'oubliez pas de supprimer le dossier node_modules et le fichier package-lock.json avant de réinstaller les dépendances.

## Contribuer
Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou une pull request. Votre contribution est la bienvenue !

Copie et colle ce contenu dans ton fichier `README.md`. Si tu as d'autres demandes ou des ajustements à faire, n'hésite pas à me le faire savoir !
