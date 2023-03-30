import { useState } from "react";


const LevelSelect = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="custom-img flex flex-col bg-center bg-cover">

            {/* <label className="mb-2 font-bold text-lg " htmlFor="radio-options">
                What level are you in?
            </label> */}
            <h1 className="relative w-56 top-5 px-6">What level are you in?</h1>

            <div className="flex flex-col space-y-12 px-6 py-48 font-bold text-xl">
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

            </div>

            <div className=' relative flex justify-center bottom-16 '>
                <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                    Next
                </button>
            </div>
        </div>
    );
};

export default LevelSelect;
