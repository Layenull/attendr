import React from 'react'
import Link from 'next/link'
const ProgrammeCard = ({ text, bgImage, link, prgImage }) => {
    return (
        <div className={` bg-white rounded-3xl border w-11/12 h-36 overflow-hidden bg-cover  ${bgImage}`}>
            <Link href={link}>

                <div className="flex p-14">
                    <div className={`relative bottom-10 right-11 rounded-3xl w-48 h-28 bg-cover border ${prgImage}`}>
                    </div>
                    <p className="relative font-bold bottom-9 text-xl ">{text}</p>
                </div>
            </Link>

        </div>
    )
}

export default ProgrammeCard