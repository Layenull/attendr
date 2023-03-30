import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
import { CiUser } from "react-icons/ci"
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export default function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, email, password })
            });

            if (res.ok) {
                // Redirect to dashboard
                window.location.href = '/dashboard';
            } else {
                // Display error message
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong');
        }
    }

    return (
        <div className="">
            <div>
                <Image src="/Welcome-image.svg" width={400} height={400} className="relative bottom-6 " />
            </div>



            <div className='relative flex flex-col space-y-9 bottom-16 px-6 '>
                <span><h1>Sign up </h1></span>




                <form onSubmit={handleLogin}>

                    <div className="mb-4">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="relative -top-8 ">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiUser className=" relative right-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                name="Username"
                                id="username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="block pl-10 sm:text-sm border-none"
                                placeholder="Username"
                                required
                            />
                        </div>
                    </div>


                    {/* email form field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="relative ">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiMail className=" relative right-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block pl-10 sm:text-sm border-none"
                                placeholder="Email address"
                                required
                            />
                        </div>
                    </div>

                    {/* password form field */}
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
                        <div className="mb-4 text-red-500">
                            {error}
                        </div>
                    )}


                    <div className='flex flex-col text-sm py-8'>
                        <p>By signing up you, agree to our <span>Terms & Conditions</span> and <span>Privacy policy</span>
                        </p>

                        <div className='relative bottom-4'>
                            <span className='flex justify-center'><p>or</p></span>

                            <p className='flex justify-center'>Already have an account?<span> Log in</span></p>

                        </div>




                    </div>


                    <div className='flex justify-center'>

                        <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>








    );
}
