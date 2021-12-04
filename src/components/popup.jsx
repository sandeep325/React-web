import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import "./Modal.css";

function Popup({id}) {

 const formId =  "myForm"+id;
  function closeForm() {
    document.getElementById(`myForm${id}`).style.display = "none";
  }
// for get the specific user 

const [getUser ,setGetUser] = useState([]);
useEffect(() => {
  //   alert("check"); 
  async function getUserData() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(res.data);
      setGetUser(res.data);
  }
  getUserData();
});

// end for get  specific user 
  return (
    <div className="form-popup" id={formId}>
    <form  class="form-container">

      <h6 ><span style={{color:"green"}}>{getUser.name} </span>Detail-</h6>
      <p>  
    <table className="table  border-primary">
    <tr><th scope="col">Employee Code :</th><td>{getUser.id}</td></tr>
    <tr><th scope="col">Username :</th><td>{getUser.username}</td></tr>
    <tr><th scope="col">Email :</th><td>{getUser.email}</td></tr>
    <tr><th scope="col">City :</th><td>{(getUser.address.city) ? getUser.address.city  : 'NA'}</td></tr>
    <tr><th scope="col">Zip Code :</th><td>{(getUser.address.zipcode) ? getUser.address.zipcode: 'NA'}</td></tr>
    <tr><th scope="col">Company Name :</th><td>{(getUser.company.name) ? getUser.company.name: 'NA'}</td></tr>

    <tr></tr>

    </table>
      </p>
  
      <h4  className="btn cancel" onClick = { () =>{closeForm() } }>X</h4>
    </form>
  </div>
  
  );
}

export default Popup;
