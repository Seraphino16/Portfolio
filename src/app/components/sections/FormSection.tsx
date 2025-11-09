'use client'

import React, {FormEvent} from 'react';

import style from '../../styles/page.module.scss';
import form from '../../styles/form.module.scss';
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Form = () => {

    const [formMessage, setFormMessage] = React.useState<string | null>(null);
    const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);

    const formRef = React.useRef<HTMLFormElement>(null);
    const captchaRef = React.useRef<HCaptcha>(null);

    const checkData = (formData: {[key: string] : string}): boolean => {
        let { name, email, message } = formData;

        if (!name || !email || !message) {
            setFormMessage('Veuillez remplir tous les champs du formulaire.');
            return false
        }

        name = name.trim();
        email = email.trim().toLowerCase();
        message = message.trim();

        if (name.length < 3 || !new RegExp(/^[a-zA-Z\s'-]+$/).test(name)) {
            setFormMessage('Nom invalide : au moins 3 caractère, lettre, espaces tirets et apostrophes');
            return false;
        }

        if(!new RegExp(/\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/).test(email)) {
            setFormMessage('Email invalide');
            return false;
        }

        if(message.length < 3) {
            setFormMessage('Mesage trop court : au moins 3 caractères');
            return false;
        }

        return true;
    }

    const handleCaptchaVerify = (token: string) => {
        setCaptchaToken(token);
    }

    const onSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        setFormMessage(null);

        if (!formRef.current) {
            return;
        }

        if (!captchaToken) {
            setFormMessage('Veuillez compléter le captcha');
            return;
        }

        const formData = Object.fromEntries(new FormData(formRef.current).entries());

        if (!checkData(formData as { [key: string]: string })) return;

        const res = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({ formData, token: captchaToken }),
            headers: {'Content-Type': 'application/json'},
        })

        const response = await res.json();

        if (response.success === true) {
            formRef.current.reset();
            setCaptchaToken(null);
            captchaRef.current?.resetCaptcha();
            setFormMessage('Merci pour votre message !');
            setTimeout(() => {
                setFormMessage(null);
            }, 5000);
        } else {
            setFormMessage('Une erreur est survenue : vous pouvez réessayer ou me contacter directement à l\'adresse' +
                ' seraphinbnt@gmail.com');
        }
    }

    return (
        <section id={'form'} className={style.section} style={{minHeight: "unset", marginBottom: "10vh"}}>
            <div className={form.container}>
                <h2>Contactez moi !</h2>
                <form
                    ref={formRef}
                    className={form.form}
                    onSubmit={onSubmit}
                    id="contact-form"
                    aria-label="Formulaire de contact"
                >
                    <div className={form.formGroup}>
                        <label htmlFor="name">Votre nom :</label>
                        <input type="text" id="name" name="name" placeholder='Nom' aria-required="true"/>
                    </div>
                    <div className={form.formGroup}>
                        <label htmlFor="email">Votre email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='email@exemple.com'
                            aria-required="true"
                        />
                    </div>
                    <div className={form.formGroup}>
                        <label htmlFor="message">Votre message :</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Écrivez votre message ici...'
                            aria-required="true"/>
                    </div>
                    <div className={form.formGroup}>
                        <div className={form.formCaptchaWrapper}>
                            <HCaptcha
                                ref={captchaRef}
                                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
                                onVerify={handleCaptchaVerify}
                                languageOverride={'fr'}
                                aria-label="Vérification anti-spam"
                            />
                        </div>

                    </div>
                    {formMessage && (
                        <p className={form.formalert}>{formMessage}</p>
                    )}
                    <input type="submit" value="Envoyer !" aria-label="Envoyer le message"/>
                    <p style={{fontSize: '0.85rem', color: '#3a3a3a', marginTop: '1rem', lineHeight: '1.4'}}>
                        En envoyant ce message, vous acceptez que vos données soient utilisées pour vous recontacter.
                    </p>
                </form>
            </div>
        </section>
    )
}

const FormSection = () => {
    return (
            <Form />
    )
}


export default FormSection;