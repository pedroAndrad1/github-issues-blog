import { styled } from 'styled-components'
import { fadeInAnimation } from '../../styles/animations'

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  border: 1px solid ${(props) => props.theme['base-post']};
  height: 250px;
  padding: 1.75rem;
  cursor: pointer;
  animation: ${fadeInAnimation} 0.5s;

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
  }

  > div {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      color: ${(props) => props.theme['base-title']};
    }

    span {
      text-align: right;
    }
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  }
`
