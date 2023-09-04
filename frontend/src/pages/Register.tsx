import styles from "../styles/Login.module.css";
import LoginCard from "../components/LoginCard";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { useState } from "react";
import { api } from "../axios/api";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/auth/register", { name, email, password })
      .then(() => {
        setSuccess("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div className={styles.background}>
      <LoginCard title="Faça Seu Cadastro">
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <span>Name</span>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              required
            />
          </div>
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
          <SubmitButton>Cadastrar</SubmitButton>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
        </form>
      </LoginCard>
    </div>
  );
};

export default Register;
