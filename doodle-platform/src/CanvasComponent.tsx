import { useEffect, useRef } from "react"

const CanvasComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
            }
        } else {
            console.log("waiting...")
        }
    }, []);
    

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

