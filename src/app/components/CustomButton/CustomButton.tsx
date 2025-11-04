import React from "react";
import button from "./customButton.module.scss"
import Image from "next/image";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IconType} from "react-icons";

interface CustomButtonProps {
    text: string;
    type: string;
    icon: string;
    alt: string;
    link?: string
    customClickEvent?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, icon, alt, link, customClickEvent }) => {

    const getReactIcon = (): React.JSX.Element | null => {
        if (text === 'Github') {
            return <FaGithub size={20} />
        } else if (text === 'LinkedIn') {
            return <FaLinkedin size={20} />
        } else {
            return null;
        }
    }

    return (
        <div>
            {link ? (
                <a href={link} target='_blank' className={`${button.button} ${type === 'gradient' ? button.buttonGradient : button.buttonGray}`}>
                    { getReactIcon() }
                    <p className={button.buttonText}>{ text }</p>
                </a>
            ) : (
                <div onClick={customClickEvent} onKeyDown={customClickEvent} className={`${button.button} ${type === 'gradient' ? button.buttonGradient : button.buttonGray}`}>
                    <Image src={icon} alt={alt} width={24} height={24} />
                    <p className={button.buttonText}>{ text }</p>
                </div>
                )}
        </div>
    )
}

export default CustomButton;