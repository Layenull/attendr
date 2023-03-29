import Image from "next/image"
import ButtonOne from "@/components/ButtonOne"

const Signup = () => {
    return (
        <div>
            <div className="">
                <Image src="/Welcome-image.svg" width={600} height={500} className="" />
            </div>

            <div className="px-12">
                <h1 className=" text-7xl ">Sign up</h1>
                <form action="/send-data-here" method="post">
                    <label for="roll">Roll Number</label>
                    <input
                        type="text"
                        id="roll"
                        name="roll"
                        required
                        minlength="10"
                        maxlength="20"
                    />
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <button type="submit">Submit</button>
                </form>



                {/* <ButtonOne /> */}

            </div>
        </div>
    )
}

export default Signup