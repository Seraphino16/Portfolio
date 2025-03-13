import React from 'react';
import style from '../../styles/page.module.scss';
import projectSection from '../../styles/project.module.scss';
import Project from "@/app/components/project/project";

export interface ProjectInterface {
    name: string;
    image: string;
    description: string;
}

const projects: ProjectInterface[] = [
    {
        name: 'battleship',
        image: '/img/project/battleship.png',
        description: 'Le battleship est un projet de debug où l\'on reçoit un projet cassé et nous devons le rendre fonctionnel'
    },
    {
        name: 'battleship',
        image: '/img/project/battleship.png',
        description: 'Le battleship est un projet de debug où l\'on reçoit un projet cassé et nous devons le rendre fonctionnel'
    },
    {
        name: 'battleship',
        image: '/img/project/battleship.png',
        description: 'Le battleship est un projet de debug où l\'on reçoit un projet cassé et nous devons le rendre fonctionnel'
    },
    {
        name: 'battleship',
        image: '/img/project/battleship.png',
        description: 'Le battleship est un projet de debug où l\'on reçoit un projet cassé et nous devons le rendre fonctionnel'
    },
    {
        name: 'battleship',
        image: '/img/project/battleship.png',
        description: 'Le battleship est un projet de debug où l\'on reçoit un projet cassé et nous devons le rendre fonctionnel'
    },

]

const ProjectSection = () => {
    return (
        <section id={'projects'} className={style.section}>
            <div className={projectSection.container}>
                <h2>Mes projets</h2>
                <div className={projectSection.containerCardBox}>
                    {projects.map((project) => (
                        <Project key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;