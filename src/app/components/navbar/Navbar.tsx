'use client'

import React, {useEffect, useState} from 'react';
import navbar from './navbar.module.scss';
import Link from "next/link";
import {Home, Mail, Terminal, User} from "feather-icons-react";

const Navbar: React.FC = () => {

    const [activeLink, setActiveLink] = useState<string | null>('hero');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.getAttribute('id'));
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
            }
        );

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (clicked || isScrolling) {
                setIsVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && !clicked && window.innerWidth < 800) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [clicked, isScrolling, lastScrollY]);

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