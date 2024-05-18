interface IProps {
  title: string,
  url: string,
  site?: string,
  description: string,
  className: string
}

export function Modal({ title, url, 
  site, description, className }: IProps) {
  return (
    <div className={`${className} fixed h-[100vh]  md:px-[40%] py-[35vh]  max-sm:py-[50%] bg-primary/50
      text-text top-0 right-0 left-0 z-50 `}
    >
      <div className="bg-[#0C1821] px-[40px] py-[100px] rounded-2xl flex flex-col justify-center">
        <h2 className="self-center pb-[10px] text-secondary font-mono font-bold text-[32px] " ><a href={url}>{title}</a></h2>
        <hr className="py-[10px]" />
        <div>
          {site && <p className="font-poppins text-[18px] py-[5px]"><a className="hover:text-secondary transition-colors" href={site}>Project</a> website</p>}
          <p className="font-poppins text-[18px] py-[5px]">{description}</p>
        </div>
      </div>
    </div>
  )
}