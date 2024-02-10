import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg">
        <div className="v-card">
          <h1 className="edyIA">
            Edy<span className="IA">IA</span>
          </h1>

          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            cumque tempore nesciunt et labore aut voluptatibus, quod adipisci
            ratione. Sequi doloribus cupiditate delectus recusandae veritatis
            porro provident voluptatibus repellat architecto?
          </p>
        </div>

        <div className="space-connexion">
          <Link to="/connexion">
            <button className="connexion">CONNEXION</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
