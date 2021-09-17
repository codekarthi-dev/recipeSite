import React from "react";
import "./Header.css";

let Header = (props) => {
    console.log(props);
   let onButtonClick = () =>{
        // props.onRecipeSelect();
    }
    return (<div className="header">
    
    <span className="logo">Tell me receipes</span>
    <nav>
    <button onClick={e => props.onRecipeSelect("Indian")}>Indian</button>
    <button onClick={e => props.onRecipeSelect("Italian")}>Italian</button>
    </nav>    
    
    </div>
            
    
    );
}

export default Header;