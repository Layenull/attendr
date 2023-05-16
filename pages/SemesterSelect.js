import React from 'react'
import SelectionCard from '@/components/SelectionCard'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

const SemesterSelect = () => {
    return (
        <div className='flex flex-col justify-center bg-center bg-full '>

            <div className='flex flex-col justify-evenly relative top-10'>

                <HiOutlineArrowNarrowLeft className=' relative left-6 top-2 text-5xl' />

                <h1 className="font-extrabold text-3xl relative w-56 top-5 px-6 text">Select your Faculty</h1>

            </div>



            {/* faculty-selection-cards */}
            <div className=' flex flex-col justify-center pt-32 '>

                <div className='flex justify-center'>
                    <SelectionCard text="FIRST SEMESTER" bgImage="bg-scientist" />
                </div>


                <div className='flex justify-center pt-20 '>
                    <SelectionCard text="SECOND SEMESTER" bgImage="bg-creative" />
                </div>

            </div>

            {/* End-Faculty-selection-cards */}


        </div>
    )
}

export default SemesterSelect