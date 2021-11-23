import React from 'react'

const Position = ({data}) => {
    return (
        <div>
            <select>
                <option>Position</option>
                {data.vehicle?.map((v,i)=>
                    <option key={i}>{v}</option>
                )}
            </select>
        </div>
    )
}

export default Position