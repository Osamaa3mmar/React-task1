import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Code() {
    let user={Name:"osama",
        Age:25,
        Email:"osama@gmail.com",
        Phone:"01012345678",
        Address:"Palstine"
    }
    const [Counter,setCounter]=useState(0);
    const [userAppear,setUser]=useState(0);
const pluseCount=()=>{
    setCounter(Counter + 1)
}

const minusCount=()=>{
    if(Counter > 0){
    setCounter(Counter - 1)
    }
}
const changeAppear=()=>{
    if(userAppear){
        setUser(0);
    }
    else
    setUser(1);
}
if(userAppear){
  return (
    <div className="bg-primary p-5 rounded">
        <div className="counter ">
      <h1>Counter :{Counter}</h1>
      <div className="btns">
        <button className="btn btn-dark" onClick={pluseCount}>+</button>
        <button className="btn btn-dark" onClick={minusCount}>-</button>
      </div>
      </div>
      <div>
        <button className='show-user-btn  btn btn-dark' onClick={changeAppear}>Show User</button>
        
      </div>
    </div>
  )}
  else
  return (
    <div className="bg-primary p-5 rounded">
        <div className="counter ">
      <h1>Counter :{Counter}</h1>
      <div className="btns">
        <button className="btn btn-dark" onClick={pluseCount}>+</button>
        <button className="btn btn-dark" onClick={minusCount}>-</button>
      </div>
      </div>
      <div>
        <button className='show-user-btn  btn btn-dark' onClick={changeAppear}>Hide User</button>
        <div className='user-card'>
            <h3>UserName: {user.Name}</h3>
            <h3>UserAge: {user.Age}</h3>
            <h3>UserEmail: {user.Email}</h3>
            <h3>UserPhone: {user.Phone}</h3>
            <h3>UserAddress: {user.Address}</h3>
        </div>
      </div>
    </div>
  )
}
