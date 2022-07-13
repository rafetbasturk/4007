import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

import image from "./images/hero.jpeg"

// import a01 from "./images/ref/a01.jpg"

export const pages = [
  {
    id: 1,
    url: "/",
    text: "Ana Sayfa"
  },
  {
    id: 2,
    url: "/contact",
    text: "İletişim"
  },
]


export const pics = [
  {
    id: 1,
    img_small: image,
    title: "üretimde kalite",
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com/',
    icon: <FaInstagram />,
    name: "Instagram Icon"
  },
  {
    id: 2,
    url: 'https://www.facebook.com/',
    icon: <FaFacebook />,
    name: "Facebook Icon"
  }
];

// export const references = [
//   { id: 1, url: a01, alt: "reference institution's logo" },
// ]