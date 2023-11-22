import { FunctionComponent } from "react";
import useStyles from "./styles";
import checkIcon from '../../assets/icon-success.svg';
import Button from "../../components/Button";

const Feedback: FunctionComponent = () => {
  const styles = useStyles();
  const email = localStorage.getItem('email-subscription');

  return (
    <main css={styles.root}>
      <div css={styles.card}>
        <img src={checkIcon} alt="sucess icon"/>
        <h2>Thanks for subscribing!</h2>
        <span>A confirmation e-mail has been sent to <br/><strong>{email}.</strong><br/>Please open it and click the button inside to confirm your subscription.
        </span>
        <Button 
          label="Dismiss message"
          onClick={() => console.log('done!')}
          fullWidth={true}
        />
      </div>
    </main>
  )
}

export default Feedback;
