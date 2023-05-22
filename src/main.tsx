import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { GithubContextProvider } from './contexts/GitHubContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
