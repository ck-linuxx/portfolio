import { IconBaseProps } from "react-icons"

interface IProps {
  alt: string
  icon: IconBaseProps
}

export function Technologie({icon, alt}: IProps) {
  return (
    <li className="">
      <img src={icon} alt={alt} />
    </li>
  )
}