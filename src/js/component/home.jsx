import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const Home = () => {

	const[Color, setColor] = useState("rojo");
	return (
		<div className="gigante">  
		<div className="wrap">
		<div className="poste"></div>	
		<div className="grande">	
			<div 
			onClick={() => setColor("rojo")}
			className={" rojo " +(Color === "rojo" ?  "brillo" : "")}></div>		
			
			<div 
			onClick={() => setColor("amarillo")}
			className={" amarillo " +(Color === "amarillo" ?  "brillo" : "")}></div>		
			
			<div 
			onClick={() => setColor("verde")}
			className={" verde " +(Color === "verde" ?  "brillo" : "")}></div>		
			</div>	
			</div>
			</div>
	);
};

export default Home;
