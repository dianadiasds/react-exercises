import React from 'react'

const ValidationComponent = (props) => {
    let message = ' ';

    if (props.inputLenght < 1) {
        message = ' '
    }  else if (props.inputLenght < 5) {
        message = 'Text too short'
    } else {
        message = 'Text longh enought'
    }
    return (
        <p> {message} </p>
    )
}

export default ValidationComponent
