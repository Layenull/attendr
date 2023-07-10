import React, { useState, useEffect, useContext } from 'react'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from 'next/link'
import ProgrammeCard from '@/components/ProgrammeCard'
import userContext from '@/context/userContext'
import { useRouter } from 'next/router'



const ProgramSelect = () => {
    const { user, setUser } = useContext(userContext);
    const [programmes, setProgrammes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (user.department) {
            console.log('User Department:', user.department);
            fetchProgrammes();
        }
    }, [user.department]);

    const fetchProgrammes = async () => {
        try {
            const response = await fetch(
                `http://localhost:3009/api/v1/programmes/${user.department._id}`
            );
            const data = await response.json();
            // console.log('Programmes API response:', data); // Optional: Check the response data

            if (data.success) {
                setProgrammes(data.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleProgrammeSelect = (programme) => {
        setUser({
            ...user,
            programme: {
                _id: programme._id,
                name: programme.name,
            },

        });

        router.push('/LevelSelect');
    };

    return (
        <div className="bg-graduation bg-cover bg-center bg-no-repeat h-screen">
            <div className="flex flex-col justify-evenly relative top-10">
                <Link href="/DepartmentSelect">
                    <HiOutlineArrowNarrowLeft className="relative left-6 bottom-5 text-5xl" />
                </Link>
                <h1 className="font-extrabold text-3xl relative w-56 bottom-4 px-6 text">
                    Select your programme
                </h1>
            </div>

            <div className="flex flex-col justify-center py-16 space-y-8">
                {programmes.length > 0 ? (
                    programmes.map((programme) => (
                        <div className="flex justify-center" key={programme._id}>
                            <ProgrammeCard
                                text={programme.name}
                                bgImage="bg-scientist"
                                onClick={() => handleProgrammeSelect(programme)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="flex justify-center text-2xl text-blue-800">Loading programmes...</p>
                )}
            </div>
        </div>
    )
}

export default ProgramSelect