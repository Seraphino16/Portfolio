import React from 'react';
import projectStyle from './project.module.scss';
import Image from "next/image";
import {ProjectInterface} from "@/app/components/sections/ProjectSection";
import {FaLongArrowAltRight} from "react-icons/fa";

interface ProjectProps {
    project: ProjectInterface,
    onClick: (project: ProjectInterface) => void;
}

const Project: React.FC<ProjectProps> = ({ project, onClick }) => {

    return (
        <div className={projectStyle.box} onClick={() => onClick(project)}>
            {project.image && (
                <Image
                    className={projectStyle.boxImage}
                    src={project.image}
                    alt={`${project.title} capture d'écran`}
                    width={500}
                    height={500}
                />
            )}
            <div className={`${projectStyle.boxContent} ${project.image ? projectStyle.boxContentWithImage : ''}`}>
                <h3>{project.title}</h3>
                <p className={projectStyle.subtitle}>{project.subtitle}</p>
                <p>{project.shortDescription}</p>
                <div className={projectStyle.tags}>
                    {project.technologies.map((tech, i) => (
                        <span key={i} className={projectStyle.tag}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Project;