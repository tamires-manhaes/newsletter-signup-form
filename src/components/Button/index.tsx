import { FunctionComponent } from "react"
import { ButtonProps } from "./types"
import useStyles from "./styles"

const Button: FunctionComponent<ButtonProps> = ({ label, fullWidth,onClick }) => {
  const styles = useStyles({fullWidth});

  return (
    <button css={styles.root} onClick={onClick}>
      <span css={styles.label}>{label}</span>
    </button>
  )
}

export default Button;
