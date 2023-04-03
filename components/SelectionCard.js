import React from 'react'
import Image from 'next/image'

const SelectionCard = () => {
    return (
        // <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-xl '>
        //     <Image src="/Welcome-image.svg" width={200} height={200} className="relative bottom-6 " />
        //     <p>Basic Medical and Applied Sciences</p>


        // </div>

        <div className=" rounded-lg border w-11/12 h-60 overflow-hidden">
            {/* <div className="object-cover w-full rounded-t-lg h-20 ">
                <Image src="/Medical research-rafiki.png" alt="Medical Sciences" fill />
            </div> */}
            <div className="p-6">
                <p className="text-2xl  mb-4">Basic Medical and Applied Sciences</p>

            </div>
        </div>


    )
}

export default SelectionCard