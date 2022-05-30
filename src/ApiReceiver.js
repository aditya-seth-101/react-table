import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TabelDisplay from './TabelDisplay'

const ApiReceiver = () => {
    let [s,setS]=useState([])
    useEffect(()=> {
        axios.get(
           'https://jsonplaceholder.typicode.com/users'
        ).then(res=> {
            setS(res.data) 
            console.log(s)
        })
    },[])
  return (
    <div>
        <TabelDisplay s={s}/>
    </div>
  )
}

export default ApiReceiver