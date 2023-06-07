import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
    const sectionRef = useRef(null);

    const handleScrollToSection = () => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <HeroSection handleScrollToSection={handleScrollToSection} />
            <AboutSection sectionRef={sectionRef} />        
        </>
    );
}

