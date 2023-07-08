import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';

const Courses = ({ programme, level, semester }) => {
    const [courses, setCourses] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const { user, setUser } = useContext(userContext);
    const router = useRouter();

    useEffect(() => {
        fetch(`http://localhost:3009/api/v1/courses?programme=${programme}&level=${level}&semester=${semester}`)
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error:', error));
    }, [programme, level, semester]);

    const handleOptionSelect = (value) => {
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        } else {
            setSelectedOptions([...selectedOptions, value]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOptions.length >= 1) {
            setUser({
                ...user,
                courses: selectedOptions,
            });

            fetch('http://localhost:3009/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...user,
                    courses: selectedOptions,
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
        } else {
            setErrorMessage('Please select at least 1 course');
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    };




    return (
        <div className='flex space-x-5 justify-center'>
            {courses.map((course) => (
                <div key={course._id}>
                    <h4 className='font-bold text-xl pl-7'>{course.code}</h4>
                    <label className="inline-flex items-center py-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={() => handleCourseSelect(course)}
                        />
                        <div className='ml-4 inline-flex flex-col'>
                            <span className="text-customBlue text-xl -mb-3">{course.code}</span>
                            <span className="text-xl font-bold mt-1">{course.units} units</span>
                        </div>
                    </label>
                </div>
            ))}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className='flex justify-center pt-72 relative left-9'>
                <button type="submit" className="border-none bg-customBlue w-full py-5 rounded-lg text-white text-lg" onClick={handleSubmit}>
                    Next
                </button>
            </div>
        </div>

    )
}

export default Courses