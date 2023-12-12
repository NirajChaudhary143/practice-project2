import styles from "./Navigation.module.css";
import "../../App.css";
const Navigation = () => {
  return (
    <>
      <nav className={`container ${styles.nav_container}`}>
        <img src="public/images/Frame.png" alt="" />
      </nav>
    </>
  );
};

export default Navigation;
