import { ThemeProvider } from 'styled-components'
import Header from './containers/header'
import GlobalStyle, { Container } from './GlobalReset'
import DarkTheme from './themes/dark'
import { InicialForm } from './containers/Forms/InicialForm/index'
import { OppenedForm } from './containers/Forms/OppenedForm'

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <InicialForm></InicialForm>
          <OppenedForm></OppenedForm>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
