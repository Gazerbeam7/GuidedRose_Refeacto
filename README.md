# GuidedRose_Refacto Axel Paris & Theo Charron

## Liste des améliorations possibles

Ces améliorations vont de la plus simple à mettre en place à la plus compliquée.

- Vérifier les égalités avec 3 opérateurs (ex: `if(variable != 2)` à remplacer par `if(variable !== 2)`)
- Décrémenter en utilisant l'opérateur `-=`
- Utiliser la méthode `.map` au lieu d'une boucle `for()`
  - Ça permet "simplifier visuellement" le code
- Ajouter une méthode `updateQuality()` dans la classe Item car le Shop ne doit pas avoir la responsabilité de la qualité des produits
