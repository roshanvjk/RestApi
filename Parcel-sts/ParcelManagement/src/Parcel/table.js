import React,{ useEffect,useState} from "react";
import './view.css';
import axios from "axios";
function DataBaseView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{

    axios.get('http://localhost:8080/courier/get').then(function (response) {
    addContent(response.data);
    });
    })
    return(
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Delivery Date</th>
                </tr>
                {content.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.package_location}</td>
                        <td>{value.delivery_date}</td>
                    </tr>
                ))}
                    
            </table>
        </div>
    )
}
export default DataBaseView;