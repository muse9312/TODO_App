import React from 'react'


// !! 함수를 뒤에 몰아놓고 , 변수는 앞에!!
const Button = ({ text, onClick }) => {


    return (
        <>
            <button type='button' className='button-text' onClick={() => onClick('clicked')}>
                <span className='button-text-plus'>{text}</span>
            </button>
        </>
    )
}

export default Button

