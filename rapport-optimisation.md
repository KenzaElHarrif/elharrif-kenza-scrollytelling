#  [Rapport d’optimisation du projet ScrollyTelling](https://pagespeed.web.dev/analysis/https-kenza-tim-momo-com/7tul36ylmg?form_factor=mobile).

Page Speed Insights - Rapport du 9 mai 2024, 14:23:24

## Problème #1

### Tâches lourdes dans le "thread" principale.

### Optimiser les fichiers Javascript, CSS et HTML

- Afin d'alléger le temps de chargement sur le thread principale, il faut aller se débarasser des fonctions de lourde tâche dans le fichier JavaScript ou les minimiser. De plus il faut alléger le css, enlever ce qui est non nécéssaire et de même pour le HTML.

## Problème #2

### Dimension des images

### Actions photoshop
- Redimensionner les images à l'aide d'Action Photoshop car elles paraissent petites sur le site mais sont de dimensions énormes, ce qui diminue grandement la performance.

## Problème #3

### Chargement des images

### Chargement différé des images
- Rajouter le "loading="lazy"..." afin de pouvoir charger les images au moment convenu pour diminuer le temps de chargement.

## Rapport du projet ScrollyTelling après optimisation

