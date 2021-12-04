import React, {useState,useEffect}  from "react";
import axios  from "axios";
const Api = () => {
   const [num, setNum] = useState('');

   const [id , setId] = useState('');
   const [name , setName] = useState('');
   const [height , setHeight] = useState('');
//    const [moves , setMoves] = useState('');


useEffect(() => {
    // alert({num});
    async function getData() {
    const res  =   await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

    console.log(res.data);
    setId(res.data.id);
    setName(res.data.name);
    setHeight(res.data.height);
    // setMoves(res.data.moves.length);


    }
 getData();

});
    return(

        <React.Fragment>
       <center>
       <h5>DATA FETCH  FROM API</h5>
                  <h6>{num}</h6>
       <select className="def_select" value={num} onChange ={(event)=>{setNum(event.target.value)}}>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="2">3</option>
       <option value="2">4</option>
       <option value="25">25</option>
       <option value="81">81</option>

        </select>

        <h5>Id :  {id ? id : 'NA' }</h5>
        <h5>name : {name ? name : 'NA'}</h5>
        <h5>Height : {height ? height : 'NA'}</h5>

       </center> 

        </React.Fragment>
    );
}
export default Api;