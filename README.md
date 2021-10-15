# GuidedRose_Refacto Axel Paris & Theo Charron

## Liste des améliorations possibles

Ces améliorations vont de la plus simple à mettre en place à la plus compliquée.

- ✅ Vérifier les égalités avec 3 opérateurs (ex: `if(variable != 2)` à remplacer par `if(variable !== 2)`)
- ✅ Décrémenter/incrémenter en utilisant l'opérateur `-=` ainsi que `+=`
- ✅ Utiliser des constantes à la place des nombres "dans le dur". Ces nombres concernent la quantité max et la limite max de jours avant la vente
- ✅ Utiliser la méthode `.map` au lieu d'une boucle `for()`
  - Ça permet "simplifier visuellement" le code
- Ajouter une méthode `updateQuality()` dans la classe Item car le Shop ne doit pas avoir la responsabilité de la qualité des produits
- Il y a trop de `if/else`, trouver une solution pour rendre le code plus simple (solution à trouver)
