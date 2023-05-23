import React from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'
import DeptCard from '@/components/DeptCard'



const DepartmentSelect = () => {
    return (
        <div className="bg-gradblue bg-cover bg-center bg-no-repeat h-screen ">
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href="/FacultySelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' link="/FacultySelect" />
                </Link>

                <h1 className="font-extrabold text-3xl relative w-56 bottom-5 px-6 text">Select your Department</h1>

            </div>





            <div className=' flex flex-col justify-center py-16 '>

                <div className='flex justify-center'>
                    <DeptCard text="computer & information sciences" bgImage="bg-scientist" link="/ProgramSelect" dptImage="bg-creative" />
                </div>


                <div className='flex justify-center py-8'>
                    <DeptCard text="information sciences technology" bgImage="bg-creative" link="/ProgramSelect" />
                </div>




            </div>









        </div>
    )
}

export default DepartmentSelect