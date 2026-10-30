import { useState } from 'react'

import Input from './Input'

function UseForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [error, setError] = useState({isError:false, message: ""})

    const validateAge = (val) => {
    if (val >= 0) {
        setError({ isError: false, message: "" })
        return true
    } else {
        setError({ isError: true, message: "Возраст не может быть отрицательным" })
        return false
    }
}
    const validateName = (val) => val.length > 0


    function onSubmit(e) {
    e.preventDefault()

    if (error.isError) {
        console.error(error.message)
        return
    }

    console.log('Отправлено:', { name, age })
}

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input header="Имя" validate={validateName} type="text" value={name} setValue={setName}/>
                <Input header="Возраст" validate={validateAge} type="number" value={age} setValue={setAge} error={error}/>

                <button type="submit">Отправить</button>
            </form>

            <p>Name: {name}, age: {age}</p>
        </div>
    )
}

export default UseForm