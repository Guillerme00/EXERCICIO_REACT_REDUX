import { ThemeProvider } from 'styled-components'
import Header from './containers/header'
import GlobalStyle, { Container } from './GlobalReset'
import DarkTheme from './themes/dark'
import { InicialForm } from './containers/Forms/InicialForm/index'

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <InicialForm></InicialForm>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
