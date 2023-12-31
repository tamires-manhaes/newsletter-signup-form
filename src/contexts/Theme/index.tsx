/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider, useTheme } from '@emotion/react';

import { theme as defaultTheme, Theme } from '../../theme';
import { isObjEmpty } from '../../utils/objIsEmpty';

interface OwnProps {
  theme: Theme,
  children: ReactNode
}

export const ThemeProvider: FunctionComponent<OwnProps> = ({ children, theme }) => {
  return (
    <EmotionThemeProvider theme={theme || defaultTheme}>
      {children}
    </EmotionThemeProvider>
  )
}

export const useThemeContext = (): Theme => {
  const contextTheme = useTheme();

  const theme = useMemo(
    () => (!isObjEmpty(contextTheme) ? contextTheme : defaultTheme), [contextTheme] 
  )

  return theme
}
