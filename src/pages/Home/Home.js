import { HomeStyled } from "./Home.styled";

import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return(
        <HomeStyled>
            <section className="container-text">
                <h1 className="title">Bora <br /> Jogar?</h1>
                <p className="subtitle">Encontre um grupo para você praticar esportes.</p>

                <button className="btn-navigate-page" onClick={() => navigate("/feed")}>Find your group now</button>
            </section>

            {/* <section className="container-images">
                <div className="first-group">
                    <div id="img-circle">
                        <img src="assets/images/sport-tenis.jpg" alt="raquete de tenis" />
                    </div>
                </div>

                <div className="second-group">
                    <div id="img-semi-cirle">
                        <img src="assets/images/sport-basketball.jpg" alt="cesta de basquete"/>
                    </div>
                    
                    <div id="img-square">
                        <img src="assets/images/sport-run.jpg" alt="pista de corrida" />
                    </div>
                </div>
            </section> */}
        </HomeStyled>
    )
}

export default Home;