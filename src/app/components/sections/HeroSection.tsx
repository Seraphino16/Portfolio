import React from "react";
import styles from "../../styles/page.module.scss";
import hero from "../../styles/hero.module.scss"
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section id={'hero'} className={styles.section}>
            <h1 className={hero.title}>Bienvenue sur mon Portfolio</h1>
            <div className={hero.presentation}>
                <div className={hero.presentationImage}>
                    <Image
                        src="/img/photo_myself.webp"
                        alt='Portrait de Séraphin Benoit'
                        layout="responsive"
                        width={1}
                        height={1}
                    />
                </div>
                <div className={hero.presentationText}>
                    <p className={hero.presentationTextMain}>Je m&#39;appelle <span className={hero.presentationTextMainName}>Séraphin Benoit</span></p>
                    <p className={hero.presentationTextDescription}>Lorem ipsum dolor sit amet consectetur. Neque scelerisque turpis ornare faucibus id.
                        Interdum facixdlisis cras malesuada tincidunt dolor morbi lacus.</p>
                </div>
            </div>
            <div className={hero.buttons}>
                <Link href={'#about'}>
                    <CustomButton
                        text={'À propos de moi'}
                        icon={'/icons/User_02.svg'}
                        alt={'User icon'}
                        type={'gradient'}
                    />
                </Link>
                <Link href={'#form'}>
                    <CustomButton
                        text={'Contactez moi'}
                        icon={'/icons/mail.svg'}
                        alt={'E-mail icon'}
                        type={'gradient'}
                    />
                </Link>
            </div>
            <div className={hero.chevrons}>
                <Image
                    src={'/icons/chevron.svg'}
                    alt={'Chevron icon'}
                    width={40}
                    height={40}
                    style={{ opacity: 0.3 }}
                />
                <Image
                    src={'/icons/chevron.svg'}
                    alt={'Chevron icon'}
                    width={40}
                    height={40}
                    style={{ opacity: 0.6 }}
                />
                <Image
                    src={'/icons/chevron.svg'}
                    alt={'Chevron icon'}
                    width={40}
                    height={40}
                />
            </div>
        </section>
    )
}

export default HeroSection;