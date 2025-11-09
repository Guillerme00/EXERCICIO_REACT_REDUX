import { useState } from 'react'
import { InicialForm } from './InicialForm'
import { OppenedForm } from './OppenedForm'

export const Form = () => {
  const [send, setSend] = useState('')

  const InicialUpdate = (value: string) => {
    setSend(value)
    console.log(Search_game(value))
  }

  async function Search_game(send: string) {
    const response = await fetch(`http://localhost:3001/search?name=${send}`)
    const data = await response.json()
    console.log(data)
    return data
  }

  return (
    <>
      <InicialForm onSubmit={InicialUpdate} />
      <OppenedForm value={send} />
    </>
  )
}
