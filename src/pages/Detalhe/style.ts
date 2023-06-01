import { styled } from 'styled-components'

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  svg {
    fill: ${(props) => props.theme.blue};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 2px;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  @media (max-width: 400px) {
    justify-content: center;
    gap: 1.5rem;
    svg {
      display: none;
    }
  }
`
export const Title = styled.h1`
  margin-bottom: 0.5rem;
`
export const ContentCard = styled.div`
  padding: 1rem;
  margin-top: 2rem;

  img {
    max-width: 100%;
  }
`
export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.5rem;
  padding: 1rem;
  margin-top: 25%;

  p {
    text-align: center;
  }

  @media (max-width: 400px) {
    margin-top: 100%;
  }
`
