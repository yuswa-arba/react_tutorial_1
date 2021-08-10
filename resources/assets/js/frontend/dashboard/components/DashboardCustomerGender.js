import React from 'react'
import {Doughnut} from "react-chartjs-2";

const DashboardCustomerGender = React.memo(props => {

    let labels = [];
    let dataTotal = [];

    props.data.forEach(function (data) {
        labels.push(data.gender)
        dataTotal.push(data.total)
    })

    const data = {
        labels: labels,
        datasets: [{
            data: dataTotal,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }

    return (
        <div className="card shadow mb-4">
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Total Customer (Gender)</h6>
            </div>
            <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                    <Doughnut data={data} options={options}/>
                </div>
                <div className="mt-4 text-center small">
                    <span className="mr-2">
                        <i className="fas fa-circle text-success"></i> Female
                    </span>
                    <span className="mr-2">
                        <i className="fas fa-circle text-primary"></i> Male
                    </span>
                </div>
            </div>
        </div>
    )

})

export default DashboardCustomerGender
