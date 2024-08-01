import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    boxSize: 'Small, Medium, Large',
    boxHolder: 'Enter a name...',
}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMailbox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value})
    }

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='boxSize'>Box Size: </label>
                <input 
                    type='text'
                    id='boxSize'
                    name='boxSize'
                    value={formData.boxSize}
                    onChange={handleChange}
                />
                <label htmlFor='boxHolder'>Box Holder: </label>
                <input 
                    type='text'
                    id='boxHolder'
                    name='boxHolder'
                    value={formData.boxHolder}
                    onChange={handleChange}
                />
                <button type='submit'>Add Mailbox</button>
            </form>
        </main>
    )
}

export default MailboxForm