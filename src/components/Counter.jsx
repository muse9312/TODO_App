import React from 'react'

const Counter = ({ data }) => {

    return (
        <div className="counter">
            <h1>Counter :</h1>

            <span className="counter-text">{data}</span>
        </div>
    )
}

export default Counter