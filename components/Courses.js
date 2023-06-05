import React from 'react'

const Courses = () => {
    return (
        <div className='flex space-x-5 justify-center'>

            {/* The course div */}
            <div>
                <h4 className=' font-bold text-xl pl-7'>COURSES</h4>

                <label className="inline-flex items-center py-2">
                    <input
                        type="radio"
                        className="form-radio "
                        name="radio-options"
                        value="100"
                    />
                    <div className=' ml-4 inline-flex flex-col'>

                        <span className=" text-customBlue text-xl -mb-3">CSC 221</span>
                        <span className="text-xl font-semibold mt-1">Computer Programming</span>

                    </div>
                </label>

            </div>
            {/* END COURSE div */}



            {/* The UNIT div */}

            <div className='inline-flex flex-col items-center'>
                <h4 className=' font-bold text-xl'>UNITS</h4>
                <span className='text-2xl font-semibold py-5 '>3</span>
            </div>


            {/* END UNIT div */}










            {/* <span>3</span> */}
        </div>
    )
}

export default Courses