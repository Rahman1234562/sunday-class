import React, { useState } from 'react'
import classes from './Card.module.css'

export default function Card() {
        const[todos, setTodos] = useState(false)
    const handkeEdit = () => {

        console.log("edit");
        const items = [
            {id: 1, todo: "todo1"},
            {id: 2, todo: "todo2"},
            {id: 3, todo: "todo3"},
            {id: 4, todo: "todo4"}
        ]
       setTodos(items)
    }
  return (
    <div>
        <div  className={classes.container}>
                <input  type="text" id="fname" name="search"/><br /> 
            
                <button className={classes.edit} onClick={handkeEdit}>Edit</button>
                <button>Delete</button>
        </div>
    

    </div>
  )
}
