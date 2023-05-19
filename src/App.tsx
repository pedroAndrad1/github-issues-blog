import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Oi</div>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
