import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import {
  Content,
  GithubLink,
  ProfileContainer,
  Tags,
  TagsContainer,
} from './style'
import { FaBuilding, FaGithub, FaUserFriends, FaLink } from 'react-icons/fa'

export const Profile = () => {
  const { user } = useGithubContext()
  return (
    <ProfileContainer>
      <img src={user?.avatarUrl} alt="Foto de perfil" />
      <Content>
        <h1>{user?.name}</h1>
        <GithubLink>
          <a href={user?.htmlUrl} target="_blank" rel="noreferrer">
            Github
          </a>
          <FaLink />
        </GithubLink>
        <p>{user?.bio}</p>
        <TagsContainer>
          <Tags>
            <FaGithub />
            <span>{user?.login}</span>
          </Tags>
          <Tags>
            <FaBuilding />
            <span>{user?.company}</span>
          </Tags>
          <Tags>
            <FaUserFriends />
            <span>{user?.followers} seguidores</span>
          </Tags>
        </TagsContainer>
      </Content>
    </ProfileContainer>
  )
}
