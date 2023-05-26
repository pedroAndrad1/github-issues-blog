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
