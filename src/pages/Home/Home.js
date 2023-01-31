import { HomeStyled} from "./Home.styled";

import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return(
        <HomeStyled>
            <section className="container-text">
                <h1 className="title">Bora <br/> Jogar?</h1>
                <p className="subtitle">Encontre um grupo para você praticar esportes.</p>
                <button className="btn-navigate-page" onClick={() => navigate("/feed")}>Find your group now</button>
            </section>
        </HomeStyled>
    )
}

export default Home;