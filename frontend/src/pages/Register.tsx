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
          <div>
            <span>Name</span>
            <Input placeholder="Name" type="text" name="name" />
          </div>
          <div>
            <span>Email</span>
            <Input placeholder="Email" type="email" name="email" />
          </div>
          <div>
            <span>Password</span>
            <Input placeholder="Password" type="password" name="password" />
          </div>
          <SubmitButton>Cadastrar</SubmitButton>
        </form>
      </LoginCard>
    </div>
  );
};

export default Register;
