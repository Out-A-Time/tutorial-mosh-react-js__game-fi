import React from 'react'
// let count = 0

const Message = () => {
    let count = 0
    //Lesson37_Example of impure function.
    count++
    return (
        <div>Message {count}</div>
    )
}

export default Message