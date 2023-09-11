import React from "react";
import { Kittens } from "../../App";
//import Image from 'next/image'
//import Kittens from "./img"
interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }

export const Image: React.FC<ImageProps>  = ({src,alt,width,height})=>{

    return(
        <img src ={src} alt={alt} width={width} height={height} ></img>
    )
} 
//'/src/img/Kittens.jpg'} alt = 'Kittens