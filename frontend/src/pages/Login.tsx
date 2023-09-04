import styles from "../styles/Login.module.css";
import LoginCard from "../components/LoginCard";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../axios/api";
import { useAuth } from "../context/Auth";
import jwt_decode from "jwt-decode";

type Props = {};
export interface PayloadToken {
  id: string;
  name: string;
  email: string;
}

const Login = (props: Props) => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/auth/login", { email, password })
      .then((res) => {
        const decoded: PayloadToken = jwt_decode(res.data);
        const user = {
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
        };
        login(user, res.data);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div className={styles.background}>
      <LoginCard title="Faça Seu Login">
        <form className={styles.form} action="" onSubmit={handleSubmit}>
          <div>
            <span>Email</span>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
          </div>
          <div>
            <span>Password</span>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
          </div>
          <SubmitButton>Entrar</SubmitButton>
          <Link className={styles.link} to="/register">
            Não tem uma conta? <span>Cadastre-se</span>
          </Link>
        </form>
      </LoginCard>
    </div>
  );
};

export default Login;
