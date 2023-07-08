import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import userContext from "@/context/userContext";


const LevelSelect = () => {
    const { user, setUser } = useContext(userContext);
    const [levels, setLevels] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchLevels();
    }, []);

    const fetchLevels = async () => {
        try {
            const response = await fetch('http://localhost:3009/api/v1/levels');
            const data = await response.json();

            if (data.success) {
                setLevels(data.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleOptionChange = (level) => {
        setSelectedOption(level.code);
        setUser({
            ...user,
            level,
        });
        setIsNextButtonDisabled(false);
    };

    const handleNextButtonClick = () => {
        if (selectedOption !== '') {
            router.push('/SemesterSelect');
        } else {
            console.log('Please select a level');
        }
    };

    return (
        <div className='bg-graduation bg-cover bg-center bg-no-repeat h-screen'>
            <div className='flex flex-col justify-evenly relative top-10'>
                <Link href='/ProgramSelect'>
                    <HiOutlineArrowNarrowLeft className='relative left-6 bottom-5 text-5xl' />
                </Link>

                <h1 className='font-extrabold text-3xl relative w-56 bottom-4 px-6 text'>What level are you in?</h1>
            </div>

            <div className='flex flex-col space-y-14 px-12 py-20 font-bold text-2xl'>
                {levels.map((level) => (
                    <label className='inline-flex items-center' key={level._id}>
                        <input
                            type='radio'
                            className='form-radio'
                            name='radio-options'
                            value={level.code}
                            checked={selectedOption === level.code}
                            onChange={() => handleOptionChange(level)}
                        />
                        <span className='ml-2'>{level.code}</span>
                    </label>
                ))}
            </div>

            <div className='flex justify-center py-10'>
                <button
                    type='submit'
                    className='border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg'
                    disabled={isNextButtonDisabled}
                    onClick={handleNextButtonClick}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LevelSelect;
