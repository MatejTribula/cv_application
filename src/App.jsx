import { useState } from 'react'
import './App.css'

import Welcome from './components/Welcome.jsx'
import Form from './components/Form.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      <Form
        inputs={[{ id: 1, type: 'text', name: 'sviru', value: '' },
        { id: 2, type: 'text', name: 'zdeno', value: '' },
        { id: 3, type: 'text', name: 'grac', value: '' },
        { id: 4, type: 'text', name: 'zo', value: '' }]} />
    </>
  )
}

export default App
