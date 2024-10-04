import Welcome from './components/Welcome.jsx'
import Form from './components/Form.jsx'

import html2pdf from 'html2pdf.js';

function exportPdf() {
  const cv = document.querySelector('.cv-section')

  const cvButtons = cv.querySelectorAll('button')

  cvButtons.forEach(button => {
    button.style.opacity = 0
  });

  // Set options for the PDF
  const options = {
    margin: 0, // No margin
    filename: 'resume.pdf', // File name
    image: { type: 'jpeg', quality: 0.98 }, // Image quality
    html2canvas: { scale: 2 }, // Scale for better quality
    jsPDF: {
      unit: 'px', // Use pixel units
      format: [1024, 1024 * 1.41], // A4 page size in pixels
      orientation: 'portrait'
    }
  }

  // Generate PDF from the div
  html2pdf().from(cv).set(options).toPdf().get('pdf').then(function (pdf) {
    const totalPages = pdf.internal.getNumberOfPages()

    // Check if a second page was created
    if (totalPages > 1) {
      // Remove additional pages
      for (let i = totalPages; i > 1; i--) {
        pdf.deletePage(i)
      }
    }

    // Save the trimmed PDF
    pdf.save('resume.pdf')

    cvButtons.forEach(button => {
      button.style.opacity = "100%"
    });
  });


}






function App() {
  return (
    <>
      <button className="export-btn" onClick={() => exportPdf()}>
        <i className="fa-solid fa-file-export"></i>
      </button>
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
              title="skills"
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
