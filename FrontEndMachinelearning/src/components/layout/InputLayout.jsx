import React from "react";
import Piping from "../../assets/oil-rig.jpg";
import Pattern from "../../assets/pattern.png";


const InputLayout = ({ children }) => {
    const homeContainerStyle = {
        position: "relative",
        height: "100vh",
        // border:"2px solid", 
        display:"flex",
        flexDirection:"column",
        // justifyContent:"space-evenly",
        // marginLeft:30,
        // marginRight:30,
        
    };

    const overlayStyle = {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // backgroundImage: `url(${Piping})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.08,
        zIndex: -1
    };
    const riggidStyle = {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Pattern})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize:"5%",
        // backgroundSize: "cover",
        opacity: 0.6,
        zIndex: -1
    };

    return (
        <div style={homeContainerStyle}>
            {children}
            <div style={riggidStyle}>
                <div style={overlayStyle}></div>
            </div>
        </div>
    );
};

export default InputLayout;
