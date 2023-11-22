import { makeStyles, css } from '../../utils/makeStyles';

const useStyles = makeStyles<{
  fullWidth?: boolean;
}>({
  root: ({spacing, colors, borderRadius}, {fullWidth}) => css`
    margin-top: ${spacing(2)}px;
    padding: ${spacing(1.5)}px 0;
    border-radius: ${borderRadius.sm};
    background: ${colors.secondary};
    width: ${fullWidth === true ? '100%' : '320px'};
    
    &:hover{
      background: ${colors.accentColor};
      box-shadow: 0px 3px 10px 5px rgba(255, 98, 87, 0.5);
    }
  `,
  label: ({colors, fonts}) => css`
    color: ${colors.common.white};
    font-size: ${fonts.button.fontSize};
  `
});

export default useStyles;
