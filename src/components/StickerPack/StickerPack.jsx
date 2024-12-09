import "./StickerPack.scss";
import CardBoard from "../CardBoard/CardBoard";
import Sticker from "../Sticker/Sticker";

import css from "../../assets/css.png";
import docker from "../../assets/docker.png";
import express from "../../assets/express.png";
import figma from "../../assets/figma.png";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import jenkins from "../../assets/jenkins.png";
import JS from "../../assets/JS.png";
import kotlin from "../../assets/kotlin.png";
import mysql from "../../assets/mysql.png";
import nest from "../../assets/nest.png";
import nextjs from "../../assets/nextjs.png";
import nodejs from "../../assets/nodejs.png";
import python from "../../assets/python.png";
import reactImg from "../../assets/react.png";
import sass from "../../assets/sass.png";
import springboot from "../../assets/springboot.png";
import storybook from "../../assets/storybook.png";
import swift from "../../assets/swift.png";
import tailwind from "../../assets/tailwind.png";
import TS from "../../assets/TS.png";
import vue from "../../assets/vue.png";

const stickers = [
  { src: reactImg, alt: "react", x: 30, y: 28 },
  { src: tailwind, alt: "tailwind", x: 30, y: 40 },
  { src: github, alt: "github", x: 2, y: 10 },
  { src: mysql, alt: "mysql", x: 30, y: 15 },

  { src: sass, alt: "sass", x: 28, y: 33 },
  { src: JS, alt: "JS", x: 40, y: 22 },
  { src: css, alt: "css", x: 60, y: 2 },
  { src: nest, alt: "nest", x: 35, y: 30 },

  { src: figma, alt: "figma", x: 20, y: 35 },
  { src: TS, alt: "TypeScript", x: 3, y: 20 },
  { src: python, alt: "python", x: 50, y: 10 },
  { src: springboot, alt: "springboot", x: 40, y: 30 },

  { src: docker, alt: "docker", x: 40, y: 3 },
  { src: swift, alt: "swift", x: 11, y: 50 },
  { src: nextjs, alt: "nextjs", x: 30, y: 60 },
  { src: html, alt: "html", x: 2, y: 30 },

  { src: storybook, alt: "storybook", x: 50, y: 80 },
  { src: express, alt: "express", x: 20, y: 25 },
  { src: nodejs, alt: "nodejs", x: 10, y: 55 },
  { src: vue, alt: "vue", x: 2, y: 45 },

  { src: kotlin, alt: "kotlin", x: 200, y: 10 },
  { src: jenkins, alt: "jenkins", x: 200, y: 50 },
];

export default function StickerPack() {
  return (
    <div className="pack-container">
      <CardBoard />
      <div className="sticker-container">
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            src={sticker.src}
            alt={sticker.alt}
            x={sticker.x}
            y={sticker.y}
          />
        ))}
      </div>
    </div>
  );
}
