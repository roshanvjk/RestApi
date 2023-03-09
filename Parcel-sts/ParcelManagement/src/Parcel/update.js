import * as React from 'react';
import { useState} from 'react';
import axios from 'axios';
import DataBaseView from './table';
export default function UpdateForm() {
    const[id,setId]=useState(""); 
	const[name,setName]=useState("");
	const[package_location,setPackage_location]=useState("");
	const[delivery_date,setDelivery_date]=useState("");
{
	async function save(event) {

        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/courier/put",

                { id:id,
                    name:name,
		package_location:package_location,
		delivery_date:delivery_date
                });
            alert("Package Updated");
            setId("");
		setPackage_location("");
		setDelivery_date("");
		setName("");


        }
        catch (err) {
            alert("Package Is Not Changed");
        }
    }

    return (
		<>
		<div id="login-box">
  <div class="left">
    <h1>Courier Service</h1>

	<center> <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/></center>

    
    <input type="text" name="Name" placeholder="Name"
	value={name}
	onChange={(event)=>{
		setName(event.target.value);
	}}
	/>
    <input type="text" name="Location" placeholder="Location"
	value={package_location}
	onChange={(event)=>{
		setPackage_location(event.target.value);
	}}
	/>
    <input type="text" name="Delivery Date" placeholder="Delivery Date" 
	value={delivery_date}
	onChange={(event)=>{
		setDelivery_date(event.target.value);
	}}
	/>
	

    <input type="submit" name="Deliver" value="Packed" 
	onClick={save}
	/>
  </div>
</div>
<DataBaseView/>
        </>
    );
}
}