'use client'

import React, {useState} from 'react';
import style from '../../styles/page.module.scss';
import projectSection from '../../styles/project.module.scss';
import Project from "@/app/components/project/project";
import projects from "@/app/data/projects";
import ProjectModal from "@/app/components/projectModal/ProjectModal";

export interface ProjectInterface {
    id: string,
    title: string,
    subtitle: string,
    category: string,
    image: string,
    shortDescription: string,
    technologies: string[],
    fullDescription: string,
    context: string,
    competences: {
        bloc: string,
        items: string[],
    }[],
}

const ProjectSection = () => {

    const [selectedProject, setSelectedProject] = useState<ProjectInterface | null>(null);
    const [filter, setFilter] = useState('phares');

    const filteredProjects: ProjectInterface[] = projects.filter(project =>
        filter === 'tous' ? project.category !== 'phares' : project.category === 'phares'
    );

    const openModal = (project: ProjectInterface) => {
        const scrollY = window.scrollY;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const navbar = document.getElementById('navbar');

        if (navbar) {
            navbar.style.paddingRight = `${scrollbarWidth}px`;
        }

        document.body.style.top = `-${scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);

        const scrollY = document.body.style.top;
        const navbar = document.getElementById('navbar');

        if (navbar) {
            navbar.style.paddingRight = '';
        }

        document.body.style.paddingRight = '';
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.top = '';
        document.body.style.position = '';
        window.scrollTo(0, Number.parseInt(scrollY || '0', 10) * -1);

        requestAnimationFrame(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        });
    };

    return (
        <>
            <section id='projects' className={style.section}>
                <div className={projectSection.container}>
                    <h2>Mes projets</h2>

                    <div className={projectSection.filters}>
                        <button
                            className={`${projectSection.filterBtn} ${filter === 'phares' ? projectSection.active : ''}`}
                            onClick={() => setFilter('phares')}
                        >
                            Projets phares
                        </button>
                        <button
                            className={`${projectSection.filterBtn} ${filter === 'tous' ? projectSection.active : ''}`}
                            onClick={() => setFilter('tous')}
                        >
                            Autres projets
                        </button>
                    </div>

                    <div className={projectSection.containerCardBox}>
                        {filteredProjects.map((project: ProjectInterface) => (
                            <Project key={project.id} project={project} onClick={openModal} />
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );

}

export default ProjectSection;