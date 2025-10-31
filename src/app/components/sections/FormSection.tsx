'use client'

import React, {FormEvent} from 'react';
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from "@google-recaptcha/react";

import style from '../../styles/page.module.scss';
import form from '../../styles/form.module.scss';

const Form = () => {

    const googleRecaptcha = useGoogleReCaptcha();
    const formRef = React.useRef<HTMLFormElement>(null);

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!googleRecaptcha?.executeV3 || !formRef.current) {
            return;
        }

        const token = await googleRecaptcha.executeV3('contact_form');
        const formData = Object.fromEntries(new FormData(formRef.current).entries());

        const res = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({ formData, token }),
            headers: {'Content-Type': 'application/json'},
        })

        const response = await res.json();
        console.log('Résultat serveur email:', response);
    }

    return (
        <section id={'form'} className={style.section}>
            <div className={form.container}>
                <h2>Contactez moi !</h2>
                <form ref={formRef} className={form.form} onSubmit={onSubmit} id="contact-form">
                    <div className={form.formGroup}>
                        <label htmlFor="name">Votre nom :</label>
                        <input type="text" id="name" name="name" placeholder='John Doe' />
                    </div>
                    <div className={form.formGroup}>
                        <label htmlFor="email">Votre email :</label>
                        <input type="email" id="email" name="email" placeholder='email@exemple.com'/>
                    </div>
                    <div className={form.formGroup}>
                        <label htmlFor="message">Votre message :</label>
                        <textarea id="message" name="message" placeholder='Écrivez votre message ici...'/>
                    </div>
                    <input type="submit" value="Envoyer !" />
                </form>
            </div>
        </section>
    )
}

const FormSection = () => {
    return (
        <GoogleReCaptchaProvider type="v3" siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
            <Form />
        </GoogleReCaptchaProvider>
    )
}


export default FormSection;