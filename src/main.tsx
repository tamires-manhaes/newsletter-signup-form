/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes';
import { ThemeProvider } from './contexts/Theme';
import { theme } from './theme';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
