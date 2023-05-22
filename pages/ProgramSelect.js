import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import ProgrammeCard from '@/components/ProgrammeCard'

const ProgramSelect = () => {
    return (
        <div>
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href="/DepartmentSelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 top-2 text-5xl' />
                </Link>


                <h1 className="font-extrabold text-3xl relative w-56 top-5 px-6 text">Select your program</h1>

            </div>


            <div className=' flex flex-col justify-center pt-32 '>

                <div className='flex justify-center'>
                    <Link href="/DepartmentSelect">
                        <ProgrammeCard text="Art, Management and Social Sciences" bgImage="bg-creative" />
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default ProgramSelect