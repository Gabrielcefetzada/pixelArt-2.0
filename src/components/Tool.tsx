import React, { useState, useEffect } from 'react';
import '../styles/Tool.css'

export interface ToolProps {
    key: number;
    active?: boolean;
    photo: string;
    tool: string;
    onClick?: () => any; 
}

export const Tool = ({key, active = false, photo, onClick} : ToolProps) => {

    return (
        <div>
            <div className={`tool${active ? ' active' : ''}`} onClick={onClick} key={key}>
                <img src={photo}/>
            </div>
        </div>
    )
}