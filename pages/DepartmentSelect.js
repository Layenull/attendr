import React, { useState, useEffect, useContext } from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'
import DeptCard from '@/components/DeptCard'
import userContext from '@/context/userContext';
import { useRouter } from 'next/router';




const DepartmentSelect = () => {
    const { user, setUser } = useContext(userContext);
    const [departments, setDepartments] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (user.faculty) {
            fetchDepartments();
        }
    }, [user.faculty]);

    const fetchDepartments = async () => {
        try {
            const response = await fetch(`http://localhost:3009/api/v1/departments/${user.faculty}`);
            const data = await response.json();
            console.log(data); // Optional: Check the response data

            if (data.success) {
                setDepartments(data.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDepartmentSelect = (department) => {
        setUser({
            ...user,
            department: {
                _id: department._id,
                name: department.name,
            }
        });

        router.push('/ProgramSelect');
    };

    return (
        // <div className="bg-gradient-to-t from-slate-900 to-sky-500 bg-cover bg-center bg-no-repeat h-screen ">
        <div className="bg-graduation bg-cover bg-center bg-no-repeat h-screen">
            <div className="flex flex-col justify-evenly relative top-10">
                <Link href="/FacultySelect">
                    <HiOutlineArrowNarrowLeft className="relative left-6 bottom-5 text-5xl" />
                </Link>
                <h1 className="font-extrabold text-3xl relative w-56 bottom-5 px-6 text">Select your Department</h1>
            </div>

            <div className="flex flex-col justify-center py-16 space-y-8">
                {departments.length > 0 ? (
                    departments.map((department) => (
                        <div className="flex justify-center" key={department._id}>
                            <DeptCard
                                text={department.name}
                                bgImage="bg-scientist"
                                onClick={() => handleDepartmentSelect(department)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="flex justify-center text-2xl text-blue-800">Loading departments...</p>
                )}
            </div>
        </div>
    )
}

export default DepartmentSelect