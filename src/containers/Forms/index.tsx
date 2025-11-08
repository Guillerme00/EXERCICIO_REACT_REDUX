import { useState } from 'react'
import { InicialForm } from './InicialForm'
import { OppenedForm } from './OppenedForm'

export const Form = () => {
  const [send, setSend] = useState('')

  const InicialUpdate = (value: string) => {
    setSend(value)
  }

  return (
    <>
      <InicialForm onSubmit={InicialUpdate} />
      <OppenedForm value={send} />
    </>
  )
}
