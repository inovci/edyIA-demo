import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <>
      <div className="bg-login scinder">
        <h1 className="to-home-login">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Edy<span className="IA">IA</span> | Accueil
          </Link>
        </h1>

        <div className="edySpace-login">
          <div className="position-card-edyIA-login">
            <h1 className="edyIA">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Edy<span className="IA">IA</span>
              </Link>
            </h1>

            <div className="texte" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate cumque tempore nesciunt et labore aut voluptatibus, quod
              adipisci ratione. Sequi doloribus cupiditate delectus recusandae
              veritatis porro provident voluptatibus repellat architecto?
            </div>
          </div>
        </div>

        <div className="position-card-login">
          <div className="card-login">
            <div>
              <h1 className="connexion-login">Connexion</h1>
            </div>

            <div className="For-inputs">
              <div className="margin-inputs-login">
                <div className="inputs-labels">Email ou identifiant</div>
                <input className="login-credentials" type="text" />
              </div>

              <div className="margin-inputs-login">
                <div className="inputs-labels">Mot de passe</div>
                <input className="login-credentials" type="password" />
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: 5 }}>
              <input
                className="se-connecter"
                type="submit"
                value="Se connecter"
              />
            </div>

            <div className="mot-p-o">
              <a href="" style={{ color: "#fff", fontSize: 18 }}>
                Mot de passe oublié ?
              </a>
            </div>

            <div style={{ marginTop: 90 }}>
              <div className="sociaux">
                <button>Continuer avec Google</button>
              </div>

              <div className="sociaux">
                <button className="Apple-login">Continuer avec Apple</button>
              </div>

              <div className="sociaux">
                <button className="facebook-login">
                  Continuer avec Facebook
                </button>
              </div>

              <div className="mot-p-o">
                <Link to="/register" style={{ color: "#fff", fontSize: 18 }}>
                  Pas encore inscrit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
