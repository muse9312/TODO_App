import React from 'react'



const PlusButton = ({ onClick }) => {

    return (
        <>
            <button type='button' className='button-text' onClick={() => onClick('clicked')}>
                <span className='button-text-plus'>+1</span>
            </button>
        </>
    )
}

export default PlusButton

