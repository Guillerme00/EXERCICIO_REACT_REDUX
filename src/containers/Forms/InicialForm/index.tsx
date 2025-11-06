import { Container } from '../../../GlobalReset'
import { StyledContainer, StyleForm } from './style'

export const InicialForm = () => {
  return (
    <>
      <StyledContainer>
        <StyleForm action="">
          <input type="text" placeholder="Find your game" />
        </StyleForm>
        <button type="button">Submit</button>
      </StyledContainer>
    </>
  )
}
