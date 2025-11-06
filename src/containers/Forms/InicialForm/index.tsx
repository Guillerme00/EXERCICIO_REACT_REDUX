import { StyledContainer, StyledInput, StyleForm, StyledButton } from './style'

export const InicialForm = () => {
  return (
    <>
      <StyledContainer>
        <StyleForm>
          <StyledInput type="text" placeholder="Find your game" />
          <StyledButton type="button">Submit</StyledButton>
        </StyleForm>
      </StyledContainer>
    </>
  )
}
