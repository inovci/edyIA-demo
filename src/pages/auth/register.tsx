import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <>
      <div className="bg-register scinder">
        <div className="edySpace-register">
          <div className="position-card-edyIA-register">
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

        <div className="position-card-register">
          <div className="card-register">
            <div>
              <h1 className="inscription">Inscription</h1>
            </div>

            <div className="For-inputs">
              <div className="margin-inputs-register">
                <div className="inputs-labels">Email ou identifiant</div>
                <input className="register-credentials" type="text" />
              </div>

              <div className="margin-inputs-register">
                <div className="inputs-labels">Mot de passe</div>
                <input className="register-credentials" type="password" />
              </div>

              <div className="margin-inputs-register">
                <div className="inputs-labels">Confirmer Mot de passe</div>
                <input className="register-credentials" type="password" />
              </div>
            </div>

            <div className="termes">
              <input type="checkbox" name="conditions" id="" /> J'accepte les{" "}
              <a href=""> termes et conditions</a>
            </div>

            <div style={{ textAlign: "center", marginBottom: 5 }}>
              <input className="soumettre" type="submit" value="Soumettre" />
            </div>

            <div className="signup-with">
              <p style={{ color: "#fff", fontSize: 18 }}>S'nscrire avec:</p>
            </div>

            <div style={{ marginTop: 30 }}>
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
                <Link to="/connexion" style={{ color: "#fff", fontSize: 18 }}>
                  Déjà inscrit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
