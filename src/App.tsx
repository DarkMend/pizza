import { MouseEvent } from 'react'
import Button from './components/Button/Button'


function App() {

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  }

  return (
    <>
        <Button onClick={addCounter} appearence='big'>Кнопка</Button>
    </>
  )
}

export default App
