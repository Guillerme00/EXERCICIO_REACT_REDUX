import Header from './containers/header'
import GlobalStyle, { Container } from './GlobalReset'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
