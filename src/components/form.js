import React, { useState } from "react";

 const SimpleFormSubmittion = () => {
    let message = "hi there,gmorning";
    let address = {
       street : "south street",
       area : "mariyamman kovil"
    }

    let[loginForm,setLoginForm] = useState({
      
       username :"",
       password :""


    });

    

      let [inlineCondition,setInlineCondition] = useState(true);



      let[Passwordvisibility,setpasswordvisbility] = useState(false);





   const onSubmitForm = () => {
      console.log(loginForm);

   }



   const onHandlingInput = (event) => {
   
    setLoginForm({...loginForm,[event.target.id]:event.target.value});


   }

   const handleconditionRendering = (Condition) => {
      setInlineCondition(Condition);

   }


   const passwordvisibility = (condition) =>{
      setpasswordvisbility(condition)

   }



    return(
        <div>
            <h1>Form</h1>
            <h2>{message}</h2>
            <h3>This userName{loginForm.username}</h3>
            <h4>Thgis password{loginForm.password}</h4>
            <h2> This is Location {address.street} and {address.area}</h2>
             <div>
             <label className="label">Enter your name</label>
             <input type="text" placeholder="please enter your name" onChange={onHandlingInput} id="username"/>


            
           </div>
        <div>
             <label className="label">Enter your Password</label>
             <input type={passwordvisibility ? "text": "password"} placeholder="please enter your pasword" onChange={onHandlingInput} id="password"/>
             {Passwordvisibility ?<img src={require("../image/open-eye.png")} alt="open eye" className="password-icon"  onClick={() => passwordvisibility(false)}/>: <img src={require("../image/close-eye.png")} alt="close eye" className="password-icon" onClick={() => passwordvisibility (true)}/>}


        </div>
      <div className="label">
         <button onClick={() => onSubmitForm ()}>Submit</button>
      </div>

       <div>
         <h2>Condition Rendering</h2>
         <button onClick={() => handleconditionRendering(true)}>show messsage</button>
         <button onClick={() => handleconditionRendering(false)}>Hide message</button>


         {inlineCondition && <div>
         <h3>this is inline condition </h3>
         <h2>i will show & hide based on Condition</h2>
         </div>}
         <div>
            <h2>Inline if-Else condition</h2>
            
         </div>
         
       </div>
        





          </div>
    )
 }

 export default SimpleFormSubmittion;