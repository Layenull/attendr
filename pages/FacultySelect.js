import React, { useState, useEffect, useContext } from 'react';
import userContext from '@/context/userContext';
import SelectionCard from '@/components/SelectionCard'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'




const FacultySelect = () => {
    const { user, setUser } = useContext(userContext);
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        fetchFaculties();
    }, []);

    const fetchFaculties = async () => {
        try {
            const response = await fetch('http://localhost:3009/api/v1/facaulties');
            const data = await response.json();
            console.log(data); // Optional: Check the response data

            if (data.success) {
                setFaculties(data.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFacultySelect = (faculty) => {
        setUser({
            ...user,
            faculty,
        });
    };


    return (
        // <div className="bg-gradient-to-t from-slate-900 to-sky-500 bg-cover bg-center bg-no-repeat h-screen ">

        <div className="bg-graduation bg-cover bg-center bg-no-repeat h-screen ">
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href="/Signup">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>
                <h1 className="font-extrabold text-3xl relative w-56 bottom-4 px-6 text">Select your Faculty</h1>
            </div>

            <div className='flex flex-col justify-center py-16 space-y-8'>
                {faculties.length > 0 ? (
                    faculties.map((faculty) => (
                        <div className='flex justify-center' key={faculty._id}>
                            <SelectionCard text={faculty.name} bgImage="bg-scientist" link="/DepartmentSelect" onClick={() => handleFacultySelect(faculty.name)} />
                        </div>
                    ))
                ) : (
                    <p className='flex justify-center text-xl'>Loading faculties...</p>
                )}
            </div>
        </div>





    )
}

export default FacultySelect