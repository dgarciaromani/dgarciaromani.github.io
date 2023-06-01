import React, {useEffect, useState} from 'react';
import style from './style.module.css';
  
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
            <img src={require("../images/up.png")} alt="Up" width="30"></img>
        </button>
    );

};