import useCountStore from './store/useCountStore'
import './App.css'

function App() {
  const count = useCountStore((state)=> state.count)
  const increment = useCountStore((state)=> state.increment)
  const decrement = useCountStore((state)=> state.decrement)

  return (
    <div className='card'>
      <h1>Contador</h1>
      <p>Contagem: <span className='count'>{count}</span></p>
      <div className='buttons'>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>




    </div>
    
    
  )
}

export default App
