import { Button } from "./button";
import { icons } from "../constants";

export function FinalScreen() {
  return (
    <div className="h-[100vh] flex flex-col text-text justify-center items-center mt-[240px]">
      <h2 className="font-poppins font-bold text-[48px] mt-[24px]">Get in touch!</h2>
      <p className="max-sm:text-center font-poppins text-[18px] mt-[24px]">Let’s connect with me and build our creations!</p>

      <div className="mt-[30px] flex items-center gap-[15px]">
        <Button title={icons.gitHub.title} icon={icons.gitHub.icon} altIcon={icons.gitHub.alt} link={icons.gitHub.link} />
        <Button title={icons.linkedin.title} icon={icons.linkedin.icon} altIcon={icons.linkedin.alt} link={icons.linkedin.link} />
        <Button title={icons.instagram.title} icon={icons.instagram.icon} altIcon={icons.instagram.alt} link={icons.instagram.link} />
      </div>
      <p className=" items-end text-text font-poppins text-[18px] mt-[24px]">Thank you for coming here!</p>
    </div>
  )
}