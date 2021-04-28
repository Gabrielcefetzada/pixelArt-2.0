import React, {useState, useEffect} from 'react';
import logo from '../images/logo_pixel.png'
import colorp from '../images/color_picker.png'
import '../styles/Tool.css'
import { Tool } from './Tool'
import { ToolProps } from './Tool'

export const PixelBox = () => {

    const vectorTools = [
        {
            key: 1,
            photo: logo,
            tool: "tool1",
        }, 

        {
            key: 2,
            photo: logo,
            tool: "tool2",
        },

        {
            key: 3,
            photo: logo,
            tool: "tool3",
        },

        {
            key: 4,
            photo: logo,
            tool: "tool4",
        },

        {
            key: 5,
            photo: logo,
            tool: "tool5",
        },

        {
            key: 6,
            photo: logo,
            tool: "tool6",
        },
    ];

    const [tools, setTools] = useState<ToolProps[]>([])
    const [name, setName] = useState('')
    
    useEffect(() => {
        setTools(vectorTools)
    }, [])
    
    return (
        <div>
            <h1>PixelBox</h1>
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
                <div>
                     <img src={colorp}></img><input type="color"></input>
                </div>
        </div>
    )
}
