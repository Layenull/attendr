import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
import { CiUser } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi"
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [matricNo, setMatricNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();


    const handleSignUp = (e) => {
        e.preventDefault();

        // Perform form validation
        if (!userName || !email || !matricNo || !password) {
            setError('Please fill in all the fields.');
            return;
        }

        // Clear any previous error message
        setError('');

        // Navigate to the next page
        router.push('/FacultySelect');
    };



    return (
        <div className=" overflow-hidden">
            <div>
                <Image src="/Welcome-image.svg" width={400} height={400} className="relative bottom-10 " alt='signup' />
            </div>


            <div className='flex flex-col relative  left-4 '>
                <h1 className='relative bottom-24 font-extrabold text-4xl '>Sign up </h1>


                <form onSubmit={handleSignUp}>
                    <div className='flex flex-col relative bottom-24 space-y-8 '>

                        <div className="">
                            <label htmlFor="username" className="sr-only">
                                Email
                            </label>
                            <div className=" flex items-center">
                                <div className="">
                                    <CiUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>

                                <input
                                    type="text"
                                    name="Username"
                                    id="username"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="block pl-10 sm:text-sm border-none py-2 w-auto "
                                    placeholder="Username"
                                    required
                                />
                            </div>
                        </div>


                        {/* email form field */}
                        <div className="">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <div className="flex items-center">
                                <div className="">
                                    <CiMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block pl-10 sm:text-sm border-none py-2 w-auto"
                                    placeholder="Email address"
                                    required
                                />
                            </div>
                        </div>

                        {/* matricnumber form field */}
                        <div className="">
                            <label htmlFor="matric-no" className="sr-only">
                                Matric No
                            </label>
                            <div className="flex items-center">
                                <div className=" ">
                                    <HiOutlineAcademicCap className=" h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="matric-no"
                                    name="matric-no"
                                    id="matric-no"
                                    value={matricNo}
                                    onChange={(e) => setMatricNo(e.target.value)}
                                    className="block pl-10 sm:text-sm border-none  py-2 w-auto"
                                    placeholder="matric no"
                                    required
                                />
                            </div>
                        </div>


                        {/* password form field */}
                        <div className="">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className=" flex items-center">
                                <div className="">
                                    <HiOutlineLockClosed className=" h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" block pl-10 sm:text-sm border-none py-2 w-auto "
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>

                    </div>

                    {error && (
                        <div className=" relative top-8 text-red-500">
                            {error}
                        </div>
                    )}


                    <div className='flex flex-col text-sm relative bottom-10 '>
                        <p>By signing up you, agree to our <span className='text-customBlue' >Terms & Conditions</span> and <span className='text-customBlue'>Privacy policy</span>
                        </p>

                        <div className='relative bottom-4'>
                            <span className='flex justify-center relative top-3'><p>or</p></span>


                        </div>

                        <p className='flex justify-center'>Already have an account?
                            <Link href="/loginForm"> <span className='text-customBlue'> Log in</span></Link>
                        </p>



                    </div>


                    <div className='relative bottom-3 left-7'>
                        <div>

                            <button type="submit" className=" border-none bg-customBlue w-4/5 py-5 rounded-lg text-white text-lg ">
                                Continue
                            </button>

                        </div>
                    </div>

                </form>


            </div>




        </div>




    );
}
