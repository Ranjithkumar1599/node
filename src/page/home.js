import React from "react";
import { NavLink } from "react-router-dom";


const HomePage = () => {
    return(
        <div>
            <h2>This is Home page</h2>
            <NavLink to="contact">go to contact page</NavLink>
            <br></br>
            <NavLink to="about">Go to AboutPage</NavLink>
            <br></br>
            <NavLink to="form">form link</NavLink>

            
        </div>
    )


}

export default HomePage;





