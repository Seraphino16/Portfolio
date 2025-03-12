import React from "react";
import button from "./customButton.module.scss"
import Image from "next/image";

interface CustomButtonProps {
    text: string;
    type: string;
    icon: string;
    alt: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, icon, alt}) => {
    return (
        <div className={`${button.button} ${type === 'gradient' ? button.buttonGradient : button.buttonGray}`}>
            <Image src={icon} alt={alt} width={24} height={24} />
            <p className={button.buttonText}>{ text }</p>
        </div>
    )
}

export default CustomButton;