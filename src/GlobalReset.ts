import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.BackgroundFirstColor};
  }
  html, body, #root {
    height: 100%;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display flex;
  flex-direction: column;
  margin-top: 40px;
`

export default GlobalStyle
