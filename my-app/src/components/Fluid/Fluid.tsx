import React, { useEffect, FC} from 'react'

import './Fluid.css';

export const Fluid: FC = () => {

    useEffect(() => {
        setTimeout(function()
        {  
        const script = document.createElement("script");
        script.src = "./fluid-script.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, 1000);
    }, [])
    return (
        <canvas
            className="fluid-canvas"></canvas>
    );
}
