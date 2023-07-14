"use client";
import styles from './darkModeToggle.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useContext } from 'react';

function DarkModeToggle() { 

    const themeColor = useContext(DarkModeContext);

    const changeThemeColor = () => {
        themeColor.setColorMode(prev => prev === "light" ? "dark" : "light");
    }
    return (
        <div className={styles.container} onClick={changeThemeColor}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.ball} style={themeColor.colorMode === "light" ? {left: "2px"} : {right: "2px"}}/>
        </div>
    )
}

export default DarkModeToggle;