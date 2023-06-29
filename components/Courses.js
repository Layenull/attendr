import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';

const Courses = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const router = useRouter();

    // Function to handle radio option selection
    const handleOptionSelect = (value) => {
        if (selectedOptions.includes(value)) {
            // If the option is already selected, remove it from the selected options
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        } else {
            // If the option is not selected, add it to the selected options
            setSelectedOptions([...selectedOptions, value]);
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOptions.length >= 1) {
            // If at least 5 options are selected, navigate to the next page using Next Router
            // Replace the '/next-page' with your desired route
            router.push('/AttendanceTracker');
        } else {
            // If less than 5 options are selected, show an error or perform any other desired action
            console.log('Please select at least 5 options');
        }
    };


    return (
        <div className='flex space-x-5 justify-center'>
            {/* The course div */}
            <div>
                <h4 className='font-bold text-xl pl-7'>COURSES</h4>

                <label className="inline-flex items-center py-2">
                    <input
                        type="checkbox" // Change the input type to checkbox
                        className="form-checkbox"
                        checked={selectedOptions.includes("100")} // Check if the option is selected
                        onChange={() => handleOptionSelect("100")} // Call the handleOptionSelect function on change
                    />
                    <div className='ml-4 inline-flex flex-col'>
                        <span className=" text-customBlue text-xl -mb-3">CSC 221</span>
                        <span className="text-xl font-bold mt-1">Computer Programming</span>
                    </div>
                </label>



                <div className='flex justify-center pt-72 relative left-9'>
                    <button type="submit" className="border-none bg-customBlue w-full py-5 rounded-lg text-white text-lg" onClick={handleSubmit}>
                        Next
                    </button>
                </div>
            </div>
            {/* END COURSE div */}

            {/* The UNIT div */}
            <div className='inline-flex flex-col items-center'>
                <h4 className='font-bold text-xl'>UNITS</h4>
                <span className='text-2xl font-semibold py-6'>3</span>
            </div>
            {/* END UNIT div */}
        </div>
        // <div className='flex space-x-5 justify-center'>

        //     {/* The course div */}
        //     <div>
        //         <h4 className=' font-bold text-xl pl-7'>COURSES</h4>

        //         <label className="inline-flex items-center py-2">
        //             <input
        //                 type="radio"
        //                 className="form-radio "
        //                 name="radio-options"
        //                 value="100"
        //             />
        //             <div className=' ml-4 inline-flex flex-col'>

        //                 <span className=" text-slate-100 text-xl -mb-3">CSC 221</span>
        //                 <span className="text-xl font-bold mt-1">Computer Programming</span>

        //             </div>
        //         </label>


        //         <div className='flex justify-center pt-72 	relative left-9'>

        //             <button type="submit" className=" border-none bg-customBlue w-full py-5 rounded-lg text-white text-lg ">
        //                 Next
        //             </button>

        //         </div>

        //     </div>
        //     {/* END COURSE div */}



        //     {/* The UNIT div */}

        //     <div className='inline-flex flex-col items-center'>
        //         <h4 className=' font-bold text-xl'>UNITS</h4>
        //         <span className='text-2xl font-semibold py-6 '>3</span>
        //     </div>


        //     {/* END UNIT div */}










        //     {/* <span>3</span> */}
        // </div>
    )
}

export default Courses