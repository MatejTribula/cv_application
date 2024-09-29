import { useState } from 'react'



function Form(props) {
    const [sent, setSent] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        props.inputs.forEach((input, index) => {
            const htmlInput = e.target.querySelector(`#${input.name}`)

            console.log(index)

            const value = htmlInput.value
            input.value = value
            console.log(value)
        })

        setSent(true)
    }

    return (
        <>
            {sent
                ? <div>
                    {props.inputs.map(input => (
                        // console.log(input)
                        <div>
                            <p className='para-title'>{input.name}</p>
                            <p className='para-text'>{input.value}</p>

                        </div>
                    ))}
                    <button onClick={() => setSent(false)}>edit</button>


                </div>
                : <form onSubmit={handleSubmit}>
                    {
                        props.inputs.map(input => (
                            <div className='label-input'>
                                <label htmlFor={input.type}>{input.name}</label>
                                {!sent ? <input key={input.id} type={input.type} id={input.name} placeholder='type here' /> : <p>{input.value}</p>}

                            </div>
                        ))
                    }
                    <button type='submit'>submit</button>
                </form >}
        </>
    )
}

export default Form