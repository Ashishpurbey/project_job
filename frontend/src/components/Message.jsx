import {Alert} from 'react-bootstrap';
import React from 'react'

const Message = ({variant,children}) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

Message.defualtPorps ={
    variant:'info',
}

export default Message
