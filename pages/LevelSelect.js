import { useState } from "react";


const LevelSelect = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="bg-cover bg-center bg-graduation ">
            {/* <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/20" /> */}
            {/* <Image src="/Welcome-image.svg" width={400} height={400} className="relative bottom-6 " /> */}

            {/* <label className="mb-2 font-bold text-lg " htmlFor="radio-options">
                What level are you in?
            </label> */}

            <h1 className="relative top-9 px-6 font-extrabold text-4xl">What level are you in?</h1>


            <div className="flex flex-col space-y-12 px-8 py-56 font-bold text-2xl">



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

            <div className=' flex justify-center relative bottom-20'>
                <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-xl ">
                    Next
                </button>
            </div>
        </div>
    );
};

export default LevelSelect;
