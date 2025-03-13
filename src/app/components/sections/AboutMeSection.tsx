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

    return (
        <section id={'about'} className={styles.section}>
            <div className={aboutSection.container}>
                <h2>About me</h2>
                <div className={aboutSection.containerBox}>
                    <p className={aboutSection.containerBoxText}>Lorem ipsum dolor sit amet consectetur. Vulputate morbi massa sed quis ultricies aliquet.
                        Sit lorem nibh diam diam fusce neque eget volutpat. Fringilla cras sed amet laoreet.
                        Lobortis nisl maecenas integer eros. Quis eu ornare ante lorem nunc egestas gravida fusce
                        ultricies. Senectus nunc volutpat vulputate tincidunt consequat massa interdum tempor
                        scelerisque. Nec duis eget ipsum faucibus feugiat iaculis dui ultrices.</p>
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