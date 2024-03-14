import React from "react";
import Piping from "../../assets/BackgroundPiping.png";

const HomeLayout = ({ children }) => {
    const homeContainerStyle = {
        position: "relative",
        height: "92vh",
        // border:"2px solid", 
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        
    };

    const overlayStyle = {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Piping})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        opacity: 0.1,
        zIndex: -1,
    };

    return (
        <div style={homeContainerStyle}>
            {children}
            <div style={overlayStyle}></div>
        </div>
    );
};

export default HomeLayout;
