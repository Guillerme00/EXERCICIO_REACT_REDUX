import { ThemeProvider } from 'styled-components'
import Header from './containers/header'
import GlobalStyle, { Container } from './GlobalReset'
import DarkTheme from './themes/dark'
import { Form } from './containers/Forms'

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Form />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
