interface IProps {
  title: string
  icon: string
  altIcon: string
  link: string
}

export function Button({title, icon, altIcon, link}: IProps) {
  return (
    <button className="flex gap-[8px] justify-center items-center 
      max-w-[179px] max-h-[58px] py-[16px] px-[24px] border border-solid 
      rounded-[10px] border-[#18181B]
    "
    
    >
      <img src={icon} alt={altIcon} className="w-[30px] h-[30px]" />
      <a href={link}>{title}</a>
    </button>
  )
}