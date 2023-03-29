import Image from "next/image"
import ButtonOne from "@/components/ButtonOne"
import FormInput from "@/components/FormInput"

const Signup = () => {
    return (
        <div>
            <div>
                <Image src="/2678153.jpg" width={300} height={300} className />
            </div>

            <div className="py-10">
                <h1>Sign up</h1>


                <div className="">
                    <h2>Don't have an account</h2>
                    <span>Sign up here</span>
                    <form>
                        <FormInput
                            label="User Name"
                            type="text"
                            required
                            // onChange={handelChange}
                            name="userName"
                        // value={userName}
                        />

                        <FormInput
                            label="Email"
                            type="email"
                            required
                            // onChange={handelChange}
                            name="email"
                        // value={email}
                        />

                        <FormInput
                            label="Password"
                            type="password"
                            required
                            // onChange={handelChange}
                            name="password"
                        // value={password}
                        />

                        <FormInput
                            label="Confirm Password"
                            type="password"
                            required
                            // onChange={handelChange}
                            name="confirmPassword"
                        // value={confirmPassword}
                        />

                        {/* <Button type="submit">Sign up</Button> */}
                        <ButtonOne />
                    </form>
                </div>
                {/* <ButtonOne /> */}

            </div>
        </div>
    )
}

export default Signup