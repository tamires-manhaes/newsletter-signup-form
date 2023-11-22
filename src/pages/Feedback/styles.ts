import { makeStyles, css } from '../../utils/makeStyles';

const useStyles = makeStyles({
  root: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  card: ({ colors, borderRadius, fonts, spacing }) => css`
    background: ${colors.common.white};
    border-radius: ${borderRadius.sm};
    width: 300px;
    padding: ${spacing(3)}px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
      width: 100vw;
      height: 100vh;
    }

    > img {
      width: 42px;
    }

    > h2 {
      font-size: ${fonts.subtitle.fontSize};
      margin: ${spacing(2)}px 0;
    }

    > span {
      margin-bottom: ${spacing(2)}px;
    }
  `
});

export default useStyles;
