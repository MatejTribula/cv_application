import Welcome from './components/Welcome.jsx'
import Form from './components/Form.jsx'

function App() {
  return (
    <>
      <Welcome />
      <section className='cv-section'>
        <div className="cv-top">
          <h2>resume</h2>
          <Form
            inputs={[{ id: 1, type: 'file', name: 'picture', src: '' }]}
            classes="form-image" isImage />
        </div>
        <div className="cv-bottom">
          <div className="form-group">
            <Form
              title="general information"
              inputs={[{ id: 1, type: 'text', name: 'name', value: '' },
              { id: 2, type: 'text', name: 'surname', value: '' },
              { id: 3, type: 'text', name: 'birth date', value: '' },
              { id: 4, type: 'email', name: 'e-mail', value: '' },
              { id: 5, type: 'text', name: 'phone number', value: '' }]}
              classes="form-normal" />
            <Form
              title="general information"
              inputs={[
                { id: 1, type: 'text', name: 'no 1', value: '' },
                { id: 2, type: 'text', name: 'no 2', value: '' },
                { id: 3, type: 'text', name: 'no 3', value: '' },
                { id: 4, type: 'text', name: 'no 4', value: '' },
                { id: 5, type: 'text', name: 'no 5', value: '' }]}
              classes="form-normal" />
          </div>
          <div className="form-group">
            <Form
              title="education"
              inputs={[
                { id: 1, type: 'text', name: 'school name', value: '' },
                { id: 4, type: 'text', name: 'profession', value: '' },
                { id: 3, type: 'text', name: 'duration', value: '' }
              ]}
              classes="form-normal" />
            <Form
              title="work experience"
              inputs={[
                { id: 1, type: 'text', name: 'company', value: '' },
                { id: 4, type: 'text', name: 'profession', value: '' },
                { id: 3, type: 'text', name: 'duration', value: '' }
              ]}
              classes="form-normal" />
          </div>
        </div>
      </section>


    </>
  )
}

export default App
