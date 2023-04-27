import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import imgTypeOrm from "./public/static/img/stack/typeorm.svg"
import { FaVuejs } from "react-icons/fa";
import { SiTypescript, SiPython, SiChakraui, SiExpress, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb"
import { DiDjango } from "react-icons/di"
import { FaDocker } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
    {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "Chakra UI",
    img: SiChakraui
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Next.js",
    img: TbBrandNextjs
  },
  { title: "TypeScript", 
    img: SiTypescript 
  },
  {
    title: "Node JS",
    img: imgNode
  },
  {
    title: "Express JS",
    img: SiExpress, 
  },

  {
    title: "PostgreSQL",
    img: SiPostgresql
  },
  {
    title: "Python",
    img: SiPython
  },
  {
    title: "Django",
    img: DiDjango
  }
];
