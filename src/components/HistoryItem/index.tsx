import { useMemo } from 'react'
import { Task } from '../../interfaces/task'
import {
  HistoryItemContainer,
  StatusContainer,
  StatusIcon,
  HistoryItemStatus,
} from './styles'

interface HistoryItemProps extends Task {
  status: HistoryItemStatus
}

export function HistoryItem({
  status,
  title,
  totalSeconds,
  startedAt,
}: HistoryItemProps) {
  const totalTimeInMinutes = totalSeconds / 60
  const daysSinceStarted = useMemo(() => {
    const diffFromTaskStartingToNowInDays =
      (new Date().getTime() - new Date(startedAt).getTime()) / 1000 / 3600 / 24
    return diffFromTaskStartingToNowInDays.toString()[0]
  }, [startedAt])

  return (
    <HistoryItemContainer>
      <td>{title}</td>
      <td>{totalTimeInMinutes} minutos</td>
      <td>Há {daysSinceStarted} dias</td>
      <StatusContainer>
        <StatusIcon status={status} />
        <span>
          {status === 'completed' && 'Concluído'}
          {status === 'in_progress' && 'Em andamento'}
          {status === 'interrupted' && 'Interrompido'}
        </span>
      </StatusContainer>
    </HistoryItemContainer>
  )
}
