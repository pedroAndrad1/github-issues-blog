import { Container } from '../../components/Container'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { IssueCard } from '../../components/IssueCard'
import { Profile } from '../../components/Profile'
import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { IssueCardsContainer } from './style'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { issues } = useGithubContext()

  return (
    <>
      <Header />
      <Container>
        <Profile />
        <Filter />
        <IssueCardsContainer>
          {issues.map((issue, i) => (
            <Link to={`${issue.number}`} key={`${i}_Isse_Card`}>
              <IssueCard issue={issue} />
            </Link>
          ))}
        </IssueCardsContainer>
      </Container>
    </>
  )
}
