import { css, styled } from 'styled-components'
import { fadeInAnimation } from '../../styles/animations'

interface MainCardProps {
  columns: 1 | 2
}
export const MainCard = styled.div<MainCardProps>`
  display: grid;
  ${(props) => {
    return props.columns === 2
      ? css`
          grid-template-columns: 1fr 4fr;
        `
      : css`
          grid-template-columns: 1fr;
        `
  }}
  gap: 1rem;

  padding: 3rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -3rem;
  margin-bottom: 5rem;
  position: relative;
  animation: ${fadeInAnimation} 0.5s;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin: 0 auto;
  }

  a {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
