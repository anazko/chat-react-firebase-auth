import { useContext, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Context } from "../index"
import classNames from "classnames"
import Loader from "./Loader"

const Chat = () => {
  
  const { auth, firestore, firebase } = useContext(Context)
  const [ user ] = useAuthState(auth)
  const [ text, setText ] = useState('')
  const [ messages, loading ] = useCollectionData(
    firestore.collection("messages").orderBy("time")
  )

  let messageBox = null;

  if (messages) {
    messageBox = messages.map(message => {

      const msgClass = classNames({
        'message': true,
        'my': user.uid === message.uid
      })

      return (
        <div key={message.time} className={msgClass}>
          <div className="displayName">{message.displayName}: </div>
          {message.text}
        </div>
      )
    })
  }

  const changeHandler = (e) => {
    setText(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await firestore.collection('messages').add({
      text,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
    setText('')
  }

  if (loading) return <Loader />

  return (
    <Container>
      <Row>
        <div className="messages">
          { messageBox }
        </div>
      </Row>
      <Row>
        <form onSubmit={ submitHandler } className="newMessage">
          <input type="text" value={text} onChange={ changeHandler }></input>
          <input type="submit" value="Send"></input>
        </form>
      </Row>
    </Container>
  )
}

export default Chat