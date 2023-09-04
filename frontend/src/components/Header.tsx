import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../context/Auth";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.titleHeader}>
        Todo List
      </Link>
      {user ? (
        <div className={styles.linkAuth}>
          <Link to="/profile">PROFILE</Link>
          <Link to="/noAuth" onClick={logout}>
            LOGOUT
          </Link>
        </div>
      ) : (
        <div className={styles.linkNoAuth}>
          <Link to="/login"> LOGIN</Link>
          <Link to="/register">REGISTER</Link>
        </div>
      )}
    </header>
  );
};
export default Header;
