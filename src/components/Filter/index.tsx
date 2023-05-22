import { FilterHeader, FilterInput } from './style'

export const Filter = () => {
  return (
    <>
      <FilterHeader>
        <h2>Publicações</h2>
        <span>x publicações</span>
      </FilterHeader>
      <form>
        <FilterInput />
      </form>
    </>
  )
}
