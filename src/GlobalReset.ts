import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
  body {
  background-image: linear-gradient(to bottom, #232526, #424345)
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`

export default GlobalStyle
