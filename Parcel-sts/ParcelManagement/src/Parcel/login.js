import React,{useState} from 'react' ;
import axios from 'axios';
import "./style1.css";
import DataBaseView from '../Parcel/table'
const Login=()=>{ 
	const[id,setId]=useState(""); 
	const[name,setName]=useState("");
	const[package_location,setPackage_location]=useState("");
	const[delivery_date,setDelivery_date]=useState("");

	async function save(event)
	{
		event.preventDefault();
	try{
		await axios.post("http://localhost:8080/courier/save",
		{
		name:name,
		package_location:package_location,
		delivery_date:delivery_date

	});
		alert("Packed Successfully");
		setId("");
		setPackage_location("");
		setDelivery_date("");
		setName("");
	}
	catch(err)
	{
		alert("Package Cant Be Delivered");
	}
	}
	return(
        <>
		<div id="login-box">
  <div class="left">
    <h1>Courier Service</h1>
    
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

	)
}

export default Login;