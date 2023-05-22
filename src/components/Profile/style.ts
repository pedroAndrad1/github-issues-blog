import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;

  padding: 3rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -3rem;
  position: relative;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const Content = styled.div`
  p {
    margin-bottom: 1.75rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 30px;

    a {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
    }

    svg {
      fill: ${(props) => props.theme.blue};
    }
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.75rem;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
