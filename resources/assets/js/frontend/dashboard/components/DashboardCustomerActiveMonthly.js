import React from 'react'
import {Line} from "react-chartjs-2";

const DashboardCustomerActiveMonthly = React.memo(props => {

    let labels = [];
    let dataTotal = [];

    props.data.forEach(function (data) {
        labels.push(data.month)
        dataTotal.push(data.total)
    })

    const data = {
        labels: labels,
        datasets: [{
            label: "Total Customer",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: dataTotal,
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
                <h6 className="m-0 font-weight-bold text-primary">Total Customer Active</h6>
            </div>
            <div className="card-body">
                <div className="chart-area">
                    <Line data={data} options={options}/>
                </div>
            </div>
        </div>
    )

})

export default DashboardCustomerActiveMonthly
