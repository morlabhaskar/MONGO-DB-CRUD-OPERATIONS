import { useState } from "react";
import axios from "axios";

const Form1 = () =>{
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
        // 'college': '',
        // 'branch': '',
        // 'gender':''
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:5000/addstud",{formData})
        .then((res)=>console.log(res.data))
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" name="username" placeholder="Username" onChange={(e)=> setFormData({...formData,username:e.target.value})}/>
                <br/>
                <label>Password</label>
                <input type="text" name="password" placeholder="Password" onChange={(e)=> setFormData({...formData,password:e.target.value})}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Form1;