import { useState } from 'react'
import './App.css'

import Welcome from './components/Welcome.jsx'
import Form from './components/Form.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      <section className='cv-section'>
        <div className='container picture-general'>
          <Form
            inputs={[{ id: 1, type: 'file', name: 'picture', src: '' }]}
            classes="form form-image" />

          <Form
            title="general information"
            inputs={[{ id: 1, type: 'text', name: 'name', value: '' },
            { id: 2, type: 'text', name: 'surname', value: '' },
            { id: 3, type: 'text', name: 'birth date', value: '' },
            { id: 4, type: 'email', name: 'e-mail', value: '' },
            { id: 5, type: 'text', name: 'phone number', value: '' }]}
            classes="form form-normal" />
        </div>
        <div className='container forms-design'>
          <div className='edu-exp'>
            <Form
              title="education"
              inputs={[
                { id: 1, type: 'text', name: 'school name', value: '' },
                { id: 4, type: 'text', name: 'profession', value: '' },
                { id: 3, type: 'text', name: 'duration', value: '' }
              ]}
              classes="form form-normal" />
            <Form
              title="work experience"
              inputs={[
                { id: 1, type: 'text', name: 'company', value: '' },
                { id: 4, type: 'text', name: 'profession', value: '' },
                { id: 3, type: 'text', name: 'duration', value: '' }
              ]}
              classes="form form-normal" />
          </div>
          <div className="design"></div>
        </div>
      </section>


    </>
  )
}

export default App
