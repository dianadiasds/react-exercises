import React from 'react';

const cockpit = (props) => {
    return(
        <div>
            <h1> Hi i am a React app</h1>
            <button onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}
export default cockpit
