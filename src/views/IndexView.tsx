import React, { useState, useEffect } from "react";
import { Tool } from "../components/Tool";
import { ToolProps } from "../components/Tool";
import "../assets/styles/Tool.css";
import "../assets/styles/Global.css";
import "../assets/styles/Colorp.css";
import "../assets/styles/PixelBox.css";

// images

import colorp from "../assets/images/color_picker.png";
import pencil from "../assets/images/lapis.png";
import borrow from "../assets/images/borracha.png";
import colorpImg from "../assets/images/selecionador-de-cores.png";
import broom from "../assets/images/broom.png";

// interfaces

interface auxArrayInterface {
  name: string;
  color1: string;
  color2: string;
}

export const IndexView = () => {
  const [colorValue, setColorValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("#000000"); // preto como cor padrão
  const [auxArray, setAuxArray] = useState<auxArrayInterface[]>([]);
  const [tools, setTools] = useState<ToolProps[]>([]);
  const [name, setName] = useState("");
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const initializeArray = () => {
      const newAuxArray = [];
      for (let i = 0; i < 1562; i++) {
        newAuxArray.push({
          name: "auxEl",
          color1: "#dddbdb",
          color2: "#ffffff",
        });
      }
      setAuxArray(newAuxArray);
      setLoading(false);
    };

    initializeArray();
  }, []);

  const arrayTools = [
    {
      key: 1,
      photo: pencil,
      tool: "pencil",
    },

    {
      key: 2,
      photo: borrow,
      tool: "rubber",
    },

    {
      key: 3,
      photo: colorpImg,
      tool: "colorP",
    },
  ];

  useEffect(() => {
    setTools(arrayTools);
  }, []);

  // Functions related about the tools

  const paintWithPencilColor1 = (indexParam: number) => {
    if (pressed) {
      let tempAuxArray = [...auxArray];
      auxArray[indexParam].color1 = inputValue;
      setAuxArray(tempAuxArray);
    }
  };

  const paintWithPencilColor2 = (indexParam: number) => {
    if (pressed) {
      let tempAuxArray = [...auxArray];
      auxArray[indexParam].color2 = inputValue;
      setAuxArray(tempAuxArray);
    }
  };

  const rubberColor1 = (indexParam: number) => {
    if (pressed) {
      let tempAuxArray = [...auxArray];
      auxArray[indexParam].color1 = "#dddbdb";
      setAuxArray(tempAuxArray);
    }
  };

  const rubberColor2 = (indexParam: number) => {
    if (pressed) {
      let tempAuxArray = [...auxArray];
      auxArray[indexParam].color2 = "#ffffff";
      setAuxArray(tempAuxArray);
    }
  };

  const pickColor = (indexParam: number) => {
    if (pressed) {
      setInputValue(auxArray[indexParam].color1);
    }
  };

  const cleanner = () => {
    for (let i = 0; i < auxArray.length; i++) {
      if (
        auxArray[i].color1 !== "#dddbdb" ||
        auxArray[i].color2 !== "#ffffff"
      ) {
        auxArray[i].color1 = "#dddbdb";
        auxArray[i].color2 = "#ffffff";
      }
    }
    let tempAuxArray = [...auxArray];
    setAuxArray(tempAuxArray);
    console.log("chamou");
  };

  return (
    <div className="background">
      {loading ? (
        <p className="white-text">Carregando...</p>
      ) : (
        <>
          <br></br> <br></br>
          <div className="container-pixel-box">
            {auxArray.map((elem, index) => (
              <>
                <div
                  className="pixel blackPixel"
                  key={index}
                  onMouseUp={() => setPressed(false)}
                  onMouseDown={() => setPressed(true)}
                  onMouseMove={() => {
                    if (name === "pencil") {
                      paintWithPencilColor1(index);
                      setColorValue(elem.color1);
                    } else if (name === "rubber") {
                      rubberColor1(index);
                    } else if (name === "colorP") {
                      pickColor(index);
                    }
                  }}
                  style={{ backgroundColor: elem.color1 }}
                ></div>
                <div
                  className="pixel greyPixel"
                  onMouseUp={() => setPressed(false)}
                  onMouseDown={() => setPressed(true)}
                  onMouseMove={() => {
                    if (name === "pencil") {
                      paintWithPencilColor2(index);
                      setColorValue(elem.color2);
                    } else if (name === "rubber") {
                      rubberColor2(index);
                    } else if (name === "colorP") {
                      pickColor(index);
                    }
                  }}
                  style={{ backgroundColor: elem.color2 }}
                ></div>
              </>
            ))}
          </div>
        </>
      )}
      <h1 className="tool-h1">Ferramentas</h1>
      <div className="container-tools">
        {tools.map((tool, index) => (
          <Tool
            onClick={() => setName(tool.tool)}
            tool={name}
            active={name === tool.tool ? true : false}
            photo={tool.photo}
            key={index}
          />
        ))}
        <Tool
          onClick={() => cleanner()}
          tool={"broom"}
          active={false}
          photo={broom}
          key={4}
        />
      </div>
      <div className="container-colorp">
        <div className="content-white">
          <img src={colorp}></img>⠀
          <input
            type="color"
            value={inputValue}
            onChange={(e) => setInputValue(() => e.target.value)}
          />
        </div>
      </div>
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p className="white-text">
        Visite o repositório deste projeto clicando {">"}{" "}
        <a href="https://github.com/Gabrielcefetzada/pixelArt-2.0">aqui</a>
      </p>
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p>ﾠ</p>
      <p>ﾠ</p>
    </div>
  );
};
