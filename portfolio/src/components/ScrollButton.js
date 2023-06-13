import React, {useEffect, useState} from 'react';
import style from './styleComponents.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
  
export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleVisibility = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleVisibility);

        return () => {
            window.removeEventListener('scroll', handleVisibility);
        };
    }, []);
  
    const handleScrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={handleScrollToTop} 
            style={{display: showButton ? 'inline' : 'none'}} 
            className = {style.scrollTopButton}
        >
            <ExpandLessIcon sx={{ fontSize: 60, color: '#222629' }}/>
        </button>
    );

};