import styles from './darkModeToggle.module.css';

function DarkModeToggle() { 
    const mode = "dark";
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}}/>
        </div>
    )
}

export default DarkModeToggle