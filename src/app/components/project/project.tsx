import React from 'react';
import projectStyle from './project.module.scss';
import Image from "next/image";
import {ProjectInterface} from "@/app/components/sections/ProjectSection";
import {FaLongArrowAltRight} from "react-icons/fa";

interface ProjectProps {
    project: ProjectInterface,
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className={projectStyle.box}>
            <Image
                className={projectStyle.boxImage}
                src={project.image}
                alt={`${project.name} capture d'écran`}
                width={500}
                height={500}
            />
            <div className={projectStyle.boxContent}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={projectStyle.boxContentLink}>
                    <FaLongArrowAltRight size={20} />
                    <p>Voir plus</p>
                </div>
            </div>
        </div>
    )
}

export default Project;