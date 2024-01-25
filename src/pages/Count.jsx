import React, { useState } from 'react'
import PlusButton from '../components/PlusButton'
import MinusButton from '../components/MinusButton'
import Counter from '../components/Counter'

const Count = () => {
    // let target = 0
    const [data, setDate] = useState(0)

    const hanldleIncrease = (clickData) => {
        setDate(data + 1)

        console.log('1');
        console.log(clickData);
        // target += 1
        // document.querySelector('.target').innerText = target
    }
    const handleDecrease = () => {
        setDate(data - 1)
    }




    return (
        <div className="container">

            <Counter data={data} />
            <div className='button-wrap'>
                <PlusButton onClick={hanldleIncrease} />
                <MinusButton onClick={handleDecrease} />

                {/* <div>
                    <div className='target'>Result: {target}</div>
                    <button type="button" onClick={hanldleIncrease}>JS +1</button>
                    <button type="button" onClick={handleDecrease}>JS -1</button>

                </div> */}

            </div>

        </div>
    )
}

export default Count
