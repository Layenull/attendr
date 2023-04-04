import React from 'react'
import Link from 'next/link'

const customButton = ({ name }) => {
    return (
        <div className='flex justify-center'>

            <div>
                <Link href="/LevelSelect" passHref>

                    <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                        {name}
                    </button>


                </Link>

            </div>


        </div>
    )
}

export default customButton