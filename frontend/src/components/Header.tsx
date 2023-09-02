import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.titleHeader}>Todo List</h1>
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </header>
  );
};
export default Header;
