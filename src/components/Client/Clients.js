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
    <div className="dash-buttons">
      <p>
        <a href="./clients/amat" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Add Client</a>
      </p>
      <table className="table" style={{"borderWidth":"3px", 'borderColor':"black", 'borderStyle':'solid'}}>
        <thead >
          <tr className="table-secondary">
            <th scope="col">ID:</th>
            <th scope="col">Name:</th>
            <th scope="col">Domain:</th>
            <th scope="col">Manager ID:</th>
            <th scope="col">Revenue per year:</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody >
          {clients.map(client =>
            <tr className="table-primary">
              <th>{client.id}</th>        
              <td>{client.name}</td>
              <td>{client.domain}</td>
              <td>{client.managerId}</td>
              <td>{client.revenuePerYear}</td>
              <td><button>Edit Client</button></td>
              <td><button>Delete Client</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}