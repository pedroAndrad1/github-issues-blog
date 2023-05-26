import { styled } from 'styled-components'

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.75rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`
