import { useEffect, useState } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { useAuth } from "../context/Auth";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <div className={styles.background}>
      <form className={styles.form} action="">
        <div>
          <span>Name</span>
          <Input type="text" placeholder="Your name here" name="name" value={name} />
        </div>

        <div>
          <span>Email</span>
          <Input type="email" placeholder="Your email here" name="email" value={email} />
        </div>
        <div>
          <span>Password</span>
          <Input type="password" placeholder="Your password here" name="password" />
        </div>
        <SubmitButton> Update Profile</SubmitButton>
      </form>
    </div>
  );
};

export default Profile;
