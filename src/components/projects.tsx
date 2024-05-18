import { motion } from "framer-motion"

import ProjectImg from "../assets/base.jpg"
import { Modal } from "./modal"
import { useState } from "react"

 interface IProps {
  title: string
  baseImg?: string
  url: string,
  site?: string,
  description: string,
 }

export function Projects(
  {baseImg, title, 
    url, 
    site,
    description}: IProps
) {

  const [handleModal, setHandleModal] = useState(false)

  return (
    <>
      <motion.li className="rounded-[30px]  min-md:border-secondary 
        min-md:hover:border-[5px] transition-all" 
        onClick={() => setHandleModal(!handleModal)}
      >
        <img className="w-[493px] h-[315px]  rounded-[30px]  
          min-md:border-secondary min-md:hover:border-[5px] 
          transition-all hover:animate-pulse" 
          src={!baseImg ? ProjectImg : baseImg}
          alt={title} 
        />

        <Modal 
          className={` ${handleModal ? "" : "invisible"}`} 
          title={title} 
          url={url} 
          description={description} 
          site={site}
        />

      </motion.li>
    </>
  )
}