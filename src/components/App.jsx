import { useEffect } from 'react'
import { getTest } from '../db.js'

function App() {
  useEffect(() => {
    getTest().then((response) => console.log(response))
  }, [])

  return (
    <>
      <p>Hello world!</p>
    </>
  )
}

export default App
