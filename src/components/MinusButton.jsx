import React from 'react'



const MinusButton = ({ onClick }) => {

    return (
        <>
            <button type='button' className='button-text' onClick={onClick}>
                <span className='button-text-minus'>-1</span>
            </button>
        </>
    )
}

export default MinusButton