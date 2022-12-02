import styled from 'styled-components'

export type HistoryItemStatus = 'completed' | 'interrupted' | 'in_progress'

interface StatusIconPops {
  status: HistoryItemStatus
}

export const HistoryItemContainer = styled.tr`
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 1rem 1.5rem;
  margin-top: 0.25rem;
  width: 100%;
  height: 3.375rem;
  background: ${(props) => props.theme['gray-700']};

  &:hover {
    border: 0.125rem solid ${(props) => props.theme['gray-600']};
  }
`

export const StatusContainer = styled.td`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const StatusIcon = styled.div<StatusIconPops>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${(props) => {
    if (props.status === 'completed') return props.theme['green-300']
    if (props.status === 'interrupted') return props.theme['red-500']
    if (props.status === 'in_progress') return props.theme['yellow-500']
  }};
`
