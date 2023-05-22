import React from 'react'
import SelectionCard from '@/components/SelectionCard'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'




const FacultySelect = () => {
    return (
        <div className='flex flex-col justify-center bg-center bg-full '>

            <div className='flex flex-col justify-evenly relative top-10'>

                {/* The arrow back navigation button is added here just for easy navigation to the sign up page and would not be included in the main app */}

                <Link href="/Signup">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 top-2 text-5xl' />
                </Link>

                {/* The arrow back navigation button is added here just for easy navigation to the sign up page and would not be included in the main app */}

                <h1 className="font-extrabold text-3xl relative w-56 top-5 px-6 text">Select your Faculty</h1>

            </div>




            {/* faculty-selection-cards */}
            <div className='flex flex-col justify-center pt-32 '>

                <div className='flex justify-center'>
                    <Link href="/DepartmentSelect" >
                        <SelectionCard text="Basic Medical and Applied Sciences" bgImage="bg-scientist" />
                    </Link>

                </div>


                <div className='flex justify-center pt-20'>
                    <Link href="/DepartmentSelect" >
                        <SelectionCard text="Art, Management and Social Sciences" bgImage="bg-creative" />
                    </Link>

                </div>

                {/* <div className='flex justify-center'>
                    <Link href="/DepartmentSelect" >
                        <SelectionCard text="Basic Medical and Applied Sciences" bgImage="bg-scientist" />
                    </Link>
                </div>


                <div className='flex justify-center pt-20 '>
                    <Link href="/DepartmentSelect">
                        <SelectionCard text="Art, Management and Social Sciences" bgImage="bg-creative" />
                    </Link>
                </div> */}

            </div>

            {/* End-Faculty-selection-cards */}


        </div>

















    )
}

export default FacultySelect