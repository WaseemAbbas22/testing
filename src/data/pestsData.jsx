// src/data/pestsData.js

import AntImage from "../assets/Pests/ant.png";
import CockroachImage from "../assets/Pests/cockroch.png";
import RodentImage from "../assets/Pests/rodent.png";
import RedBugImage from "../assets/Pests/redbug.png";
import FlyImage from "../assets/Pests/flies.png";
import MosquitoImage from "../assets/Pests/mosquitoes.png";
import SpiderImage from "../assets/Pests/spider.png";
import TermiteImage from "../assets/Pests/termites.png";
import VenomousImg from "../assets/Pests/venomous.png"
import BirdImg from "../assets/Pests/bird.png"
import MosquitoeIMG from "../assets/Pests/mosquitoes.png"
import WaspImg from "../assets/Pests/wasp.png"
import lizardImg from "../assets/Pests/lizard.png"
import TickImg from "../assets/Pests/tick.png"

export const pests = [
  {
    id: 1,
    name: "ANTS",
    desc: "Treatment",
    more: "Ant pest control successfully destroys hidden nests, gets rid of active colonies, and makes  sure ants don't come back to infest your house or place of business.",
    image: AntImage,
    link: "/ant" // or full URL
  },
  {
    id: 2,
    name: "COCKROACHES",
    desc: "Treatment",
    more: "Cockroach killer services properly target concealed locations, remove infestations quickly, and stop cockroach growth in the future.",
    image: CockroachImage,
    link: "/cockroch" // or full URL
  },
  {
    id: 3,
    name: "RED BUGS",
    desc: "Treatment",
    more: "Bed bug treatment safely targets infected bedding, furniture and room corners to get rid of eggs, tiny insects and adults.",
    image: RedBugImage,
    link: "/redbug" // or full URL
  },
  {
    id: 4,
    name: "RODENTS",
    desc: "Treatment",
    more: "Rodent control is for the purpose of keeping rats from returning to properties. Our experts remove breeding places and block all points of entry.",
    image: RodentImage,
    link: "/rodents" // or full URL
  },
  {
    id: 5,
    name: "FLIES",
    desc: "Treatment",
    more: "Fly control services help to keep your living space safe, clean, and fly-free by removing  places of breeding and sanitizing important locations.",
    image: FlyImage,
    link: "/flies" // or full URL
  },
  {
    id: 6,
    name: "MOSQUITOES",
    desc: "Treatment",
    more: "Mosquito fumigation protects your area from future mosquito infestations by destroying  adult mosquitoes and focusing on areas where they breed.",
    image: MosquitoImage,
    link: "/mosquito" // or full URL
  },
  {
    id: 7,
    name: "SPIDERS",
    desc: "Treatment",
    more: "Spider control services clean cobwebs, sanitize contaminated areas and maintain a safe and spider-free atmosphere all year long.",
    image: SpiderImage,
    link: "/spider" // or full URL
  },
  {
    id: 8,
    name: "TERMITES",
    desc: "Treatment",
    more: "Anti-termite treatments shield your foundation, remove underlying colonies, and stop homes and businesses from suffering structural damage.",
    image: TermiteImage,
    link: "/termites" // or full URL
  },
  {
    id: 9,
    name: "VENOMOUS",
    desc: "Treatment",
    more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services...",
    image: VenomousImg,
    link: "/venomous" // or full URL
  },
   {
    id: 10,
    name: "BIRDS",
    desc: "Treatment",
    more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services...",
    image: BirdImg,
    link: "/bird" // or full URL
  },
  {
    id: 11,
    name: "LIZARDS",
    desc: "Treatment",
    more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services...",
    image: lizardImg,
    link: "/lizard" // or full URL
  },{
    id: 12,
    name: "TICKS",
    desc: "Treatment",
    more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services...",
    image: TickImg,
    link: "/tick" // or full URL
  },{
    id: 13,
    name: "WASPS",
    desc: "Treatment",
    more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services...",
    image: WaspImg,
    link: "/wasp" // or full URL
  },
  {
    id: 14,
    name: "MOSQUITOES",
    desc: "Treatment",
    more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services...",
    image: MosquitoeIMG,
    link: "/mosquito" // or full URL
  },

  // ...other pests
];
