# Hive Front

Front-end déployé sur Github pages : [https://ruff9.github.io/hive_front/](https://ruff9.github.io/hive_front/)

Le back-end est déployée sur Scalingo : [https://hive-api.osc-fr1.scalingo.io](https://hive-api.osc-fr1.scalingo.io)

et le code du back est disponible ici : [https://github.com/Ruff9/hive_api](https://github.com/Ruff9/hive_api)

## Setup

```
$ npm install
```

Pour lancer les tests end to end avec Cypress, il faut avoir lancé le serveur local pour le front :

```
$ npm run dev
```

mais aussi pour le back end,

```
$ rails server
```

Depuis le dossier du back end, dans un autre onglet de console.

On peut alors lancer Cypress, choisir "end to end" puis son navigateur.

```
$ npx cypress open
```
