import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg scinder">
        <div className="v-card">
          <h1 className="edyIA">
            Edy<span className="IA">IA</span>
          </h1>

          <div className="texte" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            cumque tempore nesciunt et labore aut voluptatibus, quod adipisci
            ratione. Sequi doloribus cupiditate delectus recusandae veritatis
            porro provident voluptatibus repellat architecto?
          </div>
        </div>

        <div className="buttons-sapce">
          <div className="space-connexion">
            <Link to="/connexion">
              <button className="connexion">CONNEXION</button>
            </Link>
          </div>

          <div className="space-dashboard">
            <Link to="/dashboard">
              <button className="dashboard">VOIR DASHBOARD</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
