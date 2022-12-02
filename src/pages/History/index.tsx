import { HistoryItem } from '../../components/HistoryItem'
import { HistoryItemStatus } from '../../components/HistoryItem/styles'
import { useApp } from '../../contexts/app'
import { Task } from '../../interfaces/task'
import { HistoryContainer, HistoryList, HistoryListHeader } from './styles'

export function History() {
  const { previousTasks } = useApp()

  function getTaskStatus(task: Task): HistoryItemStatus {
    if (task.completedAt) {
      return 'completed'
    } else if (task.stoppedAt) {
      return 'interrupted'
    } else {
      return 'in_progress'
    }
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <HistoryListHeader>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </HistoryListHeader>
          </thead>
          <tbody>
            {previousTasks.map((previousTask, index) => (
              <HistoryItem
                key={index}
                status={getTaskStatus(previousTask)}
                {...previousTask}
              />
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
