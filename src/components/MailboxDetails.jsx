

import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const selectedBox = props.mailboxes.find(mailbox => mailbox._id === Number(mailboxId))
    return (
        <>
            <h2>Mailbox: {selectedBox._id}</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
                <dt>Box Holder:</dt>
                <dd>{selectedBox.boxHolder}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails