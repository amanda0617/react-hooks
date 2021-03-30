// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

//recebe o initialName como um props ...props
function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  // retorna um vetor, onde o primeiro elemento é a variável e o segundo é uma função que modifica o primeiro
  // React.usestate('valor inicial da variável')
  const [name, setName] = React.useState(initialName)
  //let name = ''

  //quem muda a variável de estado é a função HandleChange
  //ela é acionada quando o conteúdo do input é alterado
  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    // não pode atribuir valor a variável estado de forma direta, para isso usamos a função setName
    //name = event.target.value
    setName(event.target.value)
  }

    //value={name} faz com que o input se inicie com o valor inicial da variável  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} /> 
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

//initialName="Sicrano" é um parâmetro do Greeting
function App() {
  return <Greeting initialName="Sicrano" />
}

export default App
