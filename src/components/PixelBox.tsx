import React, { useState, useEffect } from 'react';
import  Draggable  from 'react-draggable';
import '../styles/PixelBox.css'


export const PixelBox = () => {

    let auxArray = [];
    for(let i = 0; i < 1562; i++){
        auxArray.push("auxElement")
    }
 
    const [currentTool, setCurrentTool] = useState('pencil')

                return (
                    <div className="container-pixel-box">
                        {auxArray.map((elem) => (
                            <>
                                <Draggable><div className="pixel blackPixel"></div></Draggable>
                                <Draggable><div className="pixel greyPixel"></div></Draggable>
                            </>
                        ))}
                    </div>
                )
            }
        