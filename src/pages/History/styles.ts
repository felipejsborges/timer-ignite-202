import styled from 'styled-components'

export const HistoryContainer = styled.div`
  padding: 8.625rem 6rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  margin-top: 2rem;
  overflow-y: scroll;
  max-height: 24rem;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-500']};

    &:hover {
      background: ${(props) => props.theme['gray-600']};
    }
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.25rem;

    td {
      padding: 1rem;
    }

    tr {
      th:first-child {
        border-top-left-radius: 0.5rem;
      }
      th:last-child {
        border-top-right-radius: 0.5rem;
      }
    }
  }
`

export const HistoryListHeader = styled.tr`
  height: 3.375rem;
  background: ${(props) => props.theme['gray-600']};
`
