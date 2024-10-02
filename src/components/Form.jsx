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
        <div>

            {sent
                ? <div>
                    {inputArr.length === 1 && inputArr[0].type === 'file'
                        ? <img src={inputArr[0].src} alt="" />
                        : <>
                            <h2 > {props.title}</h2 >
                            {inputArr.map(input => (
                                <div>
                                    <p className='para-title'>{input.name}</p>
                                    <p className='para-text'>{input.value}</p>
                                </div>
                            ))}</>}

                    <button onClick={() => setSent(false)}>edit</button>


                </div>
                : <><h2 > {props.title}</h2 >
                    <form className={props.classes} onSubmit={handleSubmit}>
                        {inputArr.length === 1 && inputArr[0].type === 'file'
                            ? <>
                                {inputArr[0].src !== ''
                                    ? <img src={inputArr[0].src} alt="" />
                                    : <div className='imageContainer'></div>}


                                <input type={inputArr[0].type} id={idString(inputArr[0].name)} accept=".jpg, .jpeg, .png" required />
                            </>
                            : <>
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
                            </>}
                        <button type='submit'>submit</button>
                    </form >
                </>
            }
        </div >

    )
}

export default Form