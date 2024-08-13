import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    boxSize: 'Small, Medium, Large',
    boxHolder: '',
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
                <select 
                    type='text'
                    id='boxSize'
                    name='boxSize'
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                <option value="Small, Medium, Large" disabled>Select a size...</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                </select>

                <label htmlFor='boxHolder'>Box Holder: </label>
                <input 
                    type='text'
                    id='boxHolder'
                    name='boxHolder'
                    value={formData.boxHolder}
                    onChange={handleChange}
                    placeholder='Enter box holder name'
                />
                <button type='submit'>Add Mailbox</button>
            </form>
        </main>
    )
}

export default MailboxForm