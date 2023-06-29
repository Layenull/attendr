import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TrackCard = ({ progressValue = 66 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulating the delay from the backend
        const delay = setTimeout(() => {
            setProgress(progressValue);
        }, 1000);

        return () => clearTimeout(delay);
    }, [progressValue]);
    return (
        <div className=' bg-slate-100 rounded-2xl w-11/12 h-72'>
            <div className="p-6">
                <p className="text-2xl text-customBlue  ">CSC 221</p>
                <p className='text-xl font-semibold'>Computer Programming</p>

                <div className='flex'>
                    <div className="flex items-center justify-center w-44 pt-3">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}%`}
                            strokeWidth={10}
                            styles={buildStyles({
                                textSize: '16px',
                                pathColor: progress < 60 ? 'red' : progress < 70 ? 'yellow' : 'green',
                                trailColor: 'gray-300',
                                textColor: 'gray-700',
                            })}
                        />


                    </div>
                    <p className='text-2xl pt-20 pl-14 '>10/13</p>
                </div>

            </div>


        </div>
    )

};



export default TrackCard