import styles from "./Button.module.css"

const Button = ({text, icon, isOutLine, ...rest}) => {
  return (
    <button {...rest} className={isOutLine ? styles.isOutLine_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button