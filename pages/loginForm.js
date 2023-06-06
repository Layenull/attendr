import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
import { useRouter } from 'next/router';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import customButton from '@/components/customButton';



// import { HiOutlineLockClosed, MailIcon } from '@heroicons/react/solid';

export default function LoginForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Perform form validation
        if (!userName || !password) {
            setError('Please fill in all the fields.');
            return;
        }

        // Clear any previous error message
        setError('');

        // try {
        //     const res = await fetch('/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ email, password })
        //     });

        //     if (res.ok) {
        //         // Redirect to dashboard
        //         window.location.href = '/dashboard';
        //     } else {
        //         // Display error message
        //         setError('Invalid email or password');
        //     }
        // } catch (err) {
        //     console.error(err);
        //     setError('Something went wrong');
        // }

        router.push('/AttendanceTracker');
    }

    return (
        <div className="overflow-hidden">
            <div>
                <Image src="/login-image.jpg" width={400} height={400} className="relative bottom-10 " alt='signup' />
            </div>



            {/* <div className='relative flex flex-col space-y-9 bottom-8 px-6 '>
                <h1 className='w-3 font-extrabold text-4xl'>Welcome,Login Now </h1> */}

            <div className='flex flex-col relative left-4  '>
                <h1 className='relative bottom-20 w-3 font-extrabold text-4xl'>Welcome,Login Now </h1>




                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="sr-only">
                            Email
                        </label>
                        <div className="relative ">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiMail className=" relative right-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="username"
                                name="username"
                                id="username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="block pl-10 sm:text-sm border-none"
                                placeholder="username"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <div className="relative top-8 ">
                            <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <HiOutlineLockClosed className=" relative right-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="focus:ring-indigo-500 focus:border-indigo-500 block pl-10 sm:text-sm border-none "
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                    {error && (
                        <div className=" relative top-8 text-red-500">
                            {error}
                        </div>
                    )}
                    <div className=' relative flex left-7 pt-40'>
                        {/* <div className=' relative flex justify-center top-28  py-20'> */}

                        <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
