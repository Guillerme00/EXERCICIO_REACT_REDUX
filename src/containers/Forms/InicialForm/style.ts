import styled from 'styled-components'

export const StyleForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 100px;
`

export const StyledInput = styled.input`
  width: 900px;
  height: 35px;
  border-radius: 20px;
  padding-left: 14px;
`

export const StyledButton = styled.button`
  border-radius: 20px;
  background-color: ${props => props.theme.Label};
  color: ${props => props.theme.TextColor};
  font-family: 'Stack Sans Notch', sans-serif;
  cursor: pointer;
`

export const StyledContainer = styled.div`
  display: flex;
  margin-top: 64px;
  background-color: ${props => props.theme.HeaderBackgroundColor};
  padding: 8px;
  border-radius: 20px;
`
