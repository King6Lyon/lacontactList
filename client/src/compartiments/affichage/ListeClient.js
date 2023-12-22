import React from 'react'
import ClientCard from './ClientCard'
import "../affichage/ListeClient.css"
const ListeClient = () => {
  return (
    <div>
      <div className="table-container">
  <div className="table-horizontal-container">
    <table className="unfixed-table">
      <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Column one</th>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
        </tr>
        <tr>
          <th>Column one</th>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
        
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
        <tr>
          <td>Column one</td>
          <td>Column two</td>
          <td>Column three</td>
          <td>Column four</td>
          
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
          
        </tr>
      </tfoot>
    </table>
  </div>
</div>
<ClientCard/>
</div>
  )
}

export default ListeClient


