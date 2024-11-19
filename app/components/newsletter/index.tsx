import { sfProSemibold } from "@/app/fonts"
import { Button } from "../shared/Button"

export const Newsletter = () => {
    return (
        <section className="bg-dark-gradient py-[150px]">
            <div className="container mx-auto">
                <h3 className={`${sfProSemibold} text-[55px] leading-[70px] text-center text-white max-w-[18ch] mx-auto mb-[75px]`}>Start Accepting Payments in Just Minutes</h3>
                <div className="flex bg-[#3C4146] rounded-[20px] h-20 w-full max-w-[600px] mx-auto p-5 pl-[30px] gap-2.5">
                    <input type="text" name="email" id="email" className="outline-none border-none bg-transparent w-full text-white text-xl placeholder:text-white" placeholder="Your work email" />
                    <Button variant="primary" type="submit" className="!h-10 text-white flex-shrink-0">Get Started</Button>
                </div>
            </div>
        </section>
    )
}