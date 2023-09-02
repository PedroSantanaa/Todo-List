import styles from "../styles/Login.module.css";
import LoginCard from "../components/LoginCard";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className={styles.background}>
      <LoginCard title="Faça Seu Cadastro">
        <form className={styles.form} action="">
          <Input placeholder="Name" type="text" name="name" />
          <Input placeholder="Email" type="email" name="email" />
          <Input placeholder="Password" type="password" name="password" />
          <SubmitButton>Entrar</SubmitButton>
        </form>
      </LoginCard>
    </div>
  );
};

export default Register;
