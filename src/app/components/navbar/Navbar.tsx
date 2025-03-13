'use client'

import React, {useEffect, useState} from 'react';
import navbar from './navbar.module.scss';
import Link from "next/link";
import {Home, Mail, Terminal, User} from "feather-icons-react";

const Navbar: React.FC = () => {

    const [activeLink, setActiveLink] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <div className={navbar.container}>
            <nav className={navbar.navbar}>
                <Link href={'#hero'} className={activeLink === 'hero' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <Home size={30}/>
                    </div>
                </Link>
                <Link href={'#about'} className={activeLink === 'about' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <User size={30} />
                    </div>
                </Link>
                <Link href={'#projects'} className={activeLink === 'projects' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <Terminal size={30} />
                    </div>
                </Link>
                <Link href={'#form'} className={activeLink === 'form' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <Mail size={30} />
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;