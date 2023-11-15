import { FunctionComponent } from 'react';
import useStyles from './styles';
import illustration from '@/assets/illustration-sign-up-desktop.svg';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <main css={styles.root}>
      <div css={styles.main}>
        <div css={styles.card}>
          <div css={styles.formContent}>
            
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
