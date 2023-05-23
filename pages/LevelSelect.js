import React from "react";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"


const LevelSelect = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="bg-cover bg-center h-screen bg-gradblue ">
            <div className='overflow-hidden flex flex-col justify-evenly relative top-10'>
                <Link href="/ProgramSelect">
                    <HiOutlineArrowNarrowLeft className=' relative left-6 bottom-5 text-5xl' />
                </Link>


                <h1 className="font-extrabold text-3xl relative w-56 bottom-4 px-6 text">What level are you in?</h1>

            </div>

            <div className="flex flex-col space-y-14 px-12 py-20 font-bold text-2xl">

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
                {/* //////////////////////////// */}

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
                {/* /////////////////////// */}

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
                {/* ///////////////// */}

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
                {/* ////////////////////// */}

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

            </div>

            <div>
                <Link className="flex justify-center py-20" href="/SemesterSelect">
                    <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LevelSelect;
