import { Container } from '../../components/Container'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Profile />
        <Filter />
      </Container>
    </>
  )
}
