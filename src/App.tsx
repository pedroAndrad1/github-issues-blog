import { GithubContextProvider } from './contexts/GitHubContext'
import { Home } from './pages/Home'

function App() {
  return (
    <GithubContextProvider>
      <Home />
    </GithubContextProvider>
  )
}

export default App
