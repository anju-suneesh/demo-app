import React, { useEffect,useState} from "react";

export default function Clients()
{  const [clients,setClients]=useState([])
  useEffect(()=>
  {
    fetch("http://localhost:8000/clients")
    .then(res => res.json())
    .then((response)=>{setClients(response);})
  }, [])


  console.log("clients",clients)
return(
<table className="table">
  <thead>
    <tr className="table-secondary">
      <th scope="col">ID:</th>
      <th scope="col">Name:</th>
      <th scope="col">Domain:</th>
      <th scope="col">Manager ID:</th>
      <th scope="col">Revenue per year:</th>
    </tr>
  </thead>
  <tbody>
  {clients.map(client=>
    <tr className="table-info">
      <th class="row">{client.id}</th>
      <td>{client.name}</td>
      <td>{client.domain}</td>
      <td>{client.managerId}</td>
      <td>{client.revenuePerYear}</td>
    </tr>)}
  </tbody>
</table>
)}