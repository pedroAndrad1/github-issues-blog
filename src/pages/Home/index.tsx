import { useState } from 'react'
import { Container } from '../../components/Container'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { IssueCard } from '../../components/IssueCard'
import { Profile } from '../../components/Profile'
import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { IssueCardsContainer, LoadingContainer, NoIssuesOrError } from './style'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { theme } from '../../styles/theme'

export const Home = () => {
  const { issues, getIssues } = useGithubContext()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(false)

  const onChange = (text: string) => {
    setLoading(true)
    getIssues(text).then((err) => {
      if (err) {
        setErro(true)
      }
      setLoading(false)
    })
  }

  return (
    <>
      <Header />
      <Container>
        <Profile />
        <Filter onChange={onChange} />
        {!loading ? (
          !erro ? (
            issues.length === 0 ? (
              <NoIssuesOrError>
                Não há publicações que correspondam ao filtro :(
              </NoIssuesOrError>
            ) : (
              <IssueCardsContainer>
                {issues.map((issue, i) => (
                  <Link to={`${issue.number}`} key={`${i}_Isse_Card`}>
                    <IssueCard issue={issue} />
                  </Link>
                ))}
              </IssueCardsContainer>
            )
          ) : (
            <NoIssuesOrError>
              Ocorreu um erro. Por favor, tente novamente mais tarde.
            </NoIssuesOrError>
          )
        ) : (
          <LoadingContainer>
            <ClipLoader color={theme['base-post']} size={200} />
          </LoadingContainer>
        )}
      </Container>
    </>
  )
}
