# Tutoriel JEST via API Express

Le but de ce tutoriel est de vous faire découvrir le framework de test JEST en utilisant une API Express.

## Préparation du projet

Pour commencer, clonez le projet sur votre machine. Ensuite, rendez-vous dans le dossier du projet et installez les dépendances nécessaires avec la commande suivante: `npm install`.

Il est à noter qu'après le `npm install` une seconde commande `postinstall` va être exécutée.	Cette commande va initialiser la base de donnée SQLite et y insérer des données.

Ensuite deux commandes vous seront utiles pour lancer le projet: `npm run dev` et `npm run test`. La première commande permet de lancer le serveur Express et la seconde permet de lancer les tests JEST.

## Architecture du projet

Le projet est divisé en plusieurs dossiers et fichiers. Voici une brève description de chacun d'entre eux:
- **db**: Ce dossier contient le fichier de la base de donnée SQLite.
- **src**: Ce dossier contient le code source de l'application.
  - **index.js**: Ce fichier est le point d'entrée de l'application. Il contient le code pour lancer le serveur Express.
  - **index.test.js**: Ce fichier contient les tests JEST pour le fichier index.js.
  - **db.js**: Ce fichier contient le code pour se connecter à la base de donnée SQLite.

### Packages utilisés

Vous connaissez sans doute déjà la plupart des packages utilisés dans ce projet mais nous allons nous attarder sur deux d'entre eux: **Jest** et **Supertest**.

#### Jest

Jest est un framework de test JavaScript créé par Facebook. Il est utilisé pour tester des applications JavaScript, notamment des applications React. Jest est souvent utilisé avec des bibliothèques comme React Testing Library ou Enzyme pour tester les composants React. Vous pourrez retrouver la documentation de Jest [ici](https://jestjs.io/docs/en/getting-started).

#### Supertest

Supertest est un module de test de requêtes HTTP pour Node.js. Il permet de tester des applications Express en simulant des requêtes HTTP. Vous pourrez retrouver la documentation de Supertest [ici](https://github.com/ladjs/supertest?tab=readme-ov-file)

## Tests

Avec ce que vous avez vu en cours vous allez compléter le fichier `index.test.js` pour tester les routes de l'API Express. Vous pouvez vous inspirer du fichier `index.js` pour voir comment les routes sont implémentées.

Vous pouvez choisir l'approche que vous voulez, mais si vous souhaitez vous rapprocher durant votre exercice d'une approche professionnelle alors concentrez vous sur chaque endpoint un par un. Tâchez de tester tous les cas possibles pour chaque fonction.

Une base de test est déjà présente dans le fichier `index.test.js`. Inspirez-vous de cette base pour écrire vos tests.

Voici une liste de test minimum requis pour chaque endpoint:

- **GET /movies**
  - Testez si le status de la réponse est 200.
  - Testez si le contenu de la réponse est un tableau.
  - Testez la taille du tableau.
- **GET /movies/:movieId**
  - Testez si le status de la réponse est 200.
  - Testez si le contenu de la réponse est un objet.
  - Testez si l'objet contient les bonnes propriétés.
- **POST /movies**
  - Testez si le status de la réponse est 201 lors de la création.
  - Testez si le status de la réponse est 400 lorsque vous n'envoyez pas la totalité des données requises.
  - Testez si le status de la réponse est 400 lorsque vous avez renseigné un rating < 0 ou > 5.
- **DELETE /movies/:movieId**
  - Testez si le status de la réponse est 204.
  - Testez si le status de la réponse est 401.
- **POST /login**
  - Testez si le status de la réponse est 200.
  - Testez si le status de la réponse est 401.

>Vous ne parviendrez sûrement pas à déclencher les cas qui nécessite de générer une erreur en base de donnée. Pour cette étape ignorez ces cas de tests, nous les verrons plus tard.

## Coverage

Après avoir écrit vos tests, vous pouvez générer un rapport de couverture. Pour ce faire il va falloir créer un nouveau script `test:coverage` dans le fichier `package.json` qui va lancer les tests avec la couverture de code. En vous référant au cours, ajouter le paramètre nécesaire à la commande jest pour générer le rapport de couverture.

Vous pourrez ensuite consulter le rapport de couverture de code dans le dossier `coverage`.

## Mock de la base de donnée

Pour les tests, il est préférable de ne pas utiliser la base de donnée réelle. Pour cela, vous allez devoir utiliser un mock de la base de donnée. 

Reprenez la totalité des tests que vous avez écrit précédemment et modifiez les pour qu'ils utilisent le mock de la base de donnée. Vous pouvez vous inspirer du cours pour voir comment utiliser un mock de la base de donnée.

### Générer une erreur en base de donnée

Pour générer une erreur en base de donnée, vous allez devoir modifier le mock de la base de donnée. Ajoutez une méthode qui va générer une erreur lorsqu'elle est appelée. Vous pourrez ensuite tester les cas qui génèrent une erreur en base de donnée.

### Coverage à 100%

Après avoir modifié vos tests pour utiliser le mock de la base de donnée, vous pouvez générer un nouveau rapport de couverture. Vérifiez que le rapport de couverture est à 100%. Si ce n'est pas le cas, corrigez vos tests pour qu'ils couvrent 100% du code.

## Pour aller plus loin

Si vous avez terminé toutes les étapes précédentes, vous pouvez essayer d'améliorer la qualité du projet. Voici quelques idées pour aller plus loin:

- Redécouper votre fichier index.js en plusieurs fichiers pour mieux organiser votre code.
- Sortir les mocks de la base de donnée dans un fichier à part ou créer un fichier utils qui génère les mocks.