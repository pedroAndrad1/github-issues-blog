/* eslint-disable react/no-children-prop */
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { IssueDetalhe } from '../../models'
import { MainCard } from '../../components/MainCard'
import { ContentCard, Navigation, Title } from './style'
import { TagsContainer } from '../../components/Tags/TagsContainer'
import { TagItem } from '../../components/Tags/TagItem'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaGithub,
  FaLink,
} from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

export const Detalhe = () => {
  const { number } = useParams()
  const { getIssue } = useGithubContext()
  const [issue, setIssue] = useState<IssueDetalhe>()
  const [erro, setErro] = useState(false)

  useEffect(() => {
    getIssue(number as string)
      .then((res) => setIssue(res))
      .catch(() => setErro(true))
  }, [getIssue, number])

  return (
    <>
      <Header />
      <Container>
        {!erro ? (
          <>
            <MainCard columns={1}>
              <Navigation>
                <div>
                  <FaAngleLeft />
                  <Link to="/">Voltar</Link>
                </div>
                <div>
                  <a href={issue?.url} target="_blank" rel="noreferrer">
                    Ver no Github
                  </a>
                  <FaLink />
                </div>
              </Navigation>
              <Title>{issue?.title}</Title>
              <TagsContainer>
                <TagItem>
                  <FaGithub />
                  <span>{issue?.author}</span>
                </TagItem>
                <TagItem>
                  <FaCalendarDay />
                  {issue && issue.createdAgo < 1 ? (
                    <span>Criado hoje</span>
                  ) : issue?.createdAgo === 1 ? (
                    <span>Criado há {issue.createdAgo} dia</span>
                  ) : (
                    <span>Criado há {issue?.createdAgo} dias</span>
                  )}
                </TagItem>
                <TagItem>
                  <FaComment />
                  <span>{issue?.commentsAmount}</span>
                </TagItem>
              </TagsContainer>
            </MainCard>
            <ContentCard>
              {issue && <ReactMarkdown children={issue.body}></ReactMarkdown>}
            </ContentCard>
          </>
        ) : (
          <div>Erro</div>
        )}
      </Container>
    </>
  )
}
