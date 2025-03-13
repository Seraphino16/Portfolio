'use client'

import React, {useEffect, useState} from 'react';
import navbar from './navbar.module.scss';
import Link from "next/link";
import {Home, Mail, Terminal, User} from "feather-icons-react";

const Navbar: React.FC = () => {

    const [activeLink, setActiveLink] = useState('hero');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

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

            if (clicked || isScrolling) {
                setIsVisible(true);
                return;
            }

            console.log(clicked);
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && !clicked) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);

        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleClicked = () => {
        setClicked(true);
        setIsVisible(true);
        setIsScrolling(true);

        setTimeout(() => {
            setClicked(false);
            setIsScrolling(false);
        }, 1000);
    }

    return (
        <div className={`${navbar['container']} ${isVisible ? navbar['visible'] : navbar['hidden']}`}>
            <nav className={`${navbar['navbar']} ${isVisible ? navbar['visible'] : navbar['hidden']}`}>
                <Link onClick={handleClicked} href={'#hero'} className={activeLink === 'hero' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <Home size={30}/>
                    </div>
                </Link>
                <Link onClick={handleClicked} href={'#about'} className={activeLink === 'about' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <User size={30} />
                    </div>
                </Link>
                <Link onClick={handleClicked} href={'#projects'} className={activeLink === 'projects' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <Terminal size={30} />
                    </div>
                </Link>
                <Link onClick={handleClicked} href={'#form'} className={activeLink === 'form' ? navbar.navbarActive : ''}>
                    <div className={navbar.navbarItem}>
                        <Mail size={30} />
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;