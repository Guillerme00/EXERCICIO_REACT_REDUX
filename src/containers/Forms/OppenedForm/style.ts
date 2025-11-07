import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-top: 16px;
  background-color: ${props => props.theme.HeaderBackgroundColor};
  padding: 8px;
  border-radius: 20px;
`

export const StyledContainerTwo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  margin-bottom: 24px;
`

export const StyledContainerDescription = styled.div`
  width: 100%;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.TextColor};
  padding: 8px;
`

export const StyledContainerScore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`

export const StyledCommentsContainer = styled.div`
  width: 100%;
  margin-top: 16px;
`

export const StyledPara = styled.p`
  font-size: 16px;
  color: ${props => props.theme.TextColor};
  font-family: 'Stack Sans Notch', sans-serif;
`

export const StyledComments = styled.input`
  border-radius: 20px;
  padding-left: 8px;
  width: 100%;
  border: 1px solid ${props => props.theme.TextColor};
  font-family: 'Stack Sans Notch', sans-serif;
  font-size: 16px;
`
export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 16px;
  gap: 8px;
`

export const BtnSucess = styled.button`
  width: 120px;
  background-color: ${props => props.theme.Sucess};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.TextColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.SucessHover};
  }
`
export const BtnCancel = styled.button`
  width: 120px;
  background-color: ${props => props.theme.Cancel};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.TextColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.CancelHover};
  }
`
