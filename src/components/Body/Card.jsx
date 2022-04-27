

import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const Card = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data})=>{
            setUsers(data.data)
        })
    },[])
  return (
   <div className='User'>
       
        {users.map((e)=>(
            
            // {console.log(e.avatar)}
            <div 
             style={{
                width:"150px",
                height:"200px",
                padding:'10px',
                background:"teal",
                margin:"10px"
                }} 
                 >
                <img src={e.avatar} alt="" />
               { e.first_name}
                <button>Add to Cart</button>
            </div>
        ))}
        Card
   </div>
  )
}
