# Bonjour Monsieur Seguin

Voici ici le livrable pour le test que vous m'avez demandé.

### <u>Initialisation du projet</u>

Pour executer le programme, il vous faudra tout d'abord installer "yarn" ainsi que les dépendances du projet. Pour cela, lancer les commande suivantes sur le terminal:

```bash
yarn && yarn add -D typescript ts-node tslib
```

Maintenant que notre projet contient nos dépendances, il va falloir créer un fichier "tsconfig.json", si il n'existe pas déjà avec la commande suivante

```bash
npx tsc --init
```

Ensuite dans ledit fichier, on va tout remplacer par le code en-dessous pour simplifier la syntaxe du fichier json:

```json
{
  "compilerOptions": {
    "lib": ["ES2015"],
    "module": "commonjs",
    "outDir": "dist", // La sortie du code compilé
    "strict": true,
    "target": "ES2015"
  },
  "include": ["src"] // L'entrée de l'écoute du code à compiler
}
```

### <u>Initialisation du package.json</u>

Ensuite il va falloir aller dans "./package.json" et entrer ceci en dessous des dépendences de développement:

```javascript
"scripts": {
    "dev": "npx tsc && node ./dist/index.js"
  },
```

### <u>Lancer le projet</u>

Enfin, si vous souhaitez le tester directement, veuillez entrer la commande suivantes dans le terminal:

```bash
yarn dev
```

Voila pour le projet, bien sûr, pour faire des modifications actuellement, il faudra aller dans le fichier "./src/index.ts" et modifier les paramêtres de la fonction MoveVaccum() selon les objects demandés en arguments tout en respectant les types d'interfaces de chacuns.
