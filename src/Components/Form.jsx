import React, { useState } from "react";
import './Form.css';

const Form = () => {
      
    const [name, setname] =useState("soni")
    const [email,setemail] =useState("soni@df")
    const [text,settext] =useState("welcome")

    // let name = "soni";
    // let email = "soni@df";
    // let text ="welcome"

    const onsubmit = (event) =>{
        event.preventDefault();
        
        setname(event.target[0].value)
        setemail(event.target[1].value)
        settext(event.target[2].value)
        // const name = event.target[0].value
        // const email = event.target[1].value
        // const text = event.target[2].value

        console.log({name,email,text})


    //   console.log("name", event.target[0].value);
    //   console.log("email", event.target[1].value);
    //   console.log("text", event.target[2].value);

    }
return (
    <>
    <form onSubmit={onsubmit} className="form">
      <label>Enter your name:
        <input type="text" name="name"/>
      </label>
      <br/><br/>
      <label>Enter your email:
        <input type="email" email="email"/>
      </label>
      <br/><br/>
      <label>Enter text:
      <textarea name="text"/>
      </label>
      <br/>
      <button className="btn">submit button</button>
    </form>
    <div>
        {/* {name + "" + email + "" + text} */}
        <table>
        <tr>
        <th>{name}</th>
         <th>{email}</th>
        <th>{text}</th>
       </tr>
       </table>
        
    </div>
    </>

);
}

export default Form;