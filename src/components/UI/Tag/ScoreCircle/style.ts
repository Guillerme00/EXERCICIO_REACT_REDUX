import styled from 'styled-components'

export const Tag = styled.button`
  border-radius: 50%;
  border-radius: 1px solid ${props => props.theme.TextColor};
`

export const StyledSub = styled.div`
  width: 100%;
  color: ${props => props.theme.TextColor};
  font-family: 'Stack Sans Notch', sans-serif;
  width: 42px;
`
