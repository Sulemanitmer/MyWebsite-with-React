import React, { useEffect, FC, CSSProperties } from 'react'

import './Fluid.css';

export interface FluidProps {
    className?: string;
    style?: CSSProperties;
}

export const Fluid: FC = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./fluid-script.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])
    return (
        <canvas
            className="fluid-canvas"></canvas>
    );
}
