import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import SelectionCard from '@/components/SelectionCard'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'
import userContext from '@/context/userContext'

const SemesterSelect = () => {
    const { user, setUser } = useContext(userContext);
    const [semesters, setSemesters] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchSemesters();
    }, []);

    const fetchSemesters = async () => {
        try {
            const response = await fetch('http://localhost:3009/api/v1/semesters');
            const data = await response.json();

            if (data.success) {
                setSemesters(data.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSemesterSelect = (semester) => {
        setUser({
            ...user,
            semester,
        });

        router.push('/CourseRegistration');
    };


    return (
        <div className='bg-graduation bg-cover bg-center bg-no-repeat h-screen'>
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href='/LevelSelect'>
                    <HiOutlineArrowNarrowLeft className='relative left-6 bottom-5 text-5xl' />
                </Link>

                <h1 className='font-extrabold text-3xl relative w-56 bottom-4 px-6 text'>Select your Semester</h1>
            </div>

            <div className='flex flex-col justify-center py-16 space-y-8'>
                {semesters.map((semester) => (
                    <div className='flex justify-center' key={semester._id}>
                        <SelectionCard
                            text={semester.name}
                            bgImage='bg-scientist'
                            onClick={() => handleSemesterSelect(semester)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SemesterSelect