import { useState } from 'react'

function Input(props) {
    const validate = props.validate
    const [color, setColor] = useState('#ccc')

    const onChange = (e) => {
        const val = e.target.value
        props.setValue(val)

        const res = validate(val)
        setColor(res.valid ? 'green' : 'red')

        if (props.onError) {
            props.onError(res)
        }
    }

    
    const currentColor = props.error && props.error.isError ? 'red' : color

    return (
        <div>
            <label>{props.header}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={onChange}
                style={{ borderColor: currentColor, outline: 'none', borderWidth: '2px' }}
            />
            {props.error && props.error.isError ? <p>{props.error.message}</p> : null}
        </div>
    )
}

export default Input
