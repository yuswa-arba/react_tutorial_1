import React from 'react'

const CardShadow = (props) => {

    const borderLeftColor = props.borderLeftColor || ''

    return (
        <div className={"card shadow h-100 py-2 " + borderLeftColor}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            { props.title }
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{ props.value }</div>
                    </div>
                    <div className="col-auto">
                        <i className={"fas fa-2x text-gray-300 " + props.icon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardShadow
