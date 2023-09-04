import Types from "prop-types"
const User=(props)=>{
    console.log(props)
    const {id , name, age}=props;
    return <div style={{backgroundColor:"violet" ,color:'white' ,margin:"10px auto"}}>
        <div>id : {id}</div>
        {/* <div>name : {name?name:"Anon"}</div> */}
        {/* <div>name : {name||"Anon"}</div> */}
        {name>0&&<div>name : {name}</div>}

        <div>age : {age}</div>
    </div>
}
User.propTypes={
    id:Types.string.isRequired,

    name:Types.string,

    age:Types.number.isRequired
}

// User.defaultProps={
//     name:"Anoon"
// }


export default User;