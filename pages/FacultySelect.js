import React from 'react'
import SelectionCard from '@/components/SelectionCard'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'




const FacultySelect = () => {
    return (
        // <div className="bg-gradient-to-t from-slate-900 to-sky-500 bg-cover bg-center bg-no-repeat h-screen ">

        <div className="bg-graduation bg-cover bg-center bg-no-repeat h-screen ">
            {/* <div className='overflow-hidden flex flex-col justify-center bg-center bg-full '> */}

            <div className='flex flex-col justify-evenly relative top-10'>

                {/* The arrow back navigation button is added here just for easy navigation to the sign up page and would not be included in the main app */}

                <Link href="/Signup">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>

                {/* The arrow back navigation button is added here just for easy navigation to the sign up page and would not be included in the main app */}

                <h1 className="font-extrabold text-3xl relative w-56 bottom-4 px-6 text">Select your Faculty</h1>

            </div>




            {/* faculty-selection-cards */}
            <div className='flex flex-col justify-center py-16 '>

                <div className='flex justify-center'>
                    <SelectionCard text="Basic Medical and Applied Sciences" bgImage="bg-scientist" link="/DepartmentSelect" />
                </div>




                <div className='flex justify-center py-8'>
                    <SelectionCard text="Art, Management and Social Sciences" bgImage="bg-creative" link="/DepartmentSelect" />
                </div>


            </div>
            {/* End-Faculty-selection-cards */}



        </div>






    )
}

export default FacultySelect