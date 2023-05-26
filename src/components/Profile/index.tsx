import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { MainCard } from '../MainCard'
import { TagItem } from '../Tags/TagItem'
import { TagsContainer } from '../Tags/TagsContainer'
import { Content, GithubLink } from './style'
import { FaBuilding, FaGithub, FaUserFriends, FaLink } from 'react-icons/fa'

export const Profile = () => {
  const { user } = useGithubContext()
  return (
    <MainCard columns={2}>
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
          <TagItem>
            <FaGithub />
            <span>{user?.login}</span>
          </TagItem>
          <TagItem>
            <FaBuilding />
            <span>{user?.company}</span>
          </TagItem>
          <TagItem>
            <FaUserFriends />
            <span>{user?.followers} seguidores</span>
          </TagItem>
        </TagsContainer>
      </Content>
    </MainCard>
  )
}
