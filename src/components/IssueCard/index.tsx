import { Issue } from '../../models'
import { Card } from './style'

interface IssueCardProps {
  issue: Issue
}

export const IssueCard = ({
  issue: { title, body, createdAgo },
}: IssueCardProps) => {
  return (
    <Card>
      <div>
        <h3>{title}</h3>
        {createdAgo < 1 ? (
          <span>Hoje</span>
        ) : createdAgo === 1 ? (
          <span>Há {createdAgo} dia</span>
        ) : (
          <span>Há {createdAgo} dia/s</span>
        )}
      </div>
      <p>{body}</p>
    </Card>
  )
}
