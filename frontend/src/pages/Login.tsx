import styles from "../styles/Login.module.css";
import LoginCard from "../components/LoginCard";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className={styles.background}>
      <LoginCard title="Faça Seu Login">
        <form className={styles.form} action="">
          <Input placeholder="Email" type="email" name="email" />
          <Input placeholder="Password" type="password" name="password" />
          <SubmitButton>Entrar</SubmitButton>
          <Link className={styles.link} to="/register">
            Não tem uma conta? Cadastre-se
          </Link>
        </form>
      </LoginCard>
    </div>
  );
};

export default Login;
