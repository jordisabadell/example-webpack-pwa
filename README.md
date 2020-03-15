# Webpack PWA example

L'objectiu d'aquest projecte és crear la base d'una PWA empaquetada amb Webpack en un entorn de CI/CD mitjançant GitHub, TravisCI i Firebase.

## Bibliografia utilitzada

### Manual Webpack 
Explica com configurar un entorn Webpack. Inclou la compilació dels arxius Sass.

https://desarrolloweb.com/manuales/manual-webpack.html

### Pas a pas Integració contínua Angular, GitHub, Firebase i TravisCI
https://medium.com/angular-chile/integraci%C3%B3n-continua-angular-github-firebase-travis-ci-a1a8946d471a

> ***Important!*** Aquest pas a pas és per una app Angular. Cal adaptar-lo a l'entorn Webpack

Modificar l'arxiu ***.travis.yml*** perquè en comptes d'executar l'app angular executi la comanda * * npm run build * * de la nostra aplicació. 
```
before_script:
  - npm install -g firebase-tools
script:
  - npm run build 
after_success:
  - firebase deploy --token $FIREBASE_TOKEN
```
### Guia per convertir una web en PWA
https://vaadin.com/learn/tutorials/learn-pwa/turn-website-into-a-pwa

### Guia per afegir un Service Worker en un entorn Webpack
https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack

### Webpack plugin per crear l'arxiu Manifest.json en un entorn Webpack
https://www.npmjs.com/package/webpack-pwa-manifest


## IDE
[Visual Studio Code](https://code.visualstudio.com/)

### Solució al problema d'execució d'scripts des de la Terminal de VSCode
Per habiliar l'execució d'scripts des de la Terminal de VSCode (Powershell). Executar la següent comanda, amb permisos d'administrador, des de la pròpia Terminal de VSCode.
```
Set-ExecutionPolicy Unrestricted
```
Font: https://www.alexmedina.net/habilitar-la-ejecucion-de-scripts-para-powershell/


