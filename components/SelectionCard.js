import React from 'react'
import Link from 'next/link'



const SelectionCard = ({ text, bgImage, link }) => {
    return (

        <div className={`rounded-2xl border w-11/12 h-60 overflow-hidden bg-cover  ${bgImage}`}>
            <Link href={link}>

                <div className="p-6">
                    <p className="text-2xl  mb-4">{text}</p>

                </div>
            </Link>
        </div>



    )
}

export default SelectionCard