import React, { useState } from "react";
import "./Todolist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4} from "uuid";





export default function Todolist() {
    let uuid= uuidv4()


    const [input, setinput] = useState("")

    const [checked, setChecked] = React.useState({
        completed: false
      
    }); 

    const [todolist, settodolist] = useState(

        [

            {
                task: "eat",
                id: 1,
            },
            {
                task: "sleep",
                id: 2,
            },

        ]

    )



    const handleadd = (e) => {

        setinput(e.target.value)
        
    };


    const onsubmit = () => {

        settodolist([...todolist, { task: input, id: uuid,}]);
    };

    function handleChange(e) {
        setChecked(e.target.checked);
        alert("task completed")
    
     }

    const handledelete=(deleteid)=>{

        const filterdelete=todolist.filter(to=>to.id != deleteid)
        settodolist(filterdelete)

        console.log(deleteid)


    };

    const handleupdate=(index)=>{

        let updateddata=prompt("enter the task",todolist[index].task)

        const copieddata=[...todolist]

        copieddata[index].task=updateddata

        settodolist(copieddata)

    }
  return (
    <div>
      <div className="container">
        <h2>To Do List</h2>
    <div className="newtask">
        <input type="text" placeholder="Add Tasks" onChange={(e) => handleadd(e)}></input>
        <button id="mb"  onClick={onsubmit}>Add</button>
    </div>

          {todolist.map((to, index) => (

                <div className="task" key={index}>
<input id="check" value = "test" type = "checkbox" onChange = {handleChange} />
  <span>{to.task}</span>
 <button  id="push"onClick={()=>handledelete(to.id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
 <button id="push" onClick={()=>handleupdate(index)}>Update</button>

                </div>
            ))}
    </div>
</div>

  )
}
