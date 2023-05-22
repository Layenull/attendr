import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const SelectLevel = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='bg-graduation bg-contain bg-no-repeat w-full h-full bg center'>
            <h1 className='relative top-9 px-6 font-extrabold text-4xl'>
                what level are you in?
            </h1>


            {/* Radio-input form */}

            <div className="flex flex-col relative top-64 space-y-12 px-8 font-bold text-2xl">



                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio"
                        name="radio-options"
                        value="100"
                        checked={selectedOption === "100"}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">100</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio"
                        name="radio-options"
                        value="200"
                        checked={selectedOption === "200"}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">200</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio"
                        name="radio-options"
                        value="300"
                        checked={selectedOption === "300"}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">300</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio"
                        name="radio-options"
                        value="400"
                        checked={selectedOption === "400"}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">400</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio"
                        name="radio-options"
                        value="500"
                        checked={selectedOption === "500"}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">500</span>
                </label>

                {/* Button ////////////////////////////// */}

                <div className=' relative left-11 top-16 '>
                    <div>
                        <Link href="/SemesterSelect">
                            <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                                Next
                            </button>
                        </Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SelectLevel