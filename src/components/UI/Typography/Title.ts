import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: ${props => props.theme.TextColor};
  font-size: 96px;
  font-family: 'Stack Sans Notch', sans-serif;
`

export const Subtitle = styled(StyledTitle)`
  font-size: 24px;
`
