import { useState } from 'react'
import { StyledContainer, StyledInput, StyleForm, StyledButton } from './style'

type Props = {
  onSubmit: (value: string) => void
}

export const InicialForm = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('')

  const HandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const SendGame = () => {
    onSubmit(value)
  }

  return (
    <StyledContainer>
      <StyleForm>
        <StyledInput
          onChange={HandleInput}
          type="text"
          placeholder="Find your game"
        />
        <StyledButton onClick={SendGame} type="button">
          Submit
        </StyledButton>
      </StyleForm>
    </StyledContainer>
  )
}
