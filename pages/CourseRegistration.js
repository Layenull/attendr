import React, { useContext } from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'
import Courses from '@/components/Courses'
import CoursesCard from '@/components/CoursesCard'
import userContext from '@/context/userContext'
import { useRouter } from 'next/router'



const CourseRegistration = () => {
    const { user, setUser } = useContext(userContext);
    const router = useRouter();

    const handleSubmit = (selectedCourses) => {
        setUser({
            ...user,
            courses: selectedCourses,
        });

        fetch('http://localhost:3009/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...user,
                courses: selectedCourses,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    router.push('/AttendanceTracker');
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className='bg-graduation  bg-cover bg-center bg-no-repeat h-screen'>
            <div className='flex justify-evenly relative pt-14 right-8'>
                <Link href="/SemesterSelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>

                <h1 className="font-extrabold text-3xl relative w-64 bottom-4 px-6 text">Register your courses</h1>
            </div>

            <div className='flex justify-center'>
                <CoursesCard prgName={user.programme.name} lvlNumber={`${user.level.code} Level`} prgImg="bg-scientist" />
            </div>

            <div className=' pt-12'>
                <Courses onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default CourseRegistration