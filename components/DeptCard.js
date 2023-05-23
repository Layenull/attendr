import React from 'react'
import Link from 'next/link'

const DeptCard = ({ text, bgImage, link, dptImage }) => {
    return (
        <div className={`bg-white rounded-3xl border w-11/12 h-36 overflow-hidden bg-cover  ${bgImage}`}>

            <Link href={link}>
                <div className="flex p-14">
                    <div className={`relative bottom-10 right-11 rounded-3xl w-48 h-28 bg-cover border ${dptImage}`}>
                    </div>
                    <p className="relative bottom-9 text-lg ">{text}</p>
                </div>

            </Link>

        </div>







    )
}

export default DeptCard