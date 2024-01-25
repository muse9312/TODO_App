import React, { useState } from 'react'
import Button from '../components/Button'

import Counter from '../components/Counter'

const Count = () => {
    // let target = 0
    const [data, setDate] = useState(0)

    const countHanldler = (type) => {
        // data의 최소값: 0
        // data의 최대값: 10
        // type === 'plus' ? data < 10 && setDate(data + 1) : data > 0 && setDate(data - 1)
        // setDate(type === 'plus' ? data + 1 : data - 1)


        if (type === 'plus') {
            data < 10 && setDate(data + 1)

        } else {
            data > 0 && setDate(data - 1)
        }



        // target += 1
        // document.querySelector('.target').innerText = target
    }





    return (
        <div className="container">

            <Counter data={data} />
            <div className='button-wrap'>
                {/* 플러스버튼 */}
                <Button onClick={countHanldler} type={'plus'} />
                {/* 마이너스 버튼 */}
                <Button onClick={countHanldler} type={'minus'} />


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
