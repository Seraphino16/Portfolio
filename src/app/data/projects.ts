import {ProjectInterface} from "@/app/components/sections/ProjectSection";

const projects = [
    {
        id: 'epimusic',
        title: 'Epimusic',
        subtitle: 'E-commerce',
        category: 'phares',
        image: '/img/project/e-commerce_instruments.png',
        shortDescription: 'Site e-commerce spécialisé dans la vente de produits musicaux',
        technologies: ['React', 'Symfony', 'MySQL', 'Stripe'],
        fullDescription: `Site e-commerce spécialisé dans la vente de produits musicaux (instruments, vinyles, goodies). Projet académique complet couvrant l'intégralité du cycle de développement web, de la conception à la livraison. Inclut un système de fidélisation ludique avec un mini-jeu rythmique (type Guitar Hero).`,
        context: `Projet en méthode agile avec sprints courts de 3,5 jours et un "client" (formateur) demandant régulièrement des modifications importantes, simulant ainsi les contraintes d'un projet réel. La gestion des données était stimulante car nous avons créé une vingtaine de tables MySQL avec des relations complexes (Produits, Users, Panier, Promotions, Commandes, etc.)`,
        competences: [
            {
                bloc: 'Cadrage et conception',
                items: [
                    'Rédaction du Cahier Des Charges : Expression complète des besoins pour un site e-commerce musical avec respect du RGPD',
                    'Rédaction des spécifications techniques : Cadrage technique détaillé (architecture API REST, intégration Stripe, gestion du stock)',
                    'Déploiement de l\'environnement de travail : Configuration des outils de versioning et collaboration',
                    'Réalisation de maquettes : Conception Figma de toutes les pages en respectant l\'ergonomie et l\'accessibilité',
                    'Identification des fonctionnalités à développer : Modélisation complète avec ~20 tables',
                    'Rédaction d\'une présentation : Présentation et validation des choix techniques auprès du client'
                ]
            },
            {
                bloc: 'Développement',
                items: [
                    'Rédaction du code de la solution : Développement complet en respectant les normes',
                    'Intégration des différents éléments : Intégration fidèle selon les maquettes Figma',
                    'Implémentation de la partie front-end : Application React complète avec gestion d\'état',
                    'Implémentation de la logique et la base de données : API REST Symfony avec toute la logique métier',
                    'Implémentation des règles d\'authentification : Système sécurisé avec gestion des rôles'
                ]
            },
            {
                bloc: 'Assurance qualité',
                items: [
                    'Rédaction d\'une documentation technique : Documentation complète de l\'API',
                    'Rédaction d\'une documentation utilisateur : Guide pour utilisateurs et administrateurs',
                    'Monitoring du lancement : Recueil et analyse des retours tout au long des sprints',
                    'Identification des améliorations : Analyse continue pour améliorer la solution',
                    'Rédaction d\'un document argumentatif : Propositions d\'améliorations'
                ]
            }
        ]
    },
    {
        id: 'soundwave',
        title: 'Soundwave',
        subtitle: 'Plateforme sociale musicale',
        category: 'phares',
        image: '/img/project/soundwave_albums.png',
        shortDescription: 'Plateforme sociale dédiée aux avis sur la musique',
        technologies: ['React', 'NestJS', 'MongoDB'],
        fullDescription: `Plateforme sociale dédiée à la musique permettant aux utilisateurs de partager leurs avis sur des albums, à la manière de Letterboxd pour le cinéma. Le projet inclut des pages artistes et albums où les utilisateurs peuvent publier des "waves" (posts/critiques). Développé en équipe de 5 personnes dans un contexte académique.`,
        context: `Projet mené de A à Z en méthode agile avec Jira (sprints), communication via Discord et versioning sur GitHub. L'équipe a géré l'ensemble du cycle : idéation, définition des fonctionnalités, maquettage, cahier des charges et développement.`,
        competences: [
            {
                bloc: 'Cadrage et conception',
                items: [
                    'Rédaction du Cahier Des Charges : Définition collaborative des besoins pour une plateforme sociale musicale',
                    'Rédaction des spécifications techniques : Définition de l\'architecture technique (stack MERN avec NestJS)',
                    'Déploiement de l\'environnement de travail : Infrastructure complète (GitHub, Jira, Discord)',
                    'Identification des fonctionnalités à développer : Modélisation de l\'architecture MongoDB',
                    'Rédaction d\'une présentation : Présentation des choix techniques et maquettes'
                ]
            },
            {
                bloc: 'Développement',
                items: [
                    'Développement du prototype : Création d\'un MVP fonctionnel',
                    'Rédaction du code de la solution : Transcription des fonctionnalités avec React et NestJS',
                    'Intégration des différents éléments : Interface utilisateur selon les maquettes',
                    'Implémentation des règles d\'authentification : Système maison et OAuth (Google, Spotify)'
                ]
            },
            {
                bloc: 'Assurance qualité',
                items: [
                    'Rédaction d\'une documentation technique : Documentation API et code',
                    'Rédaction d\'un document argumentatif : Propositions d\'améliorations'
                ]
            }
        ]
    },
    {
        id: 'twitter',
        title: 'Tweet academy',
        subtitle: 'Clone de réseau social',
        category: 'phares',
        image: '/img/project/tweet_academy.png',
        shortDescription: 'Clone de Twitter avec gestion des relations sociales',
        technologies: ['PHP natif', 'MySQL'],
        fullDescription: `Clone du réseau social Twitter développé en PHP natif. Permet aux utilisateurs de publier des tweets, interagir via likes et retweets, suivre d'autres utilisateurs et rechercher par hashtags. Focus sur la modélisation d'un système de réseau social avec des relations de données complexes.`,
        context: `Timeline personnalisée, publication de tweets, système de retweets et réponses, likes, profils utilisateurs, système de followers/following, hashtags avec recherche, pages profils.`,
        competences: [
            {
                bloc: 'Cadrage et conception',
                items: [
                    'Identification des fonctionnalités à développer : Modélisation complète d\'un réseau social avec architecture MySQL complexe gérant les relations multiples entre utilisateurs'
                ]
            },
            {
                bloc: 'Développement',
                items: [
                    'Implémentation de la logique et la base de données : Architecture back-end complexe en PHP natif gérant toute la logique métier (publication, interactions sociales, algorithme de timeline)',
                    'Implémentation des règles d\'authentification : Système de connexion sécurisé avec gestion des sessions'
                ]
            }
        ]
    },
    {
        id: 'snapchat',
        title: 'My_Snapchat',
        subtitle: 'Application mobile',
        category: 'autres',
        shortDescription: 'Application de messagerie photo éphémère. Clone de Snapchat',
        technologies: ['React Native', 'API REST'],
        fullDescription: `Application mobile de messagerie photo éphémère inspirée de Snapchat. Développement cross-platform permettant l'envoi de photos qui disparaissent après lecture. Projet introduisant le développement mobile et l'utilisation de fonctionnalités natives (caméra).`,
        context: `Développement mobile avec React Native pour iOS et Android, utilisation d'une API fournie pour la gestion back-end. Inscription et connexion, ajout d'amis via recherche, capture photo avec la caméra, envoi de snaps éphémères qui disparaissent après visualisation.`,
        competences: [
            {
                bloc: 'Développement',
                items: [
                    'Implémentation des règles d\'authentification : Système de connexion mobile sécurisé avec gestion des sessions et ajout d\'amis',
                    'Implémentation de la partie front-end : Développement d\'une application mobile cross-platform'
                ]
            }
        ]
    },
    {
        id: 'irc',
        title: 'My IRC',
        subtitle: 'Messagerie temps réel',
        category: 'autres',
        // image: '/images/irc.png',
        shortDescription: 'Client de messagerie instantanée IRC',
        technologies: ['JavaScript', 'WebSockets'],
        fullDescription: `Client de messagerie instantanée en temps réel permettant la communication entre utilisateurs via des salons de discussion. Implémentation des commandes IRC classiques.`,
        context: ``,
        competences: [
            {
                bloc: 'Développement',
                items: [
                    'Rédaction du code de la solution : Développement d\'un système de chat temps réel',
                    'Implémentation de la logique et la base de données : Architecture permettant la gestion des salons et utilisateurs',
                    'Intégration des différents éléments : Interface de chat avec WebSockets'
                ]
            }
        ]
    },
    {
        id: 'tcg',
        title: 'My TCG',
        subtitle: 'Jeu de cartes',
        category: 'autres',
        // image: '/images/tcg.png',
        shortDescription: 'Trading Card Game avec approche TDD',
        technologies: ['JavaScript'],
        fullDescription: `Projet de jeu de cartes à collectionner où l'objectif principal était de développer des tests unitaires et d'intégration avant l'implémentation des fonctionnalités (Test-Driven Development - TDD).`,
        context: `Code partiellement fourni avec des classes et fonctions vides. L'objectif était de créer d'abord les tests selon les descriptions fournies, puis d'implémenter les fonctions pour atteindre 100% de couverture de tests.`,
        competences: [
            {
                bloc: 'Développement',
                items: [
                    'Implémentation d\'un plan de tests : Conception et développement de tests unitaires et d\'intégration selon l\'approche TDD avec couverture à 100%'
                ]
            }
        ]
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        subtitle: 'Ce projet',
        category: 'autres',
        // image: '/images/portfolio.png',
        shortDescription: 'Portfolio personnel avec NextJS',
        technologies: ['NextJS', 'SCSS'],
        fullDescription: `Portfolio personnel présentant mes compétences et réalisations en développement web. Vitrine professionnelle optimisée et déployée en production, avec focus sur l'accessibilité et les performances.`,
        context: `Actuellement sur Vercel, avec projet de migration vers un serveur personnel pour plus de contrôle.`,
        competences: [
            {
                bloc: 'Développement',
                items: [
                    'Déploiement d\'une application web : Mise en production sur Vercel avec configuration du serveur'
                ]
            },
            {
                bloc: 'Assurance qualité',
                items: [
                    'Monitoring du lancement : Suivi post-déploiement avec surveillance de l\'accessibilité',
                    'Identification des améliorations : Analyse continue pour optimiser le portfolio'
                ]
            }
        ]
    },
    {
        id: 'dev-responsable',
        title: 'Dev Responsable',
        subtitle: 'Optimisation',
        category: 'autres',
        // image: '/images/dev-responsable.png',
        shortDescription: 'Optimisation performance d\'Epimusic',
        technologies: ['Lighthouse', 'SEO'],
        fullDescription: `Projet d'optimisation du projet Epimusic existant. L'objectif était d'améliorer les performances, le SEO et les temps de chargement pour offrir une meilleure expérience utilisateur.`,
        context: `Utilisation de Lighthouse comme outil principal de mesure et d'audit pour identifier les axes d'amélioration (performance, accessibilité, SEO, bonnes pratiques).`,
        competences: [
            {
                bloc: 'Assurance qualité',
                items: [
                    'Analyser la qualité de l\'ergonomie et de l\'accessibilité : Audit complet avec Lighthouse',
                    'Identifier des améliorations : Analyse détaillée des points faibles et proposition de solutions'
                ]
            }
        ]
    }
] as ProjectInterface[];

export default projects;