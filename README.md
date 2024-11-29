# TEST TECHNIQUE SISMIC

## DESCRIPTION

Application web permettant de gérer une liste d'utilisateurs.

## FONCTIONNALITES

- Affichage des utilisateurs dans un tableau.
- Filtrage des utilisateurs.
- Ajout et suppression utilisateur.

## INSTALLATION

1. Clonez le dépôt.
2. Se placer dans le répertoire.
3. npm install.

### `npm start`

Ouvre l'application [http://localhost:3000](http://localhost:3000) dans le navigateur.

### `npm test`

Exécute les tests.

### STRUCTURE
 
![alt text](https://github.com/marcucus/testsismic/struct.jpg?raw=ture)

### DECISION TECHNIQUES

1. Utilisation de TypeScript
Facilite la maintenance grâce au typage strict.
Réduit les erreurs en développement grâce à l'autocomplétion et la vérification des types.

2. Headless UI pour la modale
Fournit une modale accessible et facile à personnaliser.
Permet de se concentrer sur les fonctionnalités sans réinventer la roue.

3. TailwindCSS
Accélère le développement avec des classes utilitaires.
Simplifie le style sans nécessiter de fichiers CSS volumineux.

4. Tests avec JEST
Permet de tester le comportement de l'interface utilisateur.