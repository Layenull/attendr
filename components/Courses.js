import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import userContext from '@/context/userContext';

const Courses = ({ onSubmit }) => {
    const [courses, setCourses] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const { user } = useContext(userContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('User department:', user.department); // Log the user's department
        console.log('User level:', user.level); // Log the user's level
        console.log('User semester:', user.semester); // Log the user's semester


        if (user.department && user.level && user.semester) {
            fetch(`http://localhost:3009/api/v1/courses?department=${encodeURIComponent(user.department.name)}&level=${user.level.code}&semester=${user.semester._id}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Response data:', data);
                    setCourses(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setLoading(false);
                });
        }
    }, [user.department, user.level, user.semester]);

    const handleCourseSelect = (course) => {
        if (selectedOptions.includes(course)) {
            setSelectedOptions(selectedOptions.filter((option) => option !== course));
        } else {
            setSelectedOptions([...selectedOptions, course]);
        }
    };

    const handleSubmit = () => {
        if (selectedOptions.length >= 5) {
            onSubmit(selectedOptions);
        } else {
            setErrorMessage('Please select at least 5 course');
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }



    return (
        // <div className='space-x-5 justify-center'>
        //     {Array.isArray(courses) && courses.map((course) => (
        //         <div key={course._id}>
        //             <h4 className='font-bold text-xl pl-7'>COURSES</h4>
        //             <h4 className='text-customBlue text-xl pl-7'>{course.code}</h4>
        //             <label className="inline-flex items-center py-2">
        //                 <input
        //                     type="checkbox"
        //                     className="form-checkbox"
        //                     onChange={() => handleCourseSelect(course)}
        //                 />
        //                 <div className='ml-4 inline-flex flex-col'>
        //                     <span className="font-bold text-xl -mb-3">{course.name}</span>
        //                 </div>
        //             </label>

        //             <span className="text-2xl font-semibold py-6">{course.units} units</span>
        //         </div>
        //     ))}
        //     {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        //     <div className='flex justify-center pt-72 relative left-9'>
        //         <button type="submit" className="border-none bg-customBlue w-full py-5 rounded-lg text-white text-lg" onClick={handleSubmit}>
        //             Next
        //         </button>
        //     </div>
        // </div>

        <div className=''>
            <div className='flex '>
                <div className='flex flex-col space-y-5'>
                    <h4 className='font-bold text-xl px-6 '>COURSES</h4>
                    {Array.isArray(courses) && courses.map((course) => (
                        <div key={course._id} className='flex flex-col px-4 '>
                            <h4 className='text-customBlue text-xl relative left-7 top-3'>{course.code}</h4>
                            <label className="inline-flex items-center py-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    onChange={() => handleCourseSelect(course)}
                                />
                                <div className='ml-4 inline-flex flex-col'>
                                    <span className="font-bold text-xl -mb-3">{course.name}</span>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    <h4 className='font-bold text-xl '>UNITS</h4>
                    {Array.isArray(courses) && courses.map((course) => (
                        <span key={course._id} className=" text-2xl font-semibold pt-12">{course.units}</span>
                    ))}
                </div>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className='flex justify-center py-6 '>
                <button type="submit" className="border-none bg-customBlue w-80 py-5 rounded-lg text-white text-lg" onClick={handleSubmit}>
                    Next
                </button>
            </div>
        </div>


    )
}

export default Courses