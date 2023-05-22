import { Container } from '../../components/Container'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { IssueCard } from '../../components/IssueCard'
import { Profile } from '../../components/Profile'
import { IssueCardsContainer } from './style'

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Profile />
        <Filter />
        <IssueCardsContainer>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </IssueCardsContainer>
      </Container>
    </>
  )
}
