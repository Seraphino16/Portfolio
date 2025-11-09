import React from "react";
import technoStyle from "./technoBox.module.scss"
import {FaAngular, FaCss3Alt, FaDocker, FaGit, FaGithub, FaHtml5, FaPhp, FaReact, FaSymfony} from "react-icons/fa";
import {SiGit, SiJavascript, SiJira, SiNestjs, SiNextdotjs, SiTypescript} from "react-icons/si";

interface TechnoBoxProps {
    techno: string
}

const TechnoBox: React.FC<TechnoBoxProps> = ({ techno }) => {

    const icon = () => {
        switch(techno) {
            case 'html': return <FaHtml5 size={40} />
            case 'css': return <FaCss3Alt size={40} />
            case 'javascript':  return <SiJavascript size={40} />
            case 'php': return <FaPhp size={40} />
            case 'typescript': return <SiTypescript size={40} />
            case 'react': return <FaReact size={40} />
            case 'angular': return <FaAngular size={40} />
            case 'docker': return <FaDocker size={40} />
            case 'github': return <FaGithub size={40} />
            case 'jira': return <SiJira size={40} />
            case 'symphony': return <FaSymfony size={40} />
            case 'nestJS': return <SiNestjs size={40} />
            case 'nextJS': return <SiNextdotjs size={40} />
            case 'git': return <SiGit size={40} />
        }
    }

    return (
        <div className={technoStyle.box}>
            { icon() }
            <p>{ techno }</p>
        </div>
    )
}

export default TechnoBox;