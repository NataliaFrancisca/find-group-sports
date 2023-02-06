import "./Home.styled.css";

const Home = () => {

    return(
        <main id="home-styled">
            <h1 className="title">um titulo que ainda não sei</h1>
            <p className="subtitle">Encontre um grupo para você praticar esportes.</p>

            <section className="grid-section">
                <div className="grid-element-div volleyball" role='button'>
                    <img src="assets/icon/volleyball-icon.svg" />
                    <span>Vôlei</span>
                </div>

                <div className="grid-element-div football" role='button'>
                    <img src="assets/icon/football-icon.svg" />
                    <span>Futebol</span>
                </div>

                <div className="grid-element-div skate-roller" role='button'>
                    <img src="assets/icon/skate-roller-icon.svg" />
                    <span>Patins</span>
                </div>

                <div className="grid-element-div ping-pong" role='button'>
                    <img src="assets/icon/ping-pong-icon.svg" />
                    <span>Ping-Pong</span>
                </div>

                <div className="grid-element-div skateboard" role='button'>
                    <img src="assets/icon/skateboard-icon.svg" />
                    <span>Skate</span>
                </div>

                <div className="grid-element-div basketball" role='button'>
                    <img src="assets/icon/basketball-icon.svg" />
                    <span>Basquete</span>
                </div>

                <div className="grid-element-div others" role='button'>
                    <span>Outros</span>
                </div>
            </section>
        </main>
    )
}

export default Home;