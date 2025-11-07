import styled from 'styled-components'

export const Tag = styled.div`
  max-width: 96px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.TextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.TextColor};
    color: ${props => props.theme.BackgroundFirstColor};
  }
`
