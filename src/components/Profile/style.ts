import { styled } from 'styled-components'

export const Content = styled.div`
  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.75rem;
  }

  @media (max-width: 900px) {
    h1,
    p {
      text-align: center;
    }
  }
`
export const GithubLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 30px;
  padding-bottom: 2px;

  svg {
    fill: ${(props) => props.theme.blue};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  @media (max-width: 400px) {
    top: 15px;
  }
`
