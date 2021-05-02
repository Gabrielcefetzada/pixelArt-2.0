import React, {useState, useEffect} from 'react';
import '../styles/Tool.css'
import '../styles/global.css'
import '../styles/colorp.css'
import '../styles/PixelBox.css'
import { Tool } from './Tool'
import { ToolProps } from './Tool'
import InputColor from 'react-input-color';

// images

import logo from '../images/logo_pixel.png'
import colorp from '../images/color_picker.png'
import  bucket from '../images/balde-de-tinta.png.png'
import ligth from '../images/iluminador.png'
import pencil from '../images/lapis.png'
import bigPencil from '../images/pincel.png'
import  borrow from '../images/borracha.png'
import colorpImg from '../images/selecionador-de-cores.png'

export const IndexView = () => {

    const [currentTool, setCurrentTool] = useState('pencil')
    const [colorValue, setColorValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const style = { backgroundColor: colorValue }

    let auxArray = [];
    for(let i = 0; i < 1562; i++){
        auxArray.push("auxElement")
    }
 
    const vectorTools = [
        {
            key: 1,
            photo: bucket,
            tool: "tool1",
        }, 

        {
            key: 2,
            photo: pencil,
            tool: "tool2",
        },

        {
            key: 3,
            photo: borrow,
            tool: "tool3",
        },

        {
            key: 4,
            photo: bigPencil,
            tool: "tool4",
        },

        {
            key: 5,
            photo: colorpImg,
            tool: "tool5",
        },

        {
            key: 6,
            photo: ligth,
            tool: "tool6",
        },
    ];
    
    useEffect(() => {
        setTools(vectorTools)
    }, [])

    const [tools, setTools] = useState<ToolProps[]>([])
    const [name, setName] = useState('')
    
    return (
        <div>
           <div className="container-pixel-box">
                        {auxArray.map((elem) => (
                            <>
                                <div className="pixel blackPixel" onClick={() =>  setColorValue(inputValue)}
                                style={style}></div><div className="pixel greyPixel"></div>
                            </>
                        ))}
            </div>
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
                </div>
                <div className="container-colorp">
                    <div className="content-white">
                     <img src={colorp}></img>⠀
                     <input type="color" value={inputValue} onChange={e => setInputValue(() => e.target.value)}/>
                    </div>
                </div>
                <button onClick={() => console.log(colorValue)}>Ver</button>
        </div>
    )
}
