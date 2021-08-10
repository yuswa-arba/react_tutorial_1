import React from 'react'

export const ButtonIconSplitPrimary = (props) => {
    return (
        <button type={props.type || 'button'}
                className={"btn btn-primary btn-icon-split float-md-right " + props.extraClass}
                onClick={props.handle}>
                                        <span className="icon text-white-50">
                                            <i className={"fas " + props.icon}></i>
                                        </span>
            <span className="text">{props.name}</span>
        </button>
    );
}

export const ButtonIconSplitLight = (props) => {
    return (
        <button type={props.type || 'button'}
                className={"btn btn-light btn-icon-split float-md-right " + props.extraClass}
                onClick={props.handle}>
            <span className="icon text-white-50">
                <i className={"fas " + props.icon}></i>
            </span>
            <span className="text">{props.name}</span>
        </button>
    );
}
