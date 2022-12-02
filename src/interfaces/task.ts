export interface Task {
  title: string
  totalSeconds: number
  startedAt: Date
  stoppedAt: Date
  completedAt: Date
}

export interface TaskInputs {
  title: string
  minutes: number
}
