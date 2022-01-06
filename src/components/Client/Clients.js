import React, { useEffect,useState} from "react";
//import { Link } from 'react-router-dom';

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
// const Clients = () => {
//     return (
//       <body>
//         <body>
//          <section className="container">
//           <h1 className="large text-primary">Clients</h1>
//           <div className="dash-buttons">
//             <Link to="./amat" className="btn btn-light">
//             <i className="fas fa-user-circle text-primary"></i> Add Client</Link>
//           </div> 
//           <div className="profiles">
//             <div className="profile bg-light">
//               <img
//                 className="round-img"
//                 src="./img/Letter_a.svg"
//                 alt=""
//               />
//               <div>
//                 <h2>Client a</h2>
//                 <p>client_a@domain.com</p>
//                 <p>Manager: Mr.X</p>
//                 <p>Revenue: Million</p>
                             
//               </div>
    
//               <div className="dash-buttons">
//                 <a href="client" className="btn btn-primary">View Client</a> 
//                 <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
//                 <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
//               </div>
  
              
//             </div>


//             <div className="profile bg-light">
//               <img
//                 className="round-img"
//                 src="./img/4612_B.jpg"
//                 alt=""
//               />
//               <div>
//                 <h2>Client B</h2>
//                 <p>client_b@domain.com</p>
//                 <p>Manager: Mr.Z</p>
//                 <p>Revenue: Million</p>
                             
//               </div>
    
//               <div className="dash-buttons">
//                 <a href="client" className="btn btn-primary">View Client</a> 
//                 <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
//                 <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
//               </div>
  
              
//             </div>



//             <div className="profile bg-light">
//               <img
//                 className="round-img"
//                 src="./img/c.png"
//                 alt=""
//               />
//               <div>
//                 <h2>Client c</h2>
//                 <p>client_c@domain.com</p>
//                 <p>Manager: Mr.Z</p>
//                 <p>Revenue: Million</p>
                             
//               </div>
    
//               <div className="dash-buttons">
//                 <a href="client" className="btn btn-primary">View Client</a> 
//                 <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
//                 <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
//               </div>
  
              
//             </div>



//             <div className="profile bg-light">
//               <img
//                 className="round-img"
//                 src="./img/1200px-LetterD.svg.png"
//                 alt=""
//               />
//               <div>
//                 <h2>Client d</h2>
//                 <p>client_d@domain.com</p>
//                 <p>Manager: Mr.Y</p>
//                 <p>Revenue: Million</p>
                             
//               </div>
    
//               <div className="dash-buttons">
//                 <a href="client" className="btn btn-primary">View Client</a> 
//                 <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
//                 <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
//               </div>
  
              
//             </div>



//             <div className="profile bg-light">
//               <img
//                 className="round-img"
//                 src="./img/Font_E.svg.png"
//                 alt=""
//               />
//               <div>
//                 <h2>Client e</h2>
//                 <p>client_e@domain.com</p>
//                 <p>Manager: Mr.Y</p>
//                 <p>Revenue: Million</p>
                             
//               </div>
    
//               <div className="dash-buttons">
//                 <a href="client" className="btn btn-primary">View Client</a> 
//                 <a href="edit-client" className="btn btn-dark"><i className="fas fa-user-circle text-primary"></i> Edit Client</a>
//                 <button className="btn btn-danger"><i className="fas fa-user-minus"></i>Delete Client</button>
  
//               </div>
  
              
//             </div>                  
    
  
  
//             </div>
//             </section>

//         </body>
//       </body>


      
//     );
//   }
  
//   export default Clients;