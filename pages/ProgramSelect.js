import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import ProgrammeCard from '@/components/ProgrammeCard'

const ProgramSelect = () => {
    return (
        <div>
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href="/DepartmentSelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>


                <h1 className="font-extrabold text-3xl relative w-56 bottom-4 px-6 text">Select your program</h1>

            </div>


            <div className=' flex flex-col justify-center py-16 '>

                <div className='flex justify-center'>
                    <ProgrammeCard text="Art, Management and Social Sciences" bgImage="bg-creative" link="/DepartmentSelect" />
                </div>




            </div>
        </div>
    )
}

export default ProgramSelect