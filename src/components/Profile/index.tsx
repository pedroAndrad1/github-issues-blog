import {
  Content,
  GithubLink,
  ProfileContainer,
  Tags,
  TagsContainer,
} from './style'
import { FaBuilding, FaGithub, FaUserFriends, FaLink } from 'react-icons/fa'

export const Profile = () => {
  return (
    <ProfileContainer>
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        alt="Foto de perfil"
      />
      <Content>
        <h1>Titulo</h1>
        <GithubLink>
          <a>Github</a>
          <FaLink />
        </GithubLink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adip sapient et dolore mag et
          dolore mag et dolore mag et dolore mag et
        </p>
        <TagsContainer>
          <Tags>
            <FaGithub />
            <span>PedroAndrad1</span>
          </Tags>
          <Tags>
            <FaBuilding />
            <span>ED Company</span>
          </Tags>
          <Tags>
            <FaUserFriends />
            <span>xx seguidores</span>
          </Tags>
        </TagsContainer>
      </Content>
    </ProfileContainer>
  )
}
