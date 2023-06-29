import React from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Courses from '@/components/Courses'
import CoursesCard from '@/components/CoursesCard'



const CourseRegistration = () => {
    return (
        <div className='bg-graduation  bg-cover bg-center bg-no-repeat h-screen'>
            <div className='flex justify-evenly relative pt-14 right-8'>
                <Link href="/SemesterSelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>


                <h1 className="font-extrabold text-3xl relative w-64 bottom-4 px-6 text">Register your courses</h1>

            </div>

            <div className='flex justify-center'>

                <CoursesCard prgName="B.sc Computer Science" prgImg="bg-scientist" lvlName="200 Level" />

            </div>


            <div className=' pt-12'>
                <Courses />

            </div>


        </div>
    )
}

export default CourseRegistration