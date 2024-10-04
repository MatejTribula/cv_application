import { useState } from 'react'



function Form(props) {
    const [sent, setSent] = useState(false)
    const [inputArr, setInputArr] = useState(props.inputs)


    // function that is executed on submit of the function
    // if the form concerns image it is of length 1 and input type file
    // else
    function handleSubmit(e) {
        e.preventDefault()

        const newInputs = [...inputArr]
        // console.log(newInputs)

        if (props.isImage) {
            const input = inputArr[0]
            const htmlInput = e.target.querySelector(`#${idString(input.name)}`)
            const file = htmlInput.files[0]

            // console.log(file)
            if (file) {
                const reader = new FileReader();

                // console.log(reader)

                //this class instance handles files submitted into form using form type file
                reader.onload = function (e) {
                    // console.log(e)
                    newInputs[0].src = e.target.result
                    console.log(e.target.result)

                    //we need to wait and then assign src (for that reason it is not simplified)
                    setInputArr(newInputs)
                }
                reader.readAsDataURL(file);
            } else {
                console.error('no file selected')
            }

        } else {
            props.inputs.forEach((input, index) => {
                const htmlInput = e.target.querySelector(`#${idString(input.name)}`)

                inputArr[index].value = htmlInput.value

                // console.log(htmlInput.value)
            })
            setInputArr(newInputs)
        }



        setSent(true)
    }

    // this function removes space from the string with two words
    function idString(string) {
        // console.log(string)
        if (string.includes(' ')) {
            // console.log(string)

            const spaceIndex = string.indexOf(' ')
            let trimmedString = string.replace(/\s+/g, '');

            // console.log('trimmed:' + trimmedString)

            const capital = trimmedString[spaceIndex].toUpperCase()
            const finalString = trimmedString.substring(0, spaceIndex) + capital + trimmedString.substring(spaceIndex + 1)

            return finalString
        }
        return string
    }


    return (
        <div className={props.classes}>
            {sent
                ? <>
                    {props.isImage
                        ? <><img src={inputArr[0].src} alt="" />
                            <button onClick={() => setSent(false)}>edit</button>
                        </>
                        : <>
                            <h3 >{props.title}</h3 >

                            <div className="form-substitute">
                                <div className='submitted-text'>
                                    <div className="title-group">
                                        {inputArr.map(input => (<p className='para-title'>{input.name}</p>))}
                                    </div>
                                    <div className="content-group">
                                        {inputArr.map(input => (<p className='para-content'>{input.value}</p>))}
                                    </div>
                                </div>
                                <button onClick={() => setSent(false)}>edit</button>
                            </div>
                        </>}


                </>

                : <><h3 > {props.title}</h3 >
                    <form onSubmit={handleSubmit}>
                        {props.isImage
                            ? <>
                                {inputArr[0].src !== ''
                                    ? <img src={inputArr[0].src} alt="" />
                                    : <div className='image-placeholder'></div>}

                                <div className="input-button-container">
                                    <label htmlFor={idString(inputArr[0].name)} className="custom-input">
                                        choose a file
                                    </label>
                                    <input type={inputArr[0].type} id={idString(inputArr[0].name)} accept=".jpg, .jpeg, .png" required />
                                    <button type='submit'>submit</button>
                                </div>
                            </>
                            : <>
                                <div className='pair-container'>
                                    <div className='label-container'>
                                        {inputArr.map(input => (
                                            <label key={input.id} htmlFor={idString(input.name)}>{input.name}</label>
                                        ))}
                                    </div>
                                    <div className="input-container">
                                        {inputArr.map(input => (
                                            <input
                                                key={input.id}
                                                type={input.type}
                                                id={idString(input.name)}
                                                placeholder='type here'
                                                value={input.value}
                                                onChange={(e) => {
                                                    const newInputs = inputArr.map((item) =>
                                                        item.id === input.id ? { ...item, value: e.target.value } : item
                                                    );
                                                    setInputArr(newInputs);
                                                }}

                                                required />

                                        ))}
                                    </div>
                                </div>
                                <button type='submit'>submit</button>
                            </>}

                    </form >
                </>
            }
        </div >

    )
}

export default Form