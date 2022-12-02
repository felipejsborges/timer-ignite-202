import { ThemeProvider } from 'styled-components'
import { AppContextProvider } from './contexts/app'
import Router from './routing'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
