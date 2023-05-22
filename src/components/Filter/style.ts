import { styled } from 'styled-components'

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`
export const FilterInput = styled.input`
  padding: 12px 16px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  width: 100%;
  color: ${(props) => props.theme['base-text']};

  margin-bottom: 3rem;
`
