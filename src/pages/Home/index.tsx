import { Container } from '../../components/Container'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { IssueCard } from '../../components/IssueCard'
import { Profile } from '../../components/Profile'
import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { IssueCardsContainer } from './style'

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
            <IssueCard issue={issue} key={`${i}_Isse_Card`} />
          ))}
        </IssueCardsContainer>
      </Container>
    </>
  )
}
