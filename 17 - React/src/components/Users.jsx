import  { useState } from 'react';
import User from './user';
import {v4 as uuid} from 'uuid';
const Users = () => {
    const [usersArr]= useState([
        {id:uuid(),name:"Ahmed" ,age:20},
        {id:uuid(),name:"Ali" ,age:25},
        {id:uuid(),name:"Reem" ,age:27},
        {id:uuid(),name:"Abdelrahman" ,age:13},
        {id:uuid(),name:"Hasnaa" ,age:22},
    ])
    console.log(usersArr)
    return (
       <div>
        {usersArr.map((u)=><User key={u.id} name={0} id={u.id} age={u.age} ></User>)}
       </div>
    );
}

export default Users;

