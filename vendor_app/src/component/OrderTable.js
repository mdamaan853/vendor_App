import React from 'react'

export default function OrderTable() {
    return (
        <div>
            <div className="container-fluid">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Requests</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>
          <h3>Nivera</h3>
          <h4>Order-123456</h4>
          <p>last updated 2 hours<br/>10 units 1 items</p>
    </td>
      <td>
          <button className="btn btn-primary">Accept</button>
           <button className="btn btn-primary">Reject</button>
      </td>
    </tr>
     </tbody>
</table>
            </div>
        </div>
    )
}
