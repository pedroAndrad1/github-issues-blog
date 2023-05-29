import { styled } from 'styled-components'

export const IssueCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const NoIssuesOrError = styled.p`
  text-align: center;
  margin-bottom: 5rem;
`
