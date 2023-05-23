import React from 'react'
import SelectionCard from '@/components/SelectionCard'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'

const SemesterSelect = () => {
    return (
        <div className="bg-gradblue bg-cover bg-center bg-no-repeat h-screen ">
            {/* <div className='flex flex-col justify-center bg-center bg-full '> */}

            <div className='flex flex-col justify-evenly relative top-10'>

                <Link href="/LevelSelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>

                <h1 className="font-extrabold text-3xl relative w-56 bottom-4 px-6 text">Select your Faculty</h1>

            </div>



            {/* faculty-selection-cards */}
            <div className=' flex flex-col justify-center py-16 '>

                <div className='flex justify-center'>
                    <SelectionCard text="FIRST SEMESTER" bgImage="bg-scientist" link="/Signup" />
                </div>


                <div className='flex justify-center py-8 '>
                    <SelectionCard text="SECOND SEMESTER" bgImage="bg-creative" link="/signup" />
                </div>


            </div>

            {/* End-Faculty-selection-cards */}


        </div>
    )
}

export default SemesterSelect