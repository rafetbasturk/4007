import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

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

export const social = [
  {
    id: 1,
    url: 'https://z-p15.www.instagram.com/teknobilim20226/',
    icon: <FaInstagram />,
    name: "Instagram Icon"
  },
  {
    id: 2,
    url: 'https://www.facebook.com/profile.php?id=100082926416675',
    icon: <FaFacebook />,
    name: "Facebook Icon"
  },
  {
    id: 3,
    url: 'https://twitter.com/2022Teknobilim',
    icon: <FaTwitter />,
    name: "Twitter Icon"
  },
];

// export const references = [
//   { id: 1, url: a01, alt: "reference institution's logo" },
// ]