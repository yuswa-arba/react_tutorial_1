import React from 'react'
import PaginationRow from "../../../ui/components/PaginationRow";
import {Loading, NotAvailable} from "../../../ui/components/Loading";

const ListCustomer = (props) => {

    const previewCustomerList = React.useMemo(() => {
        return props.customers.map((customer, key) => {

            return (
                <div className="col-xl-3 col-md-6 cursor" key={key} onClick={() => props.link(customer)}>
                    <div className="card py-2 hover-outline-primary-customer bg-white m-b-15">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{customer.name}</div>
                                    <div className="fs-14 font-weight-bold text-secondary mb-1">
                                        {customer.religion.name}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user-circle fa-3x text-gray-300"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        })
    })

    return (
        <React.Fragment>

            {props.onLoading ? <Loading/> : (props.customers.length > 0) ? <div className="row">
                {previewCustomerList}
            </div> : <NotAvailable/>}

        </React.Fragment>
    );

}

export default ListCustomer
