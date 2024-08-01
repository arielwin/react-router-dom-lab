import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useState } from 'react'

import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'

const App = () => {

  const [mailboxes, setMailboxes] = useState([
    
  ])

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <NavBar />
      <h1>Mailbox List</h1>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/> } />
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/> } />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
        <Route path='*' element={<main><h1>404 - Mailbox Not Found</h1></main>}/>
      </Routes>
    </>
  )
};
    


export default App;