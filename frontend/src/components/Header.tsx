import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.titleHeader}>
        Todo List
      </Link>
      <div className={styles.link}>
        <Link to="/login"> LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </div>
    </header>
  );
};
export default Header;
