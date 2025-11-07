import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 16px;
  background-color: ${props => props.theme.HeaderBackgroundColor};
  padding: 8px;
  border-radius: 20px;
`

export const StyledDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`

export const StyledDivRight = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-left: 8px;
  margin-top: 16px;
`

export const StyledImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  padding: 12px;
`

export const StyledP = styled.p`
  margin-left: 16px;
  margin-bottom: 3px;
`

export const StyledGameName = styled.span`
  margin-left: 8px;
  padding: 4px;
  border: solid 1px ${props => props.theme.TextColor};
  color: ${props => props.theme.TextColor};
  border-radius: 20px;
  padding-left: 8px;
  margin-right: 8px;
  font-size: 18px;
`

export const StyledMetaeDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const StyledClassificationDiv = styled.div`
  width: 100%;
  display: flex;
  margin-left: 16px;
  margin-top: 8px;
  gap: 12px;
`

export const StyledClassificationimg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
`

export const StyledTagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
`
