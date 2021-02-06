import React from 'react'

const Contacts = () => {
    return (
        <div className="container py-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <input className="form-check-input" type="checkbox" value="" />
                        </th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <i class="fa fa-pencil mr-3"></i>
                            <i class="fa fa-trash"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
