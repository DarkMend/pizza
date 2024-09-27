import './App.css'
import Button from './components/Button/Button'


function App() {

  return (
    <>
        <Button onClick={() => {
          console.log('s')
        }}>Кнопка</Button>
    </>
  )
}

export default App
