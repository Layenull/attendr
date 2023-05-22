import React from 'react'
import Link from 'next/link'
const ProgrammeCard = ({ text, bgImage, link }) => {
    return (
        <div className={`rounded-3xl border w-11/12 h-36 overflow-hidden bg-cover  ${bgImage}`}>
            <Link href={link}>

                <div className="flex p-14">
                    <div className=' relative bottom-10 right-11 bg-customBlue rounded-3xl w-48 h-28 border'>
                    </div>
                    <p className=" relative bottom-9 text-lg ">{text}</p>

                </div>
            </Link>

        </div>
    )
}

export default ProgrammeCard