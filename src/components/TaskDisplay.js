import React  from 'react'
import './TaskDisplay.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useForm } from 'react-hook-form'



function Taskdisplay() {

    //todo state
    let [todo,setTodo]=useState([])
    //http error state
    let [err,setErr]=useState('')
    //gettodos function
    let gettodos=()=>
    {
        axios.get('http://localhost:4000/todo')
        .then((response)=>
        {
            
            if(response.status===200)
            {
                setTodo(response.data)
            }
        })
        .catch((err)=>
        {
            console.log(err)
            if(err.response)
            {
                setErr(err.response)
            }
            else if (err.request)
            {
                setErr(err.message)
            }
            else 
            {
                setErr(err.message)

            }
        })
    }
    //use effect
    useEffect(()=>{
        gettodos()

    },[])

    
    
    
  return (
    <div  className='container'>
        

        {/*display todos in table from */}
        <div className='table-responsive'>
        <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Cateogery</th>
                <th>Status</th>
                <th>Edit</th>
            
            </tr>
        </thead>
        <tbody>
            {
                todo.map((todoObj)=>
                <tr key={todoObj.id}>
                    <td>{todoObj.taskname}</td>
                    <td>{todoObj.starttime}</td>
                    <td>{todoObj.endtime}</td>
                    <td>{todoObj.cateogery}</td>
                    <td>{todoObj.status}</td>
                    <td><button className='btn border btn-dark' >Update Status</button></td>
                </tr>
                )
            }
         
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default Taskdisplay