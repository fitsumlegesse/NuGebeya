import React from 'react'
import { Alert } from '@material-ui/lab'
// import { Alert } from 'react-bootstrap'

const Message = ({severity,children}) => {
    return (
    
        <Alert  severity={severity}> {children}</Alert>
    )
}

Message.defaultProps = {
    severity:'info',
}

export default Message
