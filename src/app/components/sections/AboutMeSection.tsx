import React from "react";
import styles from "../../styles/page.module.scss";
import aboutSection from "../../styles/about.module.scss";
import TechnoBox from "@/app/components/TechnoBox/TechnoBox";
import CustomButton from "@/app/components/CustomButton/CustomButton";

const AboutMeSection = () => {

    const technos = [
        'html',
        'css',
        'javascript',
        'typescript',
        'php',
        'react',
        'angular',
        'docker',
        'github',
    ];

    const descriptionText = "Je suis actuellement en formation à la Web@cadémie d'Epitech, en alternance chez Adeo, où j'ai développé une solide expertise en Angular et NestJS. Je reste ouvert à la découverte de nouveaux outils et frameworks.\n" +
        "\n" +
        "Ce qui me motive dans le développement, c'est la résolution de problèmes : comprendre un besoin utilisateur et construire une solution technique efficace. J'apprécie la dimension logique du code et la satisfaction de voir une fonctionnalité prendre vie.\n" +
        "\n" +
        "Mon alternance touchant bientôt à sa fin, je suis ouvert à de nouvelles opportunités qui me permettront de continuer à apprendre, idéalement dans des projets variés mêlant front-end et back-end.\n" +
        "\n" +
        "En dehors du code, je suis amateur de musique, d'escalade et de sorties culturelles. Autant d'activités qui" +
        " nourrissent ma créativité et mon équilibre."

    return (
        <section id={'about'} className={styles.section}>
            <div className={aboutSection.container}>
                <h2>About me</h2>
                <div className={aboutSection.containerBox}>
                    <p className={aboutSection.containerBoxText}>{descriptionText}</p>
                </div>
                <div className={aboutSection.containerButtons}>
                    <CustomButton text={'Télécharger mon CV'} type={'gradient'} icon={'/icons/User_02.svg'} alt={'Icône téléchargement'} />
                    <div className={aboutSection.containerButtons}>
                        <CustomButton text={'Github'} type={'gray'} icon={'/icons/User_02.svg'} alt={'Icône Github'} />
                        <CustomButton text={'LinkedIn'} type={'gray'} icon={'/icons/User_02.svg'} alt={'Icône LinkedIn'} />
                    </div>

                </div>
            </div>
            <div className={aboutSection.container}>
                <h2>Mes compétences</h2>
                <div className={aboutSection.containerSkills}>
                    {technos.map((tech, i) => (
                        <TechnoBox key={i} techno={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;