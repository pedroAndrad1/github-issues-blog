import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Profile />
      </Container>
    </>
  )
}
