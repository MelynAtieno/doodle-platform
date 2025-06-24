import { useEffect, useRef } from "react"

const CanvasComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
    }, [])
    

    return (<div style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }}>
        <canvas ref={canvasRef} id="doodleCanvas" style={{ 
            border: "2px solid", 
            borderRadius:"8px", 
            backgroundColor: "white", 
            width:"800px", 
            height:"450px",
            cursor: "crosshair"
            }}>
            
        </canvas>
    </div>
    );

};

export default CanvasComponent;

