import { HomeStyled, GroupImagesStyled} from "./Home.styled";

import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return(
        <HomeStyled>
            <section className="container-text">
                <h1 className="title">Bora Jogar?</h1>
                <p className="subtitle">Encontre um grupo para você praticar esportes.</p>
                <button className="btn-navigate-page" onClick={() => navigate("/feed")}>Find your group now</button>
            </section>

            <GroupImagesStyled>
                <div className="div-image-home circle">
                    <img src="assets/images/sport-tenis.jpg" alt="raquete de tenis" />
                </div>

                <div className="div-image-home semi-circle">
                    <img src="assets/images/sport-basketball.jpg" alt="cesta de basquete"/>
                </div>

                <div className="div-image-home square">
                    <img src="assets/images/sport-run.jpg" alt="pista de corrida" />
                </div> 
            </GroupImagesStyled>
        </HomeStyled>
    )
}

export default Home;