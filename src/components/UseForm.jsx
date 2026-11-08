import { useState } from 'react'
import Input from './Input'


function UseForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [errorName, setErrorName] = useState({ isError: false, message: '' })
    const [errorAge, setErrorAge] = useState({ isError: false, message: '' })

    const validateName = (val) => {
        if (typeof val === 'string' && val.trim().length > 0) {
            return { valid: true, message: '' }
        }
        return { valid: false, message: 'Имя не может быть пустым' }
    }

    const validateAge = (val) => {
        const num = Number(val)
        if (Number.isFinite(num) && num > 0) {
            return { valid: true, message: '' }
        }
        return { valid: false, message: 'Возраст должен быть положительным числом' }
    }
    

    const onErrorName = (res) => setErrorName({ isError: !res.valid, message: res.message })
    const onErrorAge = (res) => setErrorAge({ isError: !res.valid, message: res.message })

    function onSubmit(e) {
        e.preventDefault()

        const resName = validateName(name)
        const resAge = validateAge(age)
        onErrorName(resName)
        onErrorAge(resAge)

        if (resName.valid && resAge.valid) {
            console.log('Форма отправлена:', { name, age: Number(age) })
        } else {
            console.error('Форма содержит ошибки')
        }
    }
    

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input
                    header="Имя"
                    validate={validateName}
                    type="text"
                    value={name}
                    setValue={setName}
                    error={errorName}
                    onError={onErrorName}
                />
                <Input
                    header="Возраст"
                    validate={validateAge}
                    type="number"
                    value={age}
                    setValue={setAge}
                    error={errorAge}
                    onError={onErrorAge}
                />

                <button type="submit">Отправить</button>
            </form>

            <p>Name: {name}, age: {age}</p>
        </div>
    )
}


export default UseForm
