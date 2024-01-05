import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css'
import { Link } from 'react-router-dom';

function Datalist() {
    const [students,setStudents] = useState([])
    const api = 'http://localhost:5000/getstudent'
    useEffect(()=>{
        axios.get(api).then((response)=>
        // console.log(response.data.studentdata)
        setStudents(response.data.studentdata)
        )
    });
    const DelHandler = (id) => {
        console.log(id)

        
        // axios.post('http://localhost:5000/delete',{id}).then((response)=>
        //   alert('Delete')
        // )

        //sim
        // const api = 'http://localhost:5000/deleteuser/'+id
        axios.delete('http://localhost:5000/deleteuser/'+id)
        .then(response=>{
            console.log(response.data.msg)
            if(response.data.message === 'Successfully deleted'){   
                alert('successfully deleted')
                window.location.reload()
            }
        });
    }
  return (
    <div>
        <br/>
        <div className='table-container'>
            <div className='table-add'>
                <div className='add-botton'>
                    <Link to={`/form`}><button className='add-btn'>Add</button></Link>
                </div>
            </div>
                <table align='center' cellPadding={5} class="table-bordered">
                                <tr className='head'>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>RollNo</th>
                                    <th>College</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            {
                            students.map((ele,i,arr)=>{
                                    return(
                                    <tr key={i}>
                                        <td className='odd'>{i+1}</td>
                                        <td className='eve'>{ele.name}</td>
                                        <td className='odd'>{ele.rollno}</td>
                                        <td className='eve'>{ele.college}</td>
                                        <td className='odd'>{ele.branch}</td>
                                        <td className='eve'><Link to={`/editform/${ele._id}`}><button className='update-button'>Edit</button></Link></td>
                                        <td className='odd'><button className='del-button' onClick={()=>DelHandler(ele._id)}>Delete</button></td>
                                        {/* <td className='eve'><button className='del-button' onClick={()=>DelHandler(ele._id)}>Delete</button></td> */}
                                        {/* <td><Link to={}>Edit</Link></td> */}
                                    </tr>
                                    )
                                })
                            }
                </table>
        </div>
    </div>
  )
}
export default Datalist

