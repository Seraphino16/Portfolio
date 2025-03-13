import React from 'react';
import style from '../../styles/page.module.scss';
import form from '../../styles/form.module.scss';

const FormSection = () => {
    return (
        <section id={'form'} className={style.section}>
            <div className={form.container}>
                <h2>Contactez moi !</h2>
                {/*<div className={form.form}>*/}
                    <form className={form.form}>
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
                {/*</div>*/}
            </div>
        </section>
    )
}

export default FormSection;