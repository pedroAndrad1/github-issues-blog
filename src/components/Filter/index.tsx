import { ChangeEvent, useState } from 'react'
import { useGithubContext } from '../../contexts/GitHubContext/useGithubContext'
import { useDebounce } from '../../hooks/useDebounce'
import { FilterHeader, FilterInput } from './style'

interface FilterProps {
  onChange: (text: string) => void
}

export const Filter = ({ onChange }: FilterProps) => {
  const { totalIssues } = useGithubContext()
  const { debounce } = useDebounce()
  const [inputText, setInputText] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
    debounce(1000, onChange, event.target.value)
  }

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
        <FilterInput
          value={inputText}
          onChange={(e) => handleChange(e)}
          placeholder="Filtre por parte do título ou parte do texto da pulicação"
        />
      </form>
    </>
  )
}
