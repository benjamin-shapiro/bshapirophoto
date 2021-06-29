import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className={styles.containter}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
