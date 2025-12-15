---
sidebar_position: 5
---

# 📤 Soumission du projet

:::success Deadline finale
**Dimanche 12h00** : soumission obligatoire pour participer à l'évaluation

📝 **Méthode** : Publication comme réutilisation sur data.gouv.fr
:::

## 🎯 Objectif de la soumission

La soumission est le **livrable final** de votre hackathon. Elle permet de :

- ✅ **Documenter** votre projet de manière pérenne
- ✅ **Partager** votre solution avec la communauté
- ✅ **Participer** à l'évaluation par le jury
- ✅ **Valoriser** votre travail après le hackathon
- ✅ **Contribuer** à l'écosystème open data et nature en ville

:::info
Votre projet restera accessible sur data.gouv.fr après le hackathon, vous pourrez le mettre à jour et le faire évoluer !
:::

## 📝 Comment soumettre ?

### Publication sur data.gouv.fr

**Votre projet doit être publié comme une réutilisation sur data.gouv.fr.**

📚 **Guide complet** : [Comment publier une réutilisation sur data.gouv.fr](https://guides.data.gouv.fr/guide-data.gouv.fr/reutilisations/publier-une-reutilisation)

### Étapes clés

1. **Créez un compte** sur [data.gouv.fr](https://data.gouv.fr) (si pas déjà fait)
2. **Cliquez sur "Publier une réutilisation"** dans votre profil
3. **Remplissez le formulaire** selon le format ci-dessous
4. **Ajoutez le mot-clé** `hackathon-nature-en-ville` (obligatoire !)
5. **Publiez** votre réutilisation

:::warning Mot-clé obligatoire
Le mot-clé **`hackathon-nature-en-ville`** est indispensable pour que nous puissions identifier votre projet. N'oubliez pas de l'ajouter !
:::

## 📋 Format de la description

Votre réutilisation doit suivre la structure suivante :

### 1. 📌 Description générale du projet

**Titre** : Un titre clair et accrocheur

**Résumé** : 2-3 phrases présentant votre projet

**Exemple** :
> **Hirondelles 2.0** - Cartographie participative des nids d'hirondelles à Marseille
> 
> Application web permettant aux citoyens de signaler les nids d'hirondelles et aux collectivités d'identifier les zones prioritaires pour installer des nichoirs. Combine données ouvertes et sciences participatives.

---

### 2. 🎯 Problématique et proposition de valeur

Répondez aux questions :
- **Quelle problématique** votre projet résout-il ?
- **Pourquoi est-ce important ?** Quel est l'enjeu ?
- **Quelle est votre proposition de valeur ?** En quoi votre solution est-elle pertinente ?

**Exemple** :
> **Problématique** : Les populations d'hirondelles déclinent drastiquement en milieu urbain (-40% en 20 ans à Marseille). Les sites de nidification disparaissent avec la rénovation des bâtiments anciens, et les citoyens ne savent pas comment agir.
>
> **Proposition de valeur** : Créer une communauté d'observateurs pour cartographier les nids existants, sensibiliser le grand public et orienter les actions de conservation.

---

### 3. 🛠️ Solution et fonctionnalités

Décrivez :
- **Votre solution** : qu'avez-vous créé ?
- **Les fonctionnalités** : que peut-on faire avec ?
- **L'usage des données** : comment sont-elles exploitées ?
- **La méthode** : comment avez-vous procédé ?

**Exemple** :
> **Solution** : Carte interactive web permettant de :
> - 📍 Signaler un nid d'hirondelle (géolocalisation, photo, espèce)
> - 🗺️ Visualiser tous les signalements en temps réel
> - 📊 Afficher des statistiques par quartier
> - 🏠 Suggérer des emplacements optimaux pour de nouveaux nichoirs
>
> **Usage des données** :
> - Croisement avec le bâti ancien (OpenStreetMap) pour identifier les zones à fort potentiel
> - Intégration des observations INPN pour validation scientifique
> - Analyse spatiale (PostGIS) pour détecter les clusters de nidification
>
> **Méthode** :
> - Frontend : React + Leaflet pour la cartographie
> - Backend : Node.js + PostgreSQL/PostGIS
> - Algorithme : clustering DBSCAN pour identifier les zones prioritaires

---

### 4. 🌍 Impact envisagé

Précisez :
- **Les usagers visés** : qui va utiliser votre solution ?
- **Les bénéfices** : quels impacts pour chaque type d'usager ?
- **L'échelle** : potentiel de déploiement et de réplication ?

**Exemple** :
> **Usagers** :
> - 👥 **Citoyens** : localiser et protéger les nids, participer à la science citoyenne
> - 🏛️ **Collectivités** : planifier les aménagements, suivre l'évolution des populations
> - 🎓 **Associations** : coordonner les actions de protection, éduquer
> - 🔬 **Chercheurs** : analyser les dynamiques spatio-temporelles
>
> **Impact** :
> - Court terme : sensibilisation de 500+ citoyens, 200+ nids recensés
> - Moyen terme : installation de 100 nichoirs dans les zones identifiées
> - Long terme : augmentation de 30% des populations d'hirondelles d'ici 5 ans
>
> **Réplicabilité** : Solution adaptable à d'autres villes et d'autres espèces (martinets, moineaux, etc.)

---

### 5. 📦 Ressources et livrables

Partagez **tous les éléments** de votre projet :

#### Code source
- 🔗 **Dépôt GitHub/GitLab** (obligatoire si applicable)
- 📜 **Licence** : open source de préférence (MIT, Apache, GPL, etc.)
- 📖 **Documentation** : README avec instructions d'installation

#### Prototype / Démo
- 🌐 **URL de démo** (si hébergé)
- 🎥 **Vidéo de démonstration** (recommandé, 2-3 min)
- 🖼️ **Screenshots** ou GIF animés
- 📱 **APK** ou package (si application mobile)

#### Documentation projet
- 📊 **Présentation** (slides PDF)
- 📝 **Rapport technique** (optionnel)
- 🗂️ **Jeux de données produits** (si applicable)

**Exemple** :
> **Code source** : https://github.com/equipe-hirondelles/hirondelles-marseille
> - Licence : MIT
> - Installation : voir README.md
>
> **Démo** : https://hirondelles-marseille.netlify.app
> **Vidéo** : https://youtu.be/exemple123
>
> **Slides** : [Présentation_Hirondelles_2.0.pdf](lien)

---

### 6. 📊 Retours sur les données

**Section importante** pour améliorer l'écosystème de données :

#### Qualité des données
- Quelles **erreurs, incohérences ou anomalies** avez-vous identifiées ?
- Problèmes techniques (format, structure, complétude) ?
- Problèmes scientifiques (cohérence, fiabilité) ?

#### Difficultés d'exploitation
- Quels **obstacles** avez-vous rencontrés ?
- Quelles **compétences techniques** étaient nécessaires ?
- Quelles **pistes de résolution** proposez-vous ?

#### Limites et besoins
- Les données sont-elles **adaptées** à votre cas d'usage ?
- Résolution spatiale/temporelle suffisante ?
- Couverture géographique adéquate ?
- Quelles **données manquantes** auraient été utiles ?

**Exemple** :
> **Qualité** :
> - ✅ Données INPN complètes et bien structurées
> - ⚠️ Observations concentrées sur quelques quartiers (biais de collecte)
> - ❌ Données OSM : bâti sans information sur l'année de construction
>
> **Difficultés** :
> - Géocodage d'adresses complexe (formats hétérogènes)
> - Absence d'API temps réel pour INPN → scraping nécessaire
> - Données cadastrales non accessibles en open data
>
> **Besoins** :
> - Données sur les rénovations de façades (destruction de nids)
> - Cartographie des points d'eau (boue pour nids)
> - Historique des observations sur 20 ans (tendances)

---

## ✅ Check-list de soumission

Avant de publier, vérifiez que :

### Informations générales
- [ ] Titre clair et explicite
- [ ] Description complète selon le format ci-dessus
- [ ] Images/screenshots ajoutées
- [ ] URL de démo fonctionnelle (si applicable)
- [ ] Mot-clé `hackathon-nature-en-ville` ajouté

### Livrables techniques
- [ ] Dépôt de code accessible (public)
- [ ] README.md avec instructions
- [ ] Licence open source spécifiée
- [ ] Prototype fonctionnel ou vidéo de démo

### Contenu
- [ ] Problématique clairement exposée
- [ ] Solution et fonctionnalités décrites
- [ ] Impact et usagers identifiés
- [ ] Retours sur les données fournis
- [ ] Relecture orthographique effectuée

## 🕐 Timing

### Planning de la journée de dimanche

| Horaire | Activité |
|---------|----------|
| 9h00 - 11h00 | Finalisation du prototype |
| 11h00 - 11h30 | Prise de screenshots, vidéo de démo |
| 11h30 - 12h00 | Rédaction de la soumission sur data.gouv.fr |
| **12h00** | ⏰ **DEADLINE - Soumission** |
| 12h00 - 14h00 | 🍽️ Déjeuner |
| 14h00 - 17h00 | Présentations devant le jury |

:::tip Anticipez !
Commencez à rédiger votre description **dès le samedi soir** en complétant les sections que vous connaissez déjà (problématique, approche, etc.). Il ne vous restera qu'à ajouter les liens finaux dimanche matin.
:::

## 🤔 Questions fréquentes

### On n'a pas fini le développement, on peut quand même soumettre ?

**Oui !** Mieux vaut soumettre un prototype incomplet qu'un projet non soumis. Documentez ce qui a été fait et ce qui reste à faire.

### Notre code n'est pas parfait / pas propre, c'est un problème ?

**Non.** C'est un hackathon, pas une revue de code ! L'important est de montrer le concept et le potentiel de votre solution.

### On doit tout mettre en open source ?

**C'est fortement recommandé** et valorisé par le jury. Si vous avez des réserves, discutez-en avec les organisateurs.

### On peut modifier notre réutilisation après la deadline ?

**Oui**, mais les modifications post-deadline ne seront **pas prises en compte** pour l'évaluation. Vous pourrez améliorer votre projet après le hackathon.

### Notre démo ne marche plus / le serveur est tombé !

**Gardez une vidéo de sauvegarde** ! Si vous avez un GIF ou une vidéo de démonstration, le jury pourra évaluer votre travail même si la démo live plante.

### On n'a pas de données à retourner, on doit quand même remplir cette section ?

Si vous n'avez pas exploité de données ouvertes, expliquez pourquoi et quelles données auraient été utiles. Cette section peut aussi porter sur des **besoins identifiés**.

## 🏆 Après la soumission

Une fois votre projet soumis :

1. **Reposez-vous** un moment (vous l'avez mérité !)
2. **Préparez votre pitch** pour la présentation devant le jury
3. **Testez votre démo** pour être sûr qu'elle fonctionne
4. **Répétez en équipe** votre présentation

Voir la page [**Évaluation des projets**](evaluation.md) pour préparer la suite.

---

## 🔗 Navigation

<div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
  <div className="card" style={{flex: 1}}>
    <div className="card__body">
      <h3>⬅️ Précédent</h3>
      <p><a href="rendu-intermediaire">Rendu intermédiaire</a></p>
    </div>
  </div>
  <div className="card" style={{flex: 1}}>
    <div className="card__body">
      <h3>➡️ Suivant</h3>
      <p><a href="evaluation">Évaluation des projets</a></p>
    </div>
  </div>
</div>
