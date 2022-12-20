import { useNavigate } from "react-router-dom";
import "./HomeStyle.css";

const Home = () => {

    const navigate = useNavigate();

    return(
        <header>
            <section className="container-text">
                <h1 className="title">The Power to <br /> live Healthy <br /> and Fit</h1>
                <p className="subtitle">Encontre um grupo para praticar esportes</p>
            </section>

            <section className="container-images">
                <div className="first-group">
                    <div id="img-circle">
                        <img src="assets/sport-tenis.jpg" alt="raquete de tenis" />
                    </div>
                    
                    <button className="btn-navigate-page" onClick={() => navigate("/feed")}>Find your group now</button>
                </div>

                <div className="second-group">
                    <div id="img-semi-cirle">
                        <img src="assets/sport-basketball.jpg" alt="cesta de basquete"/>
                    </div>
                    
                    <div id="img-square">
                        <img src="assets/sport-run.jpg" alt="pista de corrida" />
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Home;