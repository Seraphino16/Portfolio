'use client'

import React, {useEffect, useState} from "react";
import styles from "../../styles/page.module.scss";
import aboutSection from "../../styles/about.module.scss";
import TechnoBox from "@/app/components/TechnoBox/TechnoBox";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import projectSection from "@/app/styles/project.module.scss";


const languageStack = [
    'html',
    'css',
    'javascript',
    'typescript',
    'php',
];

const frameworkStack = [
    'angular',
    'symphony',
    'nestJS',
    'nextJS',
    'react',
];

const otherTechnoStack = [
    'git',
    'github',
    'jira',
    'docker',
];

const descriptionText = "Je suis actuellement en formation à la Web@cadémie d'Epitech, en alternance chez Adeo, où j'ai développé une solide expertise en Angular et NestJS. Je reste ouvert à la découverte de nouveaux outils et frameworks.\n" +
    "\n" +
    "Ce qui me motive dans le développement, c'est la résolution de problèmes : comprendre un besoin utilisateur et construire une solution technique efficace. J'apprécie la dimension logique du code et la satisfaction de voir une fonctionnalité prendre vie.\n" +
    "\n" +
    "Mon alternance touchant bientôt à sa fin, je suis ouvert à de nouvelles opportunités qui me permettront de continuer à apprendre, idéalement dans des projets variés mêlant front-end et back-end.\n" +
    "\n" +
    "En dehors du code, je suis amateur de musique, d'escalade et de sorties culturelles. Autant d'activités qui" +
    " nourrissent ma créativité et mon équilibre."

enum TechnoFilter {
    all = 'all',
    languages = 'languages',
    frameworks = 'frameworks',
    'others' = 'others',
}


const AboutMeSection = () => {

    const [filter, setFilter] = useState(TechnoFilter.all);
    const [filteredStack, setFilteredStack] = useState<string[]>([]);

    useEffect(() => {
        switch (filter) {
            case TechnoFilter.languages:
                setFilteredStack(languageStack);
                break;
            case TechnoFilter.frameworks:
                setFilteredStack(frameworkStack);
                break;
            case TechnoFilter.others:
                setFilteredStack(otherTechnoStack);
                break;
            case TechnoFilter.all:
            default :
                setFilteredStack(languageStack.concat(frameworkStack, otherTechnoStack));
        }
    }, [filter]);

    const handleDownloadCV = async () => {
        const response = await fetch('/api/download-cv', {
            method: 'GET',
        });

        if (response.status !== 200) {
            console.error(response.status, response.statusText);
        }

        const blob = await response.blob();
        const url = globalThis.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'cv';
        link.click();
        globalThis.URL.revokeObjectURL(url);
    }

    return (
        <section id={'about'} className={styles.section}>
            <div className={aboutSection.container}>
                <h2>À propos de moi</h2>
                <div className={aboutSection.containerBox}>
                    <p className={aboutSection.containerBoxText}>{descriptionText}</p>
                </div>
                <div className={aboutSection.containerButtons}>
                    <CustomButton text={'Télécharger mon CV'} customClickEvent={handleDownloadCV} type={'gradient'} icon={'/icons/User_02.svg'} alt={'Icône téléchargement'} />
                    <div className={aboutSection.containerButtons}>
                        <CustomButton text={'Github'} link={'https://github.com/Seraphino16'} type={'gray'} icon={'/icons/User_02.svg'} alt={'Icône' +
                            ' Github'} />
                        <CustomButton text={'LinkedIn'} link={'https://www.linkedin.com/in/s%C3%A9raphin-benoit-142374267/'} type={'gray'} icon={'/icons/User_02.svg'} alt={'Icône' +
                            ' LinkedIn'} />
                    </div>

                </div>
            </div>
            <div className={aboutSection.container}>
                <h2>Mes compétences</h2>
                <div className={projectSection.filters}>
                    <button
                        className={`${projectSection.filterBtn} ${filter === TechnoFilter.all ? projectSection.active : ''}`}
                        onClick={() => setFilter(TechnoFilter.all)}
                    >
                        Tous
                    </button>
                    <button
                        className={`${projectSection.filterBtn} ${filter === TechnoFilter.languages ? projectSection.active : ''}`}
                        onClick={() => setFilter(TechnoFilter.languages)}
                    >
                       Languages
                    </button>
                    <button
                        className={`${projectSection.filterBtn} ${filter === TechnoFilter.frameworks ? projectSection.active : ''}`}
                        onClick={() => setFilter(TechnoFilter.frameworks)}
                    >
                        Frameworks
                    </button>
                    <button
                        className={`${projectSection.filterBtn} ${filter === TechnoFilter.others ? projectSection.active : ''}`}
                        onClick={() => setFilter(TechnoFilter.others)}
                    >
                        Autres
                    </button>
                </div>
                <div className={aboutSection.containerSkills}>
                    <div className={aboutSection.containerSkills}>

                    </div>
                    {filteredStack.map((tech, i) => (
                        <TechnoBox key={i} techno={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;