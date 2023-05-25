import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'

export const Detalhe = () => {
  const { number } = useParams()
  const { getIssue } = useGithubContext()

  useEffect(() => {
    getIssue(number as string).then((res) => console.log(res))
  }, [getIssue, number])

  return (
    <>
      <Header />
      <Container>
        <p>Detalhe</p>
      </Container>
    </>
  )
}
