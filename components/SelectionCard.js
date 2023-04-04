import React from 'react'
import Image from 'next/image'

const SelectionCard = ({ text, bgImage }) => {
    return (

        <div className={`rounded-2xl border w-11/12 h-60 overflow-hidden bg-cover  ${bgImage}`}>

            <div className="p-6">
                <p className="text-2xl  mb-4">{text}</p>

            </div>
        </div>



    )
}

export default SelectionCard