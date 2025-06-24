import { useEffect, useRef, useState } from "react"

const CanvasComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas){
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;

            const context = canvas.getContext("2d");
            if(context){
                context.lineCap = "round";
                context.strokeStyle = "black";
                context.lineWidth = 5;
                setCanvasContext(context)
            }
        } else {
            console.log("waiting...")
        }
    }, []);
    
    const startDrawing = () =>{};

    const stopDrawing = () =>{};

    const draw = () =>{};
    

    return (<div style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }}>
        <canvas ref={canvasRef} id="doodleCanvas" onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing}
        style={{ 
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

