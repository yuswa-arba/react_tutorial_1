import React from 'react'

const DashboardCustomerActivity = (props) => {

    function showOrHideAttributes(e) {

        let targetAttributes = document.getElementById(e.target.getAttribute('data-target-attributes'))

        if (targetAttributes.classList.contains('show')) {
            targetAttributes.classList.remove('show')
        } else {
            targetAttributes.classList.toggle('show')
        }

    }

    const previewActivityList = React.useMemo(() => {

        return props.data.map((dashboard, key) => {

            const previewAttributeList = []
            Object.keys(dashboard.activityAttributes).forEach(index => {

                previewAttributeList.push(
                    <p className="fs-11 mb-0" key={key + index}>
                        <b className="fs-12">{index} : </b> {dashboard.activityAttributes[index]}
                    </p>
                )

            })

            return (
                <tr key={key}>
                    <td>{dashboard.dateTime}</td>
                    <td>{dashboard.customer.name}</td>
                    <td>{dashboard.action}</td>
                    <td>
                        <div className="mb-1">
                            <div className='border-bottom'>
                                {dashboard.description}
                            </div>
                        </div>
                        <div className="mb-0 font-weight-bold cursor" onClick={(e) => showOrHideAttributes(e)}
                             data-target-attributes={"target-attributes-" + key}>
                            Attributes :
                        </div>
                        <div className="collapse" id={"target-attributes-" + key}>
                            {previewAttributeList}
                        </div>
                    </td>
                </tr>
            )

        })

    })

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Customer Activity</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>Date/Time</th>
                            <th>Name</th>
                            <th>Action</th>
                            <th width="30%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {previewActivityList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default DashboardCustomerActivity
