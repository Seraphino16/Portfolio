import React from 'react';
import modalStyle from '@/app/components/projectModal/projectModal.module.scss';
import {ProjectInterface} from "@/app/components/sections/ProjectSection";

interface ProjectModalProps {
    project: ProjectInterface | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className={modalStyle.overlay} onClick={onClose}>
            <div className={modalStyle.content} onClick={(e) => e.stopPropagation()}>
                <button className={modalStyle.close} onClick={onClose}>×</button>
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className={modalStyle.banner}
                    />
                )}

                <div className={modalStyle.header}>
                    <div>
                        <h2>{project.title}</h2>
                        <p className={modalStyle.subtitle}>{project.subtitle}</p>
                    </div>
                </div>

                <div className={modalStyle.body}>
                    <div className={modalStyle.section}>
                        <h3>Technologies</h3>
                        <div className={modalStyle.tags}>
                            {project.technologies.map((tech, i) => (
                                <span key={i} className={modalStyle.tag}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className={modalStyle.section}>
                        <h3>Description</h3>
                        <p>{project.fullDescription}</p>
                    </div>

                    {project.context && (
                        <div className={modalStyle.section}>
                            <h3>Contexte</h3>
                            <p>{project.context}</p>
                        </div>
                    )}

                    <div className={modalStyle.section}>
                        <h3>Compétences RNCP mobilisées</h3>
                        {project.competences.map((bloc, idx) => (
                            <div key={idx} className={modalStyle.competenceBloc}>
                                <h4>{bloc.bloc}</h4>
                                <ul>
                                    {bloc.items.map((item, i) => {
                                        // Séparer le titre de la description avec le ":"
                                        const parts = item.split(' : ');
                                        if (parts.length === 2) {
                                            return (
                                                <li key={i}>
                                                    <strong>{parts[0]}</strong> : {parts[1]}
                                                </li>
                                            );
                                        }
                                        return <li key={i}>{item}</li>;
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;