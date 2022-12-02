import { useForm, SubmitHandler } from 'react-hook-form'
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  CountdownDivisor,
} from './styles'
import { CountdownButton } from '../../components/CountdownButton'
import { useApp } from '../../contexts/app'
import { TaskInputs } from '../../interfaces/task'
import { useEffect, useMemo, useState } from 'react'

export function Home() {
  const {
    handleStartCountdown,
    currentTask,
    previousTasks,
    handleStopCountdown,
    handleCompleteCountdown,
  } = useApp()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskInputs>()

  const tasksTitles = useMemo(() => {
    const uniqueTasksTitles: string[] = []

    previousTasks.forEach((previousTask) => {
      if (!uniqueTasksTitles.includes(previousTask.title)) {
        uniqueTasksTitles.push(previousTask.title)
      }
    })

    return uniqueTasksTitles
  }, [previousTasks])

  const onSubmit: SubmitHandler<TaskInputs> = (data) => {
    handleStartCountdown(data)
  }

  const [countdownNumbers, setCountdownNumbers] = useState('0000')

  function updateCountdownNumbers() {
    if (!currentTask) {
      setCountdownNumbers('0000')
      document.title = 'Timer'
    } else {
      const differenceInSecondsFromTaskToNow =
        (new Date().getTime() - new Date(currentTask.startedAt).getTime()) /
        1000
      const remainingSeconds =
        currentTask.totalSeconds - differenceInSecondsFromTaskToNow
      if (remainingSeconds < 1) {
        handleCompleteCountdown()
        setCountdownNumbers('0000')
        document.title = '00:00'
        return
      }
      const minutes = Math.floor(remainingSeconds / 60)
        .toString()
        .padStart(2, '0')
      const seconds = Math.floor(remainingSeconds % 60)
        .toString()
        .padStart(2, '0')

      setCountdownNumbers(minutes + seconds)
      document.title = minutes + ':' + seconds
    }
  }

  function handleClickOnCountdownButton() {
    if (!currentTask) {
      handleSubmit(onSubmit)().then(() => {
        reset()
      })
    } else {
      handleStopCountdown()
    }
  }

  useEffect(() => {
    setTimeout(() => updateCountdownNumbers(), 1000)
  })

  return (
    <HomeContainer>
      <FormContainer>
        <label>Vou trabalhar em</label>
        <input
          list="previewsTasks"
          {...register('title', { required: true })}
        />
        <datalist id="previewsTasks">
          {tasksTitles.map((taskTitle, index) => (
            <option key={index} value={taskTitle} />
          ))}
        </datalist>
        {errors.title && <span>{errors.title.type}</span>}
        <label>durante</label>
        <input
          type="number"
          step={5}
          min={5}
          max={60}
          {...register('minutes', { required: true })}
        />
        {errors.minutes && <span>{errors.minutes.type}</span>}
        <span>minutos.</span>
      </FormContainer>
      <CountdownContainer>
        <span>{countdownNumbers[0]}</span>
        <span>{countdownNumbers[1]}</span>
        <CountdownDivisor>:</CountdownDivisor>
        <span>{countdownNumbers[2]}</span>
        <span>{countdownNumbers[3]}</span>
      </CountdownContainer>
      <CountdownButton
        variant={!currentTask ? 'start' : 'stop'}
        type="submit"
        onClick={handleClickOnCountdownButton}
      />
    </HomeContainer>
  )
}
