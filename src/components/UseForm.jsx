import { useState } from 'react'
import Input from './Input.jsx'

export default function UseForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState({ isError: false, message: "" })

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
                <Input 
                    header="Имя" 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    error={{ isError: !validateName(name), message: "Имя обязательно" }}
                />
                <Input 
                    header="Возраст" 
                    type="number" 
                    value={age} 
                    onChange={(e) => {
                        setAge(e.target.value)
                        validateAge(e.target.value)
                    }} 
                    error={error}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}
