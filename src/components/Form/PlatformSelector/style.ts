import styled from 'styled-components'

export const PlatformDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  margin-top: 16px;
`
export const StyledSvg = styled.svg`
  fill: ${props => props.theme.TextColor};
  width: 32px;
  height: 32px;
  cursor: pointer;
  &:hover {
    fill: ${props => props.theme.Paraghaph};
  }
`
