import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import DataBaseView from './table';
import "./bg.css";


function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/courier/del?id=' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <>  <center>
            <h2>Package to Be Dismantled</h2>
            <br></br>
            <br></br>
            <div>

                <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>
<br></br>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
                </center>

            <h2>
                {error}
            </h2>
            <DataBaseView/>
        </>
    );
}

export default Deleteform;