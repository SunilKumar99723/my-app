
import React, { Component } from 'react';

class CustomerDetails extends Component {

constructor(props){

    super(props)
    this.state = {
        customers :[]
    }
}


    render() {
        return (
            <div>
                <h2 className="text-center"> Customer List </h2>
                <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                    <tr>
                                        <th>Customer ID</th>
                                        <th>Customer Name</th>
                                        <th>Customer Mobile</th>
                                        <th>Customer Email</th>
                                        <th>Customer Address</th>
                                    </tr>

                            </thead>
                            <tbody>
                                {
                                this.state.customers.map(
                                    
                                    customer=>
                                    <tr key={customer.Customer_Id}>
                                        <td>{customer.Customer_Name}</td>
                                        <td>{customer.Customer_Mobile}</td>
                                        <td>{customer.Customer_Email}</td>
                                        <td>{customer.Customer_Address}</td>
                                    </tr>                                     
                                    )
                                
                                }
                            </tbody>

                        </table>

                </div>
            </div>
        );
    }
}

export default CustomerDetails;