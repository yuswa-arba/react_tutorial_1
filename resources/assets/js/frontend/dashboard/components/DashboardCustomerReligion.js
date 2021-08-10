import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";

const DashboardCustomerReligion = React.memo(props => {

    const previewReligionDashboard = React.useMemo(() => {

        let allDataObject = props.data.find(dashboard => dashboard.isAll == true)
        let totalAllData = allDataObject ? allDataObject.total : 0

        return props.data.map((dashboard, key) => {

            return (
                <React.Fragment key={key}>
                    <h4 className="small font-weight-bold">{dashboard.religion}
                        <span className="float-right">{dashboard.percent}</span>
                    </h4>
                    <div className="mb-4">
                        <ProgressBar variant="info" now={dashboard.total} max={totalAllData}/>
                    </div>
                </React.Fragment>
            );

        })

    })

    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Total Customer per Religions</h6>
            </div>
            <div className="card-body">
                {previewReligionDashboard}
            </div>
        </div>
    );

})

export default DashboardCustomerReligion
