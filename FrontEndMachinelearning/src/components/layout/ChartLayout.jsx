import React from "react";
import Piping from "../../assets/oil-rig.jpg";
import Pattern from "../../assets/pattern.png";


const ChartLayout = ({ children }) => {
    const homeContainerStyle = {
        position: "relative",
        height: "100vh",
        // border:"2px solid", 
        display:"flex",
        flexDirection:"column",
        // justifyContent:"space-evenly",
        marginLeft:20,
        marginRight:20,
        // padding:10,
        marginTop:10,
        paddingTop:5
        
 
        
    };

    const overlayStyle = {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "90%",
        backgroundColor:"#018076",
        // opacity: 0.9,
        zIndex: -1,
        // border:"2px solid red", 
        borderRadius:8
    };
   
    return (
        <div style={homeContainerStyle}>
            {children}
            <div style={overlayStyle}></div>
        </div>
    );
};

export default ChartLayout;
