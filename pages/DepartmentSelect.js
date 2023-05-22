import React from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'
import DeptCard from '@/components/DeptCard'



const DepartmentSelect = () => {
    return (
        <div>
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href="/FacultySelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 top-2 text-5xl' />
                </Link>

                <h1 className="font-extrabold text-3xl relative w-56 top-5 px-6 text">Select your Department</h1>

            </div>





            <div className=' flex flex-col justify-center pt-32 '>

                <div className='flex justify-center'>
                    <Link href="/ProgramSelect" >
                        <DeptCard text="computer & information sciences" bgImage="bg-scientist" />
                    </Link>
                </div>


                <div className='flex justify-center pt-20'>
                    <Link href="/ProgramSelect" >
                        <DeptCard text="information sciences technology" bgImage="bg-creative" />
                    </Link>
                </div>





            </div>




        </div>
    )
}

export default DepartmentSelect