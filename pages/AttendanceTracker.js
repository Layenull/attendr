import React from 'react'
import Searchbar from '@/components/Searchbar'
import TrackCard from '@/components/TrackCard'

const AttendanceTracker = () => {
    return (
        <div className='bg-gradblue bg-cover bg-center bg-no-repeat h-screen flex justify-center pt-5'>
            {/* <Searchbar /> */}

            <TrackCard />
        </div>
    )
}

export default AttendanceTracker