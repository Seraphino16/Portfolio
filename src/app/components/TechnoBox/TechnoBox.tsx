import React from "react";
import technoStyle from "./technoBox.module.scss"
import {FaAngular, FaCss3, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaPhp, FaReact} from "react-icons/fa";
import {SiJavascript, SiTypescript} from "react-icons/si";

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