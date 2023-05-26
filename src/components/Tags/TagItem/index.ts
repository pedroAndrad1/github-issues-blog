import { styled } from 'styled-components'

export const TagItem = styled.div`
  display: flex;
  gap: 0.5rem;

  &:nth-child(2) {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
