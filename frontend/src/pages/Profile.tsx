import { ChangeEvent, useEffect, useState } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { useAuth } from "../context/Auth";
import styles from "../styles/Profile.module.css";
import { api } from "../axios/api";

const Profile = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, logout } = useAuth();
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "") {
      api.patch(`/users/${user?.id}`, {
        name,
        email,
      });
    } else {
      api.patch(`/users/${user?.id}`, {
        name,
        email,
        password,
      });
    }
    logout();
  };

  return (
    <div className={styles.background}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <span>Name</span>
          <Input
            type="text"
            placeholder="Your name here"
            name="name"
            value={name}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setName(ev.target.value)}
          />
        </div>

        <div>
          <span>Email</span>
          <Input
            type="email"
            placeholder="Your email here"
            name="email"
            value={email}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <Input
            type="password"
            placeholder="Your password here"
            name="password"
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
          />
        </div>
        <SubmitButton> Update Profile</SubmitButton>
      </form>
    </div>
  );
};

export default Profile;
