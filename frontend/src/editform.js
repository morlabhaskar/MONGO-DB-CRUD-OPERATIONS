import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';

// import Form from 'react-bootstrap/Form';

const Editform = () =>{
    const [formdata, setFormData] = useState({
        'name': '',
        'rollno': '',
        'college': '',
        'branch': '',
    })
    const {name,rollno,college,branch} = formdata
    const {id} = useParams('id');
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5000/getstudentbyid/'+id)
        .then((res)=>
        {console.log(res.data)
        setFormData(res.data.studentdata)
        })
        .catch((err)=>console.log(err))
        
    },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formdata)
        
        axios.post("http://localhost:5000/updatestudent/"+id,formdata)
        .then((result)=>{
            alert(result.data.msg)
            
            
        })
        // alert('Data Updated Successfully!')
        navigate('/');
    }
    return(
        <div>
            

            <div className="form-container">
                <div class="container mt-3">
                    <div className="form-top">
                        <h1>Edit Form</h1>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating">
                                <input type="text" class="form-control" required value={name} name="name" onChange={(e)=> setFormData({...formdata,name:e.target.value})}/>
                                <label>Name</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                                <input type="text" class="form-control" required value={rollno} name="rollno" onChange={(e)=> setFormData({...formdata,rollno:e.target.value})}/>
                                <label>Roll no</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                                <input type="text" class="form-control" required value={college} name="college" onChange={(e)=> setFormData({...formdata,college:e.target.value})}/>
                                <label>College</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                                <input type="text" class="form-control" required value={branch} name="branch" onChange={(e)=> setFormData({...formdata,branch:e.target.value})}/>
                                <label>Branch</label>
                            </div>
                            <br/>
                            <input type="submit" class="form-control btn btn-primary" value="Update"/>
                        </form> 
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Editform;

