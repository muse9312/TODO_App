import React from 'react'


// !! 함수를 뒤에 몰아놓고 , 변수는 앞에!!
const Button = ({ type, onClick }) => {


    return (
        <>
            <button type='button' className='button-text' onClick={() => onClick(type)}>
                <span className={`button-text-${type}`}>
                    {type === 'plus' ? '+1' : '-1'}
                </span>
            </button>
        </>
    )
}

export default Button

