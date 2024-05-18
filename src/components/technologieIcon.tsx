import { DetailedHTMLProps, ImgHTMLAttributes } from "react"


interface IProps {
  icon: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | any
}

export function TechnologieIcon({icon}: IProps) {

  return (
    <div className="">
      <img src={icon} alt="" className="text-white h-[60px] w-[60px]" />
    </div>
  )
}