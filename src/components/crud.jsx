import axios from "axios";
import React, { useState, useEffect } from "react";
import Popup from "./popup";
const Crud = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //   alert("check"); 
        async function getUser() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
            console.log(res.data);
            setUsers(res.data);
        }
        getUser();
    });



    function openForm(id) {
    document.getElementById(`myForm${id}`).style.display = "block";
      }
      
    //   function closeForm() {
    //     document.getElementById("myForm").style.display = "none";
    //   }


    return (
        <React.Fragment>
            <table class="table caption-top table-bordered border-primary" style={{border:"2px solid black"}}>
                <caption style={{ textAlign: "center" }}>List of users</caption>
                <thead>
                    <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><button onClick = { () =>{openForm(`${user.id}`) } }>modal</button></td>
                            <td>Edit</td>
                            <td>Delete</td>
                            { <Popup  id = {user.id} />}
                        </tr>
                        

                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
}
export default Crud;