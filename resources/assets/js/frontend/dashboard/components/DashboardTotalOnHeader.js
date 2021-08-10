import React from 'react'
import CardShadow from "../../../ui/components/CardShadow";

const DashboardTotalOnHeader = (props) => {

    const previewDashboards = React.useMemo(() => {
        return props.data.map((dashboard, key) => {

            return (
                <div className="col-xl-3 col-md-6 mb-4" key={key}>
                    <CardShadow borderLeftColor={dashboard.color}
                                title={dashboard.title}
                                value={dashboard.total}
                                icon={dashboard.icon}
                    />
                </div>
            );

        })
    })

    return (
        <React.Fragment>
            {previewDashboards}
        </React.Fragment>
    )

}

export default DashboardTotalOnHeader
