import styles from "./Home.module.css";

const Home = () => {
    return(
        <main className={styles.homeStyled}>
            <h1 className={styles.title}>um titulo que ainda não sei</h1>
            <p className={styles.subtitle}>Encontre um grupo para você praticar esportes.</p>

            <section className={styles.gridSection}>
                <div className={`${styles.gridElementDiv} ${styles.volleyball}`} role='button'>
                    <img src="assets/icon/volleyball-icon.svg" />
                    <span>Vôlei</span>
                </div>

                <div className={`${styles.gridElementDiv} ${styles.football}`} role='button'>
                    <img src="assets/icon/football-icon.svg" />
                    <span>Futebol</span>
                </div>

                <div className={`${styles.gridElementDiv} ${styles.skateRoller}`} role='button'>
                    <img src="assets/icon/skate-roller-icon.svg" />
                    <span>Patins</span>
                </div>

                <div className={`${styles.gridElementDiv} ${styles.pingPong}`} role='button'>
                    <img src="assets/icon/ping-pong-icon.svg" />
                    <span>Ping-Pong</span>
                </div>

                <div className={`${styles.gridElementDiv} ${styles.skateboard}`} role='button'>
                    <img src="assets/icon/skateboard-icon.svg" />
                    <span>Skate</span>
                </div>

                <div className={`${styles.gridElementDiv} ${styles.basketball}`} role='button'>
                    <img src="assets/icon/basketball-icon.svg" />
                    <span>Basquete</span>
                </div>

                <div className={`${styles.gridElementDiv} ${styles.others}`} role='button'>
                    <span>Outros</span>
                </div>
            </section>
        </main>
    )
}

export default Home;