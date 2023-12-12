import styles from "./Button.module.css";

const Button = ({ text, icon, borderLess, onClick }) => {
  return (
    <>
      <button
        className={`${borderLess ? styles.border_btn : styles.primary_btn}`}
        onClick={onClick}
      >
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
