import React from 'react'
import './Chart.css'

const Chart = (props) => {
    return (
        <div className="chart" onClick={props.click}> {props.character}</div>
    )
}

export default Chart
