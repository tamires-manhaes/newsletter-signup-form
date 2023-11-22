/** @jsxRuntime classic */
/** @jsx jsx */
import { FunctionComponent, useState } from 'react';
import useStyles from './styles';
import illustration from '../../assets/illustration-sign-up-desktop.svg';
import listImg from '../../assets/icon-list.svg';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const updatesContent = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!"
]

const UpdatesItem: FunctionComponent<{content: string}> = ({ content }) => {
  const styles = useStyles();

  return (
    <li css={styles.listItem}>
      <img src={listImg} alt='icon red listing' />
      <span>{content}</span>
    </li>
  )
} 

const Home: FunctionComponent = () => {
  const styles = useStyles();
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleSubscription = () => {
    localStorage.setItem('email-subscription', email);
    navigate('/thanks');
  }

  return (
    <main css={styles.root}>
      <div css={styles.main}>
        <div css={styles.card}>
          <div css={styles.formContent}>
            <div css={styles.updates}>
              <h1>Stay updated!</h1>
              <span>Join 60,000+ product managers recieving monthly updates on:</span>
              <ul>
                {updatesContent.map((i) => {
                  return (
                    <UpdatesItem content={i} key={i} />
                  )
                })}
              </ul>
            </div>
            <form css={styles.form}>
              <label>
                <strong>Email adress</strong>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
              </label>
              <Button
                label='Subscribe to monthly newsletter'
                onClick={handleSubscription} 
              />
            </form>
          </div>
          <div css={styles.imgBox}>
            <img src={illustration} alt='illustration' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;
