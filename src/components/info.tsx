import { Button } from "./button";
import { icons } from "../constants";

export function Info() {
  return (
    <div className="flex flex-col text-text max-sm:mt-[150px]  md:justify-center items-center h-[100vh] ">
      <p className="font-poppins max-sm:text-[16px] text-[18px]">Hello 👋🏻, I’am Clark . I’m a</p>
      <h2 className="max-sm:text-center font-poppins font-bold max-sm:text-[38px] text-[48px] mt-[24px]">Software Engineer Based in Brazil</h2>
      <p className="max-sm:text-center font-poppins max-sm:text-[16px] text-[18px] mt-[24px]">Enjoy the journey in realizing your desired dreams</p>

      <div className="mt-[30px] flex items-center gap-[15px]">
        <Button title={icons.gitHub.title} icon={icons.gitHub.icon} altIcon={icons.gitHub.alt} link={icons.gitHub.link} />
        <Button title={icons.linkedin.title} icon={icons.linkedin.icon} altIcon={icons.linkedin.alt} link={icons.linkedin.link} />
        <Button title={icons.instagram.title} icon={icons.instagram.icon} altIcon={icons.instagram.alt} link={icons.instagram.link} />
      </div>

    </div>
  )
}