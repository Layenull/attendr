import React from 'react'

const CoursesCard = ({ prgName, lvlName, prgImg }) => {
    return (
        <div className={`bg-slate-100 rounded-2xl border w-11/12 h-40 overflow-hidden bg-cover  ${prgImg}`}>
            <div className="p-6">
                <p className=" font-bold text-3xl  mb-4">{prgName}</p>
                <p className='font-semibold text-xl'>{lvlName}</p>

            </div>
        </div>
    )
}

export default CoursesCard