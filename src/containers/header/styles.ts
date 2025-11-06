import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  font-size: 64px;
  background-color: ${props => props.theme.HeaderBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid ${props => props.theme.Paraghaph};
`
