import React from 'react'

const DeptCard = ({ text, bgImage, }) => {
    return (
        <div className={`rounded-3xl border w-11/12 h-36 overflow-hidden bg-cover  ${bgImage}`}>

            <div className="flex p-14">
                <div className=' relative bottom-10 right-11 bg-customBlue rounded-3xl w-48 h-28 border'>
                </div>
                <p className="relative bottom-9 text-lg ">{text}</p>

            </div>






        </div>
    )
}

export default DeptCard