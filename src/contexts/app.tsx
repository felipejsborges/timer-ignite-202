import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { Task, TaskInputs } from '../interfaces/task'
import produce from 'immer'
import { localStorageStateKey } from '../constants/localStorage'

interface State {
  currentTask: Task | null
  previousTasks: Task[]
}
interface IAppContext extends State {
  handleStartCountdown: (taskInputs: TaskInputs) => void
  handleStopCountdown: () => void
  handleCompleteCountdown: () => void
}

const AppContext = createContext({} as IAppContext)

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'startCountdown': {
      return produce(state, (draft: any) => {
        draft.currentTask = action.payload.newTask
      })
    }
    case 'stopCountdown': {
      return produce(state, (draft: any) => {
        draft.previousTasks.push(action.payload.stoppedTask)
        draft.currentTask = null
      })
    }
    case 'completeCountdown': {
      return produce(state, (draft: any) => {
        draft.previousTasks.push(action.payload.completedTask)
        draft.currentTask = null
      })
    }
    default:
      return state
  }
}

const initialStateValue: State = {
  previousTasks: [],
  currentTask: null,
}

function initializer() {
  const storageStateStr = localStorage.getItem(localStorageStateKey)
  const storageState = storageStateStr
    ? JSON.parse(storageStateStr)
    : initialStateValue
  return storageState
}

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialStateValue, initializer)

  function handleStartCountdown(taskInputs: TaskInputs) {
    const newTask = {
      title: taskInputs.title,
      totalSeconds: taskInputs.minutes * 60,
      startedAt: new Date(),
    }
    dispatch({ type: 'startCountdown', payload: { newTask } })
  }

  function handleStopCountdown() {
    const stoppedTask = {
      ...state.currentTask,
      stoppedAt: new Date(),
    }
    dispatch({ type: 'stopCountdown', payload: { stoppedTask } })
  }

  function handleCompleteCountdown() {
    const completedTask = {
      ...state.currentTask,
      completedAt: new Date(),
    }
    dispatch({ type: 'completeCountdown', payload: { completedTask } })
  }

  useEffect(() => {
    localStorage.setItem(localStorageStateKey, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleStartCountdown,
        handleStopCountdown,
        handleCompleteCountdown,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const appContext = useContext(AppContext)

  return appContext
}
