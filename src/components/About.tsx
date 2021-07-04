import React from "react";
import "../styles/About.css";
import me from "../images/me.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { SiWhatsapp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const About = () => {
  return (
    <div>
      <h1>Sobre o projeto e o autor</h1>
      <div className="container-both">
        <div className="about-me">
          <img className="me" src={me} />
          <p className="location">
            <HiOutlineLocationMarker />
            Belo Horizonte
          </p>
          <div className="about-text">
            <p className="text-1">
              <b>Olá!</b>
            </p>
            <p className="text-2">
              Sou Gabriel, tenho 18 anos e estudo desenvolvimento Web e redes de
              computadores no CEFET-MG.{" "}
            </p>
          </div>
          <div className="social-medias">
            <AiFillGithub id="sm1" />
            <IoLogoTwitter id="sm2" />
            <SiWhatsapp id="sm3" />
          </div>
        </div>
        <div className="about-container-text">
          <h1>PixelArt 2.0</h1>
          <p>
            Este pequeno projeto Front-end é uma evolução de uma antiga versão
            que ficou estagnada por alguns meses por falta de conhecimento. Com
            necessidade constante em aprender e desenvolver, esta plataforma de
            desenho foi desenvolvida dando continuidade na versão antiga.
          </p>
          <p>
            <FaReact className="react-icon" />{" "}
            <SiTypescript className="ts-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};
