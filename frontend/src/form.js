import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
// import { Link } from 'react-router-dom';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

const Forms = () =>{
    const [formData, setFormData] = useState({
        'name': '',
        'rollno': '',
        'college': '',
        'branch': '',
        // 'gender':''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:5000/addstud",{formData})
        .then((res)=>console.log(res.data))
        alert('Data Added Successfully!')
        navigate('/')
        setFormData({
            name:"",
            rollno:"",
            college:"",
            branch:""
        });
    }
    return(
        <div>
            <div className="form-container">
                <div class="container mt-3">
                    <div className="form-top">
                        <h1>Add Data</h1>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating">
                                <input type="text" class="form-control" required name="name" onChange={(e)=> setFormData({...formData,name:e.target.value})}/>
                                <label for="name">Name</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                                <input type="text" class="form-control" required name="rollno" onChange={(e)=> setFormData({...formData,rollno:e.target.value})}/>
                                <label>Roll no</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                                <input type="text" class="form-control" required name="college" onChange={(e)=> setFormData({...formData,college:e.target.value})}/>
                                <label>College</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                                <input type="text" class="form-control" required name="branch" onChange={(e)=> setFormData({...formData,branch:e.target.value})}/>
                                <label>Branch</label>
                            </div>
                            <br/>
                            <input type="submit" class="form-control btn btn-primary" value="submit"/>
                        </form> 
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Forms;



