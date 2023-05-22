import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
import { CiUser } from "react-icons/ci"
import customButton from '@/components/customButton';
import Link from 'next/link';


export default function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validate the input fields
        if (!userName || !email || !password) {
            setError('Please fill in all the fields.');
            return;
        }

        // Save the user data to your preferred state management solution
        const userData = {
            userName,
            email,
            password
        };

        // Reset the form
        setUserName('');
        setEmail('');
        setPassword('');
        setError('');



        // try {
        //     const res = await fetch('/api/login', {
        //          method: 'POST',
        //          headers: {
        //              'Content-Type': 'application/json'
        //          },

        //             body: JSON.stringify({ userName, email, password })
        //         });

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
    }

    return (
        <div className="">
            <div>
                <Image src="/Welcome-image.svg" width={400} height={400} className="relative bottom-6 " />
            </div>



            <div className='relative flex flex-col space-y-9 bottom-12  px-6 leading-10'>
                <h1 className='font-extrabold text-4xl pb-2'>Sign up </h1>






                <form onSubmit={handleSignUp}>

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
                        <div className=" relative top-8 text-red-500">
                            {error}
                        </div>
                    )}


                    <div className='flex flex-col text-sm pt-20 pb-8'>
                        <p>By signing up you, agree to our <span className='text-customBlue' >Terms & Conditions</span> and <span className='text-customBlue'>Privacy policy</span>
                        </p>

                        <div className='relative bottom-4'>
                            <span className='flex justify-center'><p>or</p></span>


                        </div>

                        <p className='flex justify-center'>Already have an account?
                            <Link href="/loginForm"> <span className='text-customBlue'> Log in</span></Link>
                        </p>



                    </div>


                    <div className='relative left-11'>
                        <div>
                            <Link href="/FacultySelect">
                                <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                                    Continue
                                </button>
                            </Link>
                            {/* <Link href="/LevelSelect" passHref>

                            </Link> */}
                        </div>
                    </div>





                    {/* <customButton name='Continue' /> */}








                </form>
            </div>
        </div>








    );
}
