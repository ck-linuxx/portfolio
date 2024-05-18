//Icons
import gitHubImg from "../assets/github.svg"
import linkedinImg from "../assets/linkedin.svg"
import instagramImg from "../assets/instagram.svg"
import React from "../assets/icons/react.svg"
import Typescript from "../assets/icons/typescript.svg"
import Fastify from "../assets/icons/fastify.svg"
import Nodejs from "../assets/icons/nodedotjs.svg"
import Zod from "../assets/icons/zod.svg"
import Prisma from "../assets/icons/prisma.svg"
import Docker from "../assets/icons/docker.svg"
import Redis from "../assets/icons/redis.svg"
import Postgresql from "../assets/icons/postgresql.svg"
import Tailwindcss from "../assets/icons/tailwindcss.svg"
import Vite from "../assets/icons/vite.svg"
import Graphql from "../assets/icons/graphql.svg"
import Apollographql from "../assets/icons/apollographql.svg"
import Vimeo from "../assets/icons/vimeo.svg"


export const icons = {
  gitHub: {
    icon: gitHubImg,
    alt: "GitHub Profile",
    title: "GitHub",
    link: "https://github.com/ck-linuxx"
  },

  linkedin: {
    icon: linkedinImg,
    alt: "Linkedin Profile",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/clark-amorim-ferreira-b69488226/"
  },

  instagram: {
    icon: instagramImg,
    alt: "Instagram Profile",
    title: "Instagram",
    link: "https://www.instagram.com/ck_amorim/"
  },
}

export const projects = [
  {
    id: 1,
    title: "PetZen",
    url: "https://github.com/ck-linuxx/petZen",
    baseImg: "https://raw.githubusercontent.com/ck-linuxx/petZen/main/src/assets/prints/pg01.png",
    site: "https://pet-zen.vercel.app/",
    description: "A simple landing page focus on a e-commerce petshop.",
    technologies: [React, Typescript],
  },

  {
    id: 2,
    title: "Dreams",
    url: "https://github.com/ck-linuxx/dreams",
    description: "An api created for a finance management.",
    technologies: [Typescript, Fastify, Nodejs, Prisma, Zod, Docker]
  },

  {
    id: 3,
    title: "Polls",
    url: "https://github.com/ck-linuxx/polls",
    description: "An api for votes/polls",
    technologies: [Docker, Typescript, Redis, Postgresql, Prisma, Nodejs]
  },

  {
    id: 4,
    title: "HookBank",
    url: "https://github.com/ck-linuxx/bank_modern_app?tab=readme-ov-file",
    description: "A simple page modern bank app",
    site: "https://hookbank-six.vercel.app/",
    technologies: [React, Tailwindcss, Vite]
  },

  {
    id: 5,
    title: "IgniteLabs",
    url: "https://github.com/ck-linuxx/Ignite-Labs-2",
    description: "A course platform",
    site: "https://ignite-labs-2.vercel.app/",
    technologies: [React, Typescript, Tailwindcss, Graphql, Apollographql, Vimeo]
  },
]