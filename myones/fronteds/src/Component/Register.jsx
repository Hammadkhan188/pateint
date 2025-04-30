import { toast ,ToastContainer} from 'react-toastify';
import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

export default function Register() {
    let [name,setName] = useState("")
    let [gender,setGender] = useState("")
    let [address,setAddress] = useState("")
    let [age,setAge]= useState("")
    let [phone,setPhone]= useState("")
    let [email,setEmail]=useState("")


    function clear(){
        setName("") 
        setAddress("")
        setGender("")
        setAge("")
        setPhone("")
        setEmail("")

    }
    
   async function save_form(){
        try {
            let username_regex=/^[A-Za-z0-9_-]{3,15}$/
            if(!name || !phone || !address || !age ||!email || !address ===0){
                toast.error("All field are required")
                return;
            }
            else if(!username_regex.test(name)){
                toast.error("username invalid")
            }
            else if(age < 18){
                toast.error("age greater then 18")
            }
            else{
                await  axios.post("http://localhost:3002/pateint/reg",{
                    name:name,
                    phone:phone,
                    gender:gender,
                    age:age,
                    address:address,
                    email:email
                })
                
                toast.success("data enter successfully")
                clear()

            }
      
        } catch (error) {
            console.log(error)
            
        }

    }
  return (
    <div className='container'>
          
        <h2>Enter Pateint Detail</h2><hr />
        <p>Name</p>
        <input type="text" placeholder='Name' className='form-control my-2'value={name} 
        onChange={(e)=>setName(e.target.value)} />

         <p>Email</p>
        <input type="email" placeholder='email' className='form-control my-2'value={email} 
        onChange={(e)=>setEmail(e.target.value)} />

        <p>Gender</p>
        <input type="text" placeholder='Gender' className='form-control my-2' value={gender}
        onChange={(e)=>setGender(e.target.value)} />

        <p>Phone</p>
        <input type="number" placeholder='Phone' className='form-control my-2' value={phone} 
        onChange={(e)=>setPhone(e.target.value)}  />

        <p>Age</p>
        <input type="number" placeholder='Age' className='form-control my-2' value={age}
        onChange={(e)=>setAge(e.target.value)} />

        <p>Address</p>
        <input type="text" placeholder='Address' className='form-control my-2' value={address}
        onChange={(e)=>setAddress(e.target.value)} />

        <button className='btn btn-primary my-2' onClick={save_form}>submit</button>
       
        <ToastContainer/>

    </div>
  )
}
