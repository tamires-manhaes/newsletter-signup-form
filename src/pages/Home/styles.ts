import { makeStyles, css } from '../../utils/makeStyles';

const useStyles = makeStyles({
  root: ({ colors }) =>  css`
    background: ${colors.secondary};
  `,
  main: () => css`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  card: ({ borderRadius, padding, colors }) => css`
    background: ${colors.common.white};
    border-radius: ${borderRadius.md};
    padding: ${padding.md};
    max-height: 460px;
    max-width: 750px;

    @media screen and (max-width: 768px){
      height: 100vh;
      width: 100vw;
      max-height:100%;
      max-width:100%;
      flex-direction: column-reverse;
      padding: 0;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `,
  updates: ({spacing}) => css`
    > h1 {
      font-size: 52px;
      margin-bottom: ${spacing(2)}px;
    }

    > span {
      font-size: 14px;
    }

    > ul {
      margin: ${spacing(2)}px 0 ${spacing(4)}px;
    }
  `,
  listItem: ({spacing}) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${spacing(1)}px 0;

    > img {
      margin-right: ${spacing(1)}px;
    }
  `,
  formContent: ({spacing}) => css`
    width: 60vw;
    padding: 0 ${spacing(5)}px;

    @media screen and (max-width: 768px){
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: ${spacing(4)}px;
    }
  `,
  form: ({colors, borderRadius, spacing }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    > label {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;

      > strong{ 
        font-size: 12px;
        margin-bottom: ${spacing(1)}px;
      }

      > input {
        border-color: ${colors.secondary};
        border-radius: ${borderRadius.sm};
        border-width: 1px;
        width: 300px;
        padding: 14px;
      }
    }

     > button {
      margin-top: ${spacing(2)}px;
      width: 330px;
      padding: ${spacing(1.5)}px 0;
      border-radius: ${borderRadius.sm};
      background: ${colors.secondary};
      color: ${colors.common.white};

      &:hover{
        background: ${colors.accentColor};
        box-shadow: 0px 3px 10px 5px rgba(255, 98, 87, 0.5);
      }
     }

  `,
  imgBox: css`
    width: 40vw;

    @media screen and (max-width: 768px){
      width: 100vw;
    }

    > img {
      object-fit: contain;
      height: 460px;

      @media screen and (max-width: 768px){
        width: 100%;
        object-fit: cover;
      }
    };
  `,
})

export default useStyles;
