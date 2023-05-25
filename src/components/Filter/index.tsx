import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { FilterHeader, FilterInput } from './style'

export const Filter = () => {
  const { totalIssues } = useGithubContext()

  return (
    <>
      <FilterHeader>
        <h2>Publicações</h2>
        {totalIssues === 1 ? (
          <span>{totalIssues} publicação</span>
        ) : (
          <span>{totalIssues} publicações</span>
        )}
      </FilterHeader>
      <form>
        <FilterInput />
      </form>
    </>
  )
}
