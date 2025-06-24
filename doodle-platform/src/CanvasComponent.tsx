const CanvasComponent = () => {
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }}>
        <canvas style={{ 
            border: "2px solid", 
            borderRadius:"8px", 
            backgroundColor: "white", 
            width:"800px", 
            height:"400px",
            cursor: "crosshair"
            }}>
            
        </canvas>
    </div>
    );

};

export default CanvasComponent;

