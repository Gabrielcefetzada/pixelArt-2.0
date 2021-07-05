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
    <div className="background">
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
            <a href="https://github.com/Gabrielcefetzada/">
              <AiFillGithub className="sm" />
            </a>
            <a href="https://twitter.com/gabreuu_12">
              <IoLogoTwitter className="sm" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5531995409722">
              <SiWhatsapp className="sm" />
            </a>
          </div>
        </div>
        <div className="about-container-text">
          <h1>Pixelizados</h1>
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
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p>ﾠ</p>
    </div>
  );
};
